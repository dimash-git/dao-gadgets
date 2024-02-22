<?php

namespace App\Http\Controllers;

use App\Events\DeviceUpdated;
use App\Models\Device;
use App\Models\Devicesclass;
use App\Models\Devicesclassvalues;
use App\Models\Devicevalues;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use Bluerhinos\phpMQTT;
use Illuminate\Support\Facades\DB;

class DeviceValueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //  
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Devicevalues $devicevalue)
    {
        $validatedData = $request->validate([
            'id_device_value' => 'required|exists:deviceclassvalues,id',
            'id_kitchen_device' => 'required|exists:kitchendevices,id',
            'property' => 'required|string|max:255',
            'value' => 'nullable|numeric',
        ]);

        $devicevalue->update($validatedData);

        $this->sendMqttMessage($devicevalue);

        $device = Device::findOrFail($devicevalue->id_kitchen_device);

        // Fire the DeviceUpdated event with the Device instance
        event(new DeviceUpdated($device));

        return redirect()->back()->with('message', 'Device Value was successfully updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        //
    }

    protected function sendMqttMessage($devicevalue)
    {
        $mqtt_client = new phpMQTT(env('MQTT_HOST'), env('MQTT_PORT'), env('MQTT_CLIENT_ID'));
        if ($mqtt_client->connect(true, NULL, env('MQTT_LOGIN'), env('MQTT_PASSWORD'))) {

            $device = $devicevalue->device()->first();

            if ($device) {
                $kitchen = $device->kitchen()->first();
                $mqtt_prefix = $kitchen ? $kitchen->mqtt_prefix : null;
            }


            $device_class_value = $devicevalue->deviceclassvalue()->first();

            if (!$device_class_value || empty($device_class_value->topic)) {
                Log::error('MQTT topic not found for device value update.');
                return;
            }

            if ($devicevalue->property === "brightness") {
                // $value_for_mqtt = $this->calculateBrightnessValue( $devicevalue->value, $deviceClassValue->min, $deviceClassValue->max);
            } else {
                $value_for_mqtt = $this->getStatusSystemForMqtt($device->id, $devicevalue->property, $devicevalue->value);
            }

            $topic = $device_class_value->topic;



            if ($topic === "relay") {
                if (gettype($device_class_value->relay_duration) !== 'NULL') {
                    $mqtt_client->publish($mqtt_prefix . '/relay/' . $device['line_number'], $device_class_value->relay_duration);
                } else {
                    $mqtt_client->publish($mqtt_prefix . '/relay/' . $device['line_number'], $value_for_mqtt);
                }
            } else {
                if ($topic === 'mosfet' || substr_count($topic, 'backlight') > 0) {
                    if (strpos($device['line_number'], ',') !== false) {
                        $lineNumbers = explode(",", $device['line_number']);
                        foreach ($lineNumbers as $lineNumber) {
                            $mqtt_client->publish($mqtt_prefix . '/' . $topic . '/' . $lineNumber, $value_for_mqtt);
                        }
                    } else {
                        $mqtt_client->publish($mqtt_prefix . '/' . $topic . '/' . $device['line_number'], $value_for_mqtt);
                    }
                } else if (strpos($topic, 'zigbee') !== false) {
                    $top = str_replace('N', $device->id, $topic);
                    $mqtt_client->publish($mqtt_prefix  . '/' . $top, (string)$value_for_mqtt, 1);
                } else {
                    $mqtt_client->publish($mqtt_prefix . '/' . $topic, $value_for_mqtt);
                }
            }

            $mqtt_client->close();
        } else {
            Log::error('Failed to connect to MQTT broker.');
        }
    }

    protected static function getStatusSystemForMqtt($id, $property, $value)
    {

        $device = Device::find($id);

        $device_class_value = Devicesclassvalues::where('id', $device->id_device_class)
            ->where('name', $property)
            ->first();

        $device_class = Devicesclass::find($device->id_device_class);

        switch ($value) {
            case "true":
                if (!empty($device_class_value->status_on)) {
                    $value = $device_class_value->status_on;
                }
                if ($device_class->device_parameters == 1) {
                    $devicesIrValue = DB::table('devices_ir_values')
                        ->where('id_device', $device->id)
                        ->where('name', $property)
                        ->first();
                    $value = $devicesIrValue->value_on ?? $value;
                }
                break;
            case "false":
                if (!empty($device_class_value->status_off)) {
                    $value = $device_class_value->status_off;
                }
                if ($device_class->device_parameters == 1) {
                    $devicesIrValue = DB::table('devices_ir_values')
                        ->where('id_device', $device->id)
                        ->where('name', $property)
                        ->first();
                    $value = $devicesIrValue->value_off ?? $value;
                }
                break;
        }

        // if (!empty($deviceValue->name)) {
        //     switch ($deviceValue->name) {
        //         case "brightness":
        //             $value = self::calculatePercentageValue($value, $deviceValue->min, $deviceValue->max);
        //             break;
        //     }
        // }

        return $value;
    }
}
