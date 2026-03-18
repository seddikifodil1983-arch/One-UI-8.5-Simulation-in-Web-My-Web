/**
 * lock.js
 * Target: Samsung One UI 8.5
 * Function: Request Device Admin to lock the screen.
 */

function lockDevice() {
    try {
        // Standard Android Device Policy Manager intent
        const context = getContext(); // Dependent on your execution environment
        const dpm = context.getSystemService(Context.DEVICE_POLICY_SERVICE);
        
        if (dpm) {
            console.log("Initiating Lock Sequence for One UI 8.5...");
            dpm.lockNow();
        } else {
            console.error("Error: Administrative permissions not granted.");
        }
    } catch (e) {
        // Fallback for non-root/non-admin: Turning screen off via System Settings
        console.log("Attempting fallback lock...");
        performGlobalAction(GLOBAL_ACTION_LOCK_SCREEN); 
    }
}

lockDevice();
