import { useState } from 'react'
import './App.css'
import passwordInput from './PasswordInput.tsx';
import PasswordStrength from './PasswordStrength';

function App() {
  const [password, setPassword] = useState<string>;

  return (
    <>
        <div>
            <passwordInput password={password} setPassword={setPassword}/>
        </div>
    </>
  )
}

export default App
