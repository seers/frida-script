adb push index.jsc /sdcard/Download/
adb shell "su -c mv /sdcard/Download/index.jsc /data/data/com.chuanhuo.mud.test/files/"
adb shell "su -c chown u0_a25:u0_a25 /data/data/com.chuanhuo.mud.test/files/index.jsc"