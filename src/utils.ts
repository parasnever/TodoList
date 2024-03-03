export function SimulateError(message: string){
    const randomNum = Math.random();
    if(randomNum > 0.5){
        throw new Error(message)
    }
}