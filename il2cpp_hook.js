const lib = 'libil2cpp.so';

Interceptor.attach(Module.getBaseAddress(lib).add(0x12169A4), {
    onEnter(args) {
    },
    onLeave(retval) {
    }
});
