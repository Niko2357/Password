import { useEffect } from "react";

interface PasswordProps {
    password: string | null;
    setPassword: React.Dispatch<React.SetStateAction<string | null>>;
}

const PasswordInput: React.FC<PasswordProps> = ({ password, setPassword }: PasswordProps) => {
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        if (password === null || password === "") return;
        const sabotageInterval = setInterval(() => {
            setPassword((prevPassword) => {
                if (prevPassword === null) return prevPassword;
                const action = Math.random() < 0.5 ? "add" : "remove";
                if (action === "add") {
                    return prevPassword + "🦕";
                } else {
                    if (prevPassword.length === 0) return prevPassword;
                    const indexToRemove = Math.floor(Math.random() * prevPassword.length);
                    return prevPassword.slice(0, indexToRemove) + prevPassword.slice(indexToRemove + 1);
                }
            });
        }, 1000);

        return () => clearInterval(sabotageInterval);
    }, [password]);

    return (
        <>
            <h1>Password Game</h1>
            <br />
            <form>
                <label>
                    Password: 🐦‍🔥
                    <br />
                    <input
                        type="text"
                        id="password"
                        value={password ?? ""}
                        onChange={inputHandler}
                    />
                </label>
            </form>
        </>
    );
};

export default PasswordInput;
