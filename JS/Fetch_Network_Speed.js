// === ACTUAL NETWORK SPEED TRACKING API WITH OFFLINE CHECK ===
function trackNetworkSpeed() {
    if ('connection' in navigator) {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

        const updateSpeedHUD = () => {
            // Check if the device is actually online first
            if (!navigator.onLine) {
                pingText.innerHTML = `0 Mbps<i class="fa-solid fa-wifi-slash" style="margin-left: 4px; font-size: 0.8rem; opacity: 0.5;"></i>`;
                return;
            }

            // If online, get the real-time speed estimate
            const speedMbps = connection.downlink;
            
            pingText.innerHTML = `${speedMbps} <span style="font-size: 0.75rem; opacity: 0.6;">Mbps</span> <i class="fa-solid fa-wifi" style="margin-left: 4px; font-size: 0.8rem; filter: drop-shadow(0 0 3px var(--hud-color));"></i>`;
        };

        // Initialize immediately
        updateSpeedHUD();

        // Listen for active connection change updates
        connection.onchange = () => updateSpeedHUD();

        // Add core network state listeners to catch the exact moment you go offline/online
        window.addEventListener('online', updateSpeedHUD);
        window.addEventListener('offline', updateSpeedHUD);
    } else {
        pingText.innerText = "UNSUPPORTED";
    }
}

// Fire the network monitor initialization
trackNetworkSpeed();