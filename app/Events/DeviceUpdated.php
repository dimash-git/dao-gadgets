<?php

namespace App\Events;

use App\Models\Device;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class DeviceUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $device;

    public function __construct(Device $device)
    {
        // Log::info('DeviceUpdated event instantiated', ['device' => $device->toArray()]);

        $this->device = $device;
    }

    public function broadcastOn()
    {
        // This event will be broadcast on the 'devices' channel
        return new Channel('devices');
    }

    public function broadcastWith()
    {
        return ['device' => $this->device->toArray()];
    }
}
