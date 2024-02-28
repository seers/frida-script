import "frida-il2cpp-bridge";

Il2Cpp.perform(() => {
    //Dump
    // Il2Cpp.dump();

    //Trace
    // Il2Cpp.trace(true)
    //     .assemblies(Il2Cpp.domain.assembly("Utilites"))
    //     .and()
    //     .attach();

    //Trace method
    // const AESEncrypt = Il2Cpp.domain.assembly("Utilites").image
    //     .class("CornaSpace.AESHelper")
    //     .method("AESEncrypt");

    // Il2Cpp.trace(true)
    //     .methods(AESEncrypt)
    //     .and()
    //     .attach();

    //Replacement
    // const AESEncrypt = Il2Cpp.domain.assembly("Utilites").image
    //     .class("CornaSpace.AESHelper")
    //     .method<Il2Cpp.String>("AESEncrypt");

    // AESEncrypt.implementation = function (text: Il2Cpp.String, bCanChange: boolean): Il2Cpp.String {
    //     // console.log('text:', text);
    //     // console.log('bCanChange:', bCanChange);
    //     if (text.content == "20030") {
    //         text = Il2Cpp.string("29999");
    //     }
    //     const result = this.method<Il2Cpp.String>("AESEncrypt").invoke(text, bCanChange);
    //     // console.log('result:', result);
    //     return result;
    // };
});
