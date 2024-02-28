import frida
import sys


def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


with open("Hook.js") as f:
    jscode = f.read()

process = frida.get_usb_device().attach("")
script = process.create_script(jscode)
script.on('message', on_message)
script.load()
sys.stdin.read()
