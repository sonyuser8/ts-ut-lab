export function add( a:number, b:number){
    return a + b;
}

export async function addAsync( a:number, b:number){
    await new Promise(f => setTimeout(f, 1000));
    return a + b;
}