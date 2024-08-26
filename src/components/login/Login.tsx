import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import AuthService from './../../services/authService';
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const [response, setResponse] = useState(null);

    const {token, setToken} = useContext(AuthContext)

    const handleLogin = () => {
        const data = {
            "email": email,
            "password": password, 
        }
        AuthService.login(data)
        .then(response => {
            setResponse(response.data)
            setToken(response.data.accessToken)
            window.location.replace('/users-list')
        })
        .catch(error => {
            alert('Usuário ou senha inválido')
        })
    }

    return(
        <div>
            <TextField
                label="Email"
                value={email}
                fullWidth
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                value={password}
                type="password"
                fullWidth
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                fullWidth
                sx={{mt:2}}
            >
                Login
            </Button>
        </div>
    )
}

export default Login;



