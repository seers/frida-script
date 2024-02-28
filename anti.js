var isHook = false;
Interceptor.attach(Module.getExportByName('libc.so', '__system_property_get'), {
    onEnter(args) {
        if (Module.findBaseAddress('libmsaoaidsec.so') && !isHook) {
            Interceptor.replace(Module.getBaseAddress('libmsaoaidsec.so').add(0x175F8), new NativeCallback(() => {
            }, 'void', ['void']));
            Interceptor.replace(Module.getBaseAddress('libmsaoaidsec.so').add(0x16D30), new NativeCallback(() => {
            }, 'void', ['void']));
            isHook = true;
        }
    },
    onLeave(log, retval, state) {
    }
});
