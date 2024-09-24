const lib = '';
const pkg = '';

let m = Process.getModuleByName(lib);
let file = new File('/sdcard/Android/data/' + pkg + '/files/' + m.base + '.' + lib, 'wb');
Memory.protect(m.base, m.size, 'rw-');
file.write(m.base.readByteArray(m.size));
file.flush();
file.close();
console.log('dump:', '/sdcard/Android/data/' + pkg + '/files/' + m.base + '.' + lib);
