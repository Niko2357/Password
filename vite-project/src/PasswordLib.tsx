
export function evaluatePassword(password: string){
    const errorArray:Array<string> = [];
    const possibleError: number = 3;
    const passwordStrengthValues: Array<string> =
        ["Weak", "Almost", "Strong"];
    if(password.length < 5){
        errorArray.push("That's too short");
    }
    if(password.search("[A-Z]") === -1){
        errorArray.push("Why don't you add upper case letter...")
    }
    if(password.search(/[!@#$%^&*?´ˇ°;/=_+\-]/) === -1){
        errorArray.push("Where's special characters?")
    }
    if(password.length === 0){
        errorArray.push("That's not a password 🐋")
    }
    if (selectedCountry && !password.toUpperCase().includes(selectedCountry.toUpperCase())) {
        errorArray.push(`Password does not contain the country code: ${selectedCountry}`);
    }
    let index : number = possibleError - errorArray.length;
    index = Math.max(0, index); // zkraceny if
    const strength = passwordStrengthValues[index];
    return { strength, errors: errorArray };
}


