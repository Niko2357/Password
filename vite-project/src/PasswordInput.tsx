import React from 'react'

interface PasswordProps{
    password: string;
    setPassword:React.Dispatch<React.SetStateAction<string | null>>
}



const passwordInput: React.FC<PasswordProps> = ({password, setPassword}: PasswordProps) => {
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setPassword(event.target.value);
    }
    return(
        <>
            <h2>Password:</h2>
            <input type={"text"} id={"password"} value={password ?? ""} onChange={()=>{
                inputHandler
            }}/>
        </>
    );
}

export default passwordInput;