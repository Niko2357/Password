import {useEffect} from "react";
interface PasswordProps{
    password: string | null;
    setPassword:React.Dispatch<React.SetStateAction<string | null>>
}



const passwordInput: React.FC<PasswordProps> = ({password, setPassword}: PasswordProps) => {
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setPassword(event.target.value);

        useEffect(() => {
            setInterval(() => {
                if(password === null || password === "") return;
                const indexToRemove: any = Math.round(Math.random() * passwordInput.length);
                let newPassword: string = "";
                for(let i = 0; i < password.length; i++){
                    if(i === indexToRemove) continue;
                    newPassword += password[i];
                }
                setPassword(newPassword);

            }, 1000)
        }, [password]);



    }
    return(
        <>
            <h2>Password game</h2>
            <form>
                <label>
                    Heslo:
                    <input
                        type= "text"
                        id="password"
                        value={password ?? ""}
                        onChange={inputHandler}
                    />
                </label>
            </form>
        </>
    );
}

export default passwordInput;