import { useState } from "react";

const Login = ({setAlert}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validarLogin = (e) => {
        e.preventDefault();

        if(email,trin() === "prueba@prueba.com" && password.trin() === "123456"){
                // Alert Esta correcto ejale
            setAlert({
                mensaje: "Sesion iniciada",
                color: "success"
            })
        
            setEmail("")
            setPassword("")

            return;
        }
                // Alert Esta mal :C
        setAlert({
            mensaje: "Los datos son incorrectos",
            color: "danger"
        })
    };

    return (

        <form onSubmit={validarLogin}>

            <label htmlFor="email"> Email </label>
            <input 
            type="email" 
            name="email" 
            id="email"
            className="form-control mb-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />

            <label htmlFor="password"> Password </label>
            <input 
            type="password" 
            name="password" 
            id="password"
            className="form-control mb-2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />

            <button
                type="submit"
                className="btn btn-danger" 

                desabled={!email.trimEnd()  ||  !password.trin()}
                >

                Iniciar Sesion
            </button>
        </form>

    );
    
};

export default Login; 