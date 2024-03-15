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

      Interceptor.attach(Module.getBaseAddress(lib).add(offset), {
        onEnter(args) {
          //int luaL_loadbufferx(lua_State *L, const char *buf, size_t size, const char *name, const char *mode);
          //bool evalString(script_Engine *SE, const char* scriptStr, ssize_t length = -1, Value* rval = nullptr, const char* fileName = nullptr);
          let scriptStr = args[1];
          let length = Number(args[2]);
          let fileName = args[4].readUtf8String();

          //Print
          // console.log('fileName:', fileName);
          // console.log('length:', length);

          //Dump
          // if (fileName !== null && fileName.includes('')) {
          //   let file = new File('/sdcard/Android/data/' + pkg + '/files/' + fileName.split('/').pop(), 'wb');
          //   file.write(scriptStr.readByteArray(length));
          //   file.flush();
          //   file.close();
          //   console.log('dump:', fileName);
          // }

          //Patch on-the-fly
          // if (fileName !== null && fileName.includes('')) {
          //   scriptStr.add(0x0).writeByteArray([0x0,]);
          // }

          //Replace
          // if (fileName !== null && fileName.includes('')) {
          //   let fp = new File('/sdcard/Android/data/' + pkg + '/files/' + '', 'rb');
          //   fp.seek(0, File.SEEK_END);
          //   const newLength = fp.tell();
          //   this.newLength = newLength;
          //   fp.seek(0, File.SEEK_SET);
          //   const ab = fp.readBytes();
          //   this.ab = ab;
          //   fp.close();
          //   args[2] = ptr(newLength);
          //   args[1] = ab.unwrap();
          //   console.log('Replaced');
          // }
        },
        onLeave(retval) {
        }
      });
    }
  }
});
