import React from 'react'

interface PasswordStrengthProps{
    password: string
}

const PasswordStrength:React.FC<PasswordStrengthProps> = ({password}: PasswordStrengthProps)=>{
    let errorArray: Array<string> = [];
    if(password === null){}
    if(password.length < 8){
        errorArray.push("Heslo musí obsahovat minimálně 8 znaků.");
    }
    if(password.search("[A-Z]") === -1){
        errorArray.push("Heslo musí obsahovat alespoň jedno velké písmeno.")
    }
    if(password.search("/!/@/#/$/%/^/&/*/?/´/ˇ/°/;/_/=/+/-")){
        errorArray.push("Heslo musí obsahovat alespoň jeden speciální znak.")
    }
    return(
        <>
            {
                errorArray[errorArray.length-1]
            }
        </>
    );
}

export default PasswordStrength;