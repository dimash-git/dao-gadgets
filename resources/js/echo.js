import Echo from "laravel-echo";
import Pusher from "pusher-js";
Pusher.logToConsole = true;
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: "pusher",
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,
    // Additional options for Laravel Websockets if needed
    // wsHost: window.location.hostname,
    // wsPort: 6001,
    // disableStats: true,
});
