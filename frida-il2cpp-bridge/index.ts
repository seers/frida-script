import "frida-il2cpp-bridge";

Il2Cpp.perform(() => {
    //Dump
    // Il2Cpp.dump();

    //Trace
    // Il2Cpp.trace()
    //     .assemblies(Il2Cpp.domain.assembly("Heroes"))
    //     .filterMethods(method => method.name.toLowerCase().includes("begin"))
    //     .and()
    //     .attach();

    //Trace class
    // const CFormula = Il2Cpp.domain.assembly("Fight").image
    //     .class("Fight.CFormula")
    // Il2Cpp.trace(true)
    //     .classes(CFormula)
    //     .and()
    //     .attach();

    //Trace method
    // const GetHp = Il2Cpp.domain.assembly("Heroes").image
    //     .class("Heroes.CMonster")
    //     .method("GetHp");
    // Il2Cpp.trace(true)
    //     .methods(GetHp)
    //     .and()
    //     .attach();

    //Replacement
    // const GetHp = Il2Cpp.domain.assembly("Heroes").image
    //     .class("Heroes.CMonster")
    //     .method<number>("GetHp");
    // GetHp.implementation = function (): number {
    //     const result = this.method<number>("GetHp").invoke();
    //     console.log('result:',result);
    //     return result;
    // };
});
