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
          let scriptStr = args[1];
          let length = Number(args[2]);
          let fileName = args[4];

          //Print
          // console.log('fileName:', fileName.readUtf8String());
          // console.log('length:', length);

          //Dump
          // if (length > 0 && fileName.readUtf8String().includes('assets/main/index.jsc')) {
          //   let file = new File('/sdcard/Android/data/' + pkg + '/files/' + fileName.readUtf8String().split('/').pop(), 'wb');
          //   file.write(scriptStr.readByteArray(length));
          //   file.flush();
          //   file.close();
          //   console.log('dump:', fileName.readUtf8String());
          // }

          //Patch on-the-fly
          // if (length > 0 && fileName.readUtf8String().includes('assets/main/index.jsc')) {
          //   scriptStr.add(0x2DEA7).writeByteArray([0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x39, 0x30, 0x30, 0x30]);
          // }

          //Replace
          // if (length > 0 && fileName.readUtf8String().includes('assets/main/index.jsc')) {
          //   let fp = new File('/sdcard/Android/data/' + pkg + '/files/' + 'index.jsc', 'rb');
          //   fp.seek(0, File.SEEK_END);
          //   const newLength = fp.tell();
          //   this.newLength = newLength;
          //   fp.seek(0, File.SEEK_SET);
          //   const ab = fp.readBytes();
          //   this.ab = ab;
          //   fp.close();
          //   args[2] = ptr(newLength);
          //   args[1] = ab.unwrap();
          //   console.log('replaced');
          // }
        },
        onLeave(retval) {
        }
      });
    }
  }
});
