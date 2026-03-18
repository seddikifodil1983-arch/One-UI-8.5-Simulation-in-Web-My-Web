/**
 * unlock.js
 * Target: Samsung One UI 8.5
 * Function: Wake the screen and dismiss the lock screen overlay.
 */

function unlockDevice() {
    try {
        // 1. Wake the Power Manager
        const pm = getContext().getSystemService(Context.POWER_SERVICE);
        const wakeLock = pm.newWakeLock(
            PowerManager.FULL_WAKE_LOCK | 
            PowerManager.ACQUIRE_CAUSES_WAKEUP | 
            PowerManager.ON_AFTER_RELEASE, 
            "UnlockTag"
        );
        
        wakeLock.acquire(1000); // Wake screen for 1 second
        console.log("Screen Woken.");

        // 2. Dismiss Keyguard (Works if no PIN/Pattern is set)
        const km = getContext().getSystemService(Context.KEYGUARD_SERVICE);
        const keyguardLock = km.newKeyguardLock("UnlockTag");
        
        keyguardLock.disableKeyguard();
        console.log("Keyguard dismissed on One UI 8.5.");

    } catch (e) {
        console.error("Unlock failed: Secure lock (PIN/Biometric) may be active.");
    }
}

unlockDevice();