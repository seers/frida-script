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

      const evalStringPtr = Module.getBaseAddress(lib).add(offset);
      const evalString = new NativeFunction(evalStringPtr, 'int', ['pointer', 'pointer', 'int', 'pointer', 'pointer']);
      
      Interceptor.replace(evalStringPtr, new NativeCallback((se, scriptStr, length, rval, fileName) => {
        //Print
        // console.log('fileName:', fileName.readUtf8String());
        // console.log('length:', length);

        //Dump
        // if (length > 0 && fileName.readUtf8String().includes('assets/main/index.jsc')) {
        //   let file = new File('/data/data/' + pkg + '/files/' + fileName.readUtf8String().split('/').pop(), 'wb');
        //   file.write(scriptStr.readByteArray(length));
        //   file.flush();
        //   file.close();
        //   console.log('dump:', fileName.readUtf8String());
        // }

        //Patch
        // if (length > 0 && fileName.readUtf8String().includes('assets/main/index.jsc')) {
        //   scriptStr.add(0x2DEA7).writeByteArray([0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x39, 0x30, 0x30, 0x30]);
        // }

        //Replace
        // if (length > 0 && fileName.readUtf8String().includes('assets/main/index.jsc')) {
        //   let fp = new File('/data/data/' + pkg + '/files/' + 'index.jsc', 'rb');
        //   fp.seek(0, File.SEEK_END);
        //   let newLength = fp.tell();
        //   fp.seek(0, File.SEEK_SET);
        //   let ab = fp.readBytes();
        //   let newScriptStr = ab.unwrap()
        //   fp.close();
        //   console.log('replaced');
        //   return evalString(se, newScriptStr, newLength, rval, fileName);
        // }

        return evalString(se, scriptStr, length, rval, fileName);
      }, 'int', ['pointer', 'pointer', 'int', 'pointer', 'pointer']));
    }
  }
});
