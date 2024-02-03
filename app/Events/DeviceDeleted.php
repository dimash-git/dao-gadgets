<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class DeviceDeleted  implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $device;

    public function __construct($device)
    {
        $this->device = $device;
    }

    public function broadcastOn()
    {
        // This event will be broadcast on the 'devices' channel
        return new Channel('devices');
    }

    public function broadcastWith()
    {
        return ['device' => $this->device];
    }
}
