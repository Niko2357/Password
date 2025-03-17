import { useEffect, useState } from "react";
import { evaluatePassword } from './PasswordLib';

interface PasswordStrengthProps {
    password: string | null;
}

function PasswordStrength({ password }: PasswordStrengthProps) {
    const [strength, setStrength] = useState<string | null>(null);
    const [errors, setErrors] = useState<string[]>([]); // State to hold error messages

    useEffect(() => {
        const { strength, errors } = evaluatePassword(password ?? "");
        setStrength(strength);
        setErrors(errors); // Set errors state
    }, [password]);

    useEffect(() => {
        document.title = `Password: ${strength ?? ""}`;
    }, [strength]);

    if (password === null) {
        return <p>Password Where?</p>;
    }

    return (
        <div>
            <p>{strength ?? "🦧"}</p>
            {errors.length > 0 && (
                <div>
                    <p>Issues:</p>
                    <div>
                        {errors.map((error, index) => (
                            <p key={index}>{error}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PasswordStrength;
