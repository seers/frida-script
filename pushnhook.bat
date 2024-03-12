set pkg=com.xxx.xxx
adb push %1 /sdcard/Android/data/%pkg%/files/
frida -U -f %pkg% -l hook.js