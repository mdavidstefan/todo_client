import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isValidUsername, setIsValidUsername] = useState(null)
    const [isValidPassword, setIsValidPassword] = useState(null)

    const handleLogin = () => {
        console.log(username, password);
        import.meta.env.VITE_USERNAME == username && import.meta.env.VITE_PASSWORD == password ? setIsLoggedIn(true) : setIsLoggedIn(false)
    }

    return (
        <div className='login'>
            <h3>Login form</h3>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!isValidUsername && !isValidUsername != null}
                onBlur={() => setIsValidUsername(import.meta.env.VITE_USERNAME == username)}
            />

            <TextField id="outlined-basic" label="Password" variant="outlined" type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!isValidPassword && !isValidPassword != null}
                onBlur={() => setIsValidPassword(import.meta.env.VITE_PASSWORD == password)}

            />


            <Button variant="contained" onClick={handleLogin}>Login</Button>
        </div>

    )
}

