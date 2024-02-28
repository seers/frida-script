import frida
import sys


def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


with open("Hook.js") as f:
    jscode = f.read()

device = frida.get_usb_device()
pid = device.spawn([""])
process = device.attach(pid)
script = process.create_script(jscode)
script.on('message', on_message)
script.load()
device.resume(pid)
sys.stdin.read()
