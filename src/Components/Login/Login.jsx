/*Componentes do formulário*/
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';

import TextField from "@mui/material/TextField";

import { useState } from "react";

import "./Login.css";


function Login() {
  const [username, setUsername] = useState(""); /*Lê e altera o estado do usuário */
  const [password] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const [error, setError] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("", username, password);
    console.log(
      "Envio"
    ); /* fç só será ativada após o formulario ser preenchido  */

    alert(
      "Enviando os dados:" + username + " - " + password
    ); /* para enviar ao backEnd*/
  };

  const handleValidate = () => {
    if (password != "123" && username != "ksl@" ) {
      setError(true)
    }
  }

  return (
    <div id="fundo">
      <div className="container" id="logo">
        <img src="src\assets\yeslogoazul 1.png" alt="" />
      </div>

      <div className="container" id="autenticacao">
        <form onSubmit={handleSubmit}>
          <h1>Autenticação</h1>
          
          <div className="input-field">
            <TextField className="input"
              id="outlined-basic"
              error = {error}
              label="E-mail"
              variant="outlined"
              type="email"
              placeholder="nome.sobrenome@dominio.com.br"
              value={username}
              onChange={(e) => setUsername(e.target.value)} /* Pega o evento do elemento alvo cntendo o valor digitado do email */ />

          
          </div>

          <div className="input-field">
          
            <FormControl className="input"  variant="outlined"
              
              >
              <InputLabel className="confirmar-senha" 
              error = {error}
              htmlFor="outlined-adornment-password">
                
                Confirmar senha*
              </InputLabel>

              <OutlinedInput
                id="outlined-adornment-password"
                error = {error}
                
                placeholder="**********"
                type={showPassword ? "text" : "password"}
                endAdornment={<InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>}
                label="Password" />
            </FormControl>

                  {error && 
                    <div className="alert-error">
                      <ErrorOutlinedIcon className="alert-error-icon" />
                    
                    <div className="alert-error-text">
                        Usuário ou Senha incorretos !
                    </div>
                  </div>
                  }
                
          </div>



          <Button 
            className="btn-login" 
            variant="contained" 
            color="success" 
            onClick={handleValidate}
            >
            Entrar
          </Button>

          <div className="recall-forget">
            <a href="#">Esqueci minha senha</a>
          </div>

          <div className="texto-geral">
            Ao efetuar login, declaro estar de acordo com a {' '}
            <span className="texto-interno">Política de Privacidade</span> e o {' '}
            <span className="texto-interno">Termo de Uso</span> da Plataforma
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Login;
