<?php

namespace App\Events;

use App\Models\Device;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class DeviceCreated  implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $device;
    public $section;

    public function __construct(Device $device)
    {
        $this->device = $device;
        $this->section = $device->section;
    }

    public function broadcastOn()
    {
        // Specify the channel name you want to broadcast on
        return new Channel('devices');
    }

    public function broadcastWith()
    {
        return [
            'device' => $this->device->toArray(),
        ];
    }
}
