import { useState } from 'react'
import './App.css'
import PasswordInput from "./PasswordInput.tsx";
import PasswordStrength from "./PasswordStrength.tsx";

function App() {
    const [password, setPassword] = useState<string | null>(null);

    return (
        <div>
            <PasswordInput password={password} setPassword={setPassword}/>
            <PasswordStrength password={password}></PasswordStrength>
        </div>
    )
}

export default App
