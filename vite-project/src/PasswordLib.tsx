
export function evaluatePassword(password: string){
    const errorArray:Array<string> = [];
    const possibleError: number = 3;
    const passwordStrenghtValues: Array<string> =
        ["slabe", "stredni", "silne"];
    if(password.length < 8){
        errorArray.push("Heslo musi mit 8 znaku");
    }
    if(password.search("[A-Z]") === -1){
        errorArray.push("Heslo musi mit velke pismeno")
    }
    if(password.search("/!/@/#/$/%/^/&/*/?/´/ˇ/°/;/_/=/+/-")){
        errorArray.push("Heslo musí obsahovat alespoň jeden speciální znak.")
    }
    let index : number = possibleError - errorArray.length;
    index = (index > passwordStrenghtValues.length -1) ? passwordStrenghtValues.length-1 : index; // zkraceny if
    return passwordStrenghtValues[index];
}


