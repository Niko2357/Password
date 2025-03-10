import {useEffect, useState} from "react";
import {evaluatePassword} from './PasswordLib.tsx';

interface PasswordStrengthProps{
    password: string | null
}

function PasswordStrength({ password }: PasswordStrengthProps) {


    const [strength, setStrength] = useState<string | null>(null);


    useEffect(() => {
        const strength = evaluatePassword(password ?? "");
        setStrength(strength);
    }, [password]);

    useEffect(() => {
        document.title = `Heslo: ${strength ?? ""}`;
    }, [strength]);

    if(password === null){

        return (  <>
            <p>Napiste heslo</p>
        </>);
    }

    return (
        <p>
            {
                strength ?? "..."
            }
        </p>
    );
}

export default PasswordStrength;