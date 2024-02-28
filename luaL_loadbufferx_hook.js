const lib = '';
const pkg = '';
const offset = 0x0;

Interceptor.attach(Module.getExportByName('libc.so', 'android_dlopen_ext'), {
  onEnter(args) {
    this.__filename = args[0].readUtf8String();
  },
  onLeave(retval) {
    if (this.__filename.includes(lib)) {
      console.log('loaded:', lib);

      const luaL_loadbufferxPtr = Module.getBaseAddress(lib).add(offset);
      const luaL_loadbufferx = new NativeFunction(luaL_loadbufferxPtr, 'int', ['pointer', 'pointer', 'int', 'pointer', 'pointer']);
      
      Interceptor.replace(luaL_loadbufferxPtr, new NativeCallback((L, buff, sz, name, mode) => {
        //Print
        // console.log('name:', name.readUtf8String());
        // console.log('sz:', sz);

        //Dump
        // if (sz > 0 && !name.readUtf8String().includes(' ')) {
        //   let file = new File('/data/data/' + pkg + '/files/lua/' + name.readUtf8String().split('/').pop(), 'wb');
        //   file.write(buff.readByteArray(sz));
        //   file.flush();
        //   file.close();
        //   console.log('dump:', name.readUtf8String());
        // }

        //Patch on-the-fly
        // if (sz > 0 && name.readUtf8String().includes('')) {
        //   buff.add(0x2DEA7).writeByteArray([0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x39, 0x30, 0x30, 0x30]);
        // }

        //Replace
        // if (sz > 0 && name.readUtf8String().includes('')) {
        //   let fp = new File('/data/data/' + pkg + '/files/' + 'ActorBase', 'rb');
        //   fp.seek(0, File.SEEK_END);
        //   let new_sz = fp.tell();
        //   fp.seek(0, File.SEEK_SET);
        //   let ab = fp.readBytes();
        //   let new_buff = ab.unwrap()
        //   fp.close();
        //   console.log('replaced');
        //   return luaL_loadbufferx(L, new_buff, new_sz, name, mode);
        // }

        return luaL_loadbufferx(L, buff, sz, name, mode);
      }, 'int', ['pointer', 'pointer', 'int', 'pointer', 'pointer']));
    }
  }
});
