// Interceptor.attach(Module.getExportByName('libc.so', 'android_dlopen_ext'), {
//     onEnter(args) {
//         this.__filename = args[0].readUtf8String();
//         // console.log('load:', this.__filename);
//         if (this.__filename.includes('libmsaoaidsec.so')) {
//             // Interceptor.attach(Module.getExportByName('libc.so', 'pthread_create'), {
//             //     onEnter(args) {
//             //         console.log('pthread_create called from:\n' +
//             //             Thread.backtrace(this.context, Backtracer.ACCURATE)
//             //                 .map(DebugSymbol.fromAddress).join('\n') + '\n');
//             //     },
//             //     onLeave(retval) {
//             //     }
//             // });
//             // let m = Process.getModuleByName('libmsaoaidsec.so');
//             // let file = new File('/sdcard/Android/data/' + 'com.cyou.xxygb' + '/files/' + m.base + '.' + 'libmsaoaidsec.so', 'wb');
//             // Memory.protect(m.base, m.size, 'rw-');
//             // file.write(m.base.readByteArray(m.size));
//             // file.flush();
//             // file.close();
//         }
//     },
//     onLeave(retval) {
//     }
// });

// var isHook = false;
// Interceptor.attach(Module.getExportByName('libc.so', '__system_property_get'), {
//     onEnter(args) {
//         if (Module.findBaseAddress('libmsaoaidsec.so') && !isHook) {
//             Interceptor.replace(Module.getBaseAddress('libmsaoaidsec.so').add(0x1C544), new NativeCallback(() => {
//             }, 'void', ['void']));
//             isHook = true;
//         }
//     },
//     onLeave(log, retval, state) {
//     }
// });

Interceptor.attach(Module.getExportByName('libc.so', 'openat'), {
    onEnter(args) {
    },
    onLeave(retval) {
        retval.replace(ptr('0x0'));
    }
});

