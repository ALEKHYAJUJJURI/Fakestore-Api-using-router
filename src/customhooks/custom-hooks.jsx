export function useCustomHooks(){
    var val = ''
    val = `${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)} ${Math.round(Math.random()*10)}`
    return val;
}