import { add, addAsync } from "./util";

export function sinonTest1():number{
    let a=7;
    let b=8;
    let ret = add(a,b);
    console.log('ret:',ret);
    return ret;
}

export async function sinonTest2(){
    let a=51;
    let b=10;
    let ret = await addAsync(a,b);
    console.log('ret:',ret);
    return ret;
}

export async function sinonTest3(){
    let ret=new ABC().getAppName();
    console.log('ret:',ret);
    return ret;
}

export class ABC{
    getAppName(){
        return "paasportal"
    }
}