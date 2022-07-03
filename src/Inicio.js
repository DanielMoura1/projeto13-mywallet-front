
import e from "cors";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
export default function Inicio(props){
     //const [token,setToken] =useState('')
     const {token,setToken} = props
     const [email,setEmail]=useState('')
     const [senha,setSenha]=useState('')
    const navigate = useNavigate();
    async function login(e){
     e.preventDefault();
     try{
          const resposta=await axios.post('http://localhost:5000/login',{
               email,senha
          })
        
          
         
          setToken(resposta.data)
         
     
          navigate("/pg1")
          
     }catch{
          alert('deu ruim meu amigo __-')
     }

   
}
    return (
       <>
       <div className="quadro">
            <img src='MyWallet.png'></img>
          <form>
               <div className="quadro">
            <input type={'text'} value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} className="input"></input>
            <input type={'password'} value={senha} placeholder='senha' onChange={(e) => setSenha(e.target.value)} className="input"></input>
            <button type="subimit" className="input1" onClick={login} >Entrar</button>
            </div>
          </form>
          <Link to={`/cadastro`}><h1 className="textocor">primeira vez? Cadastre-se!</h1></Link>
       </div>
       
       </>
        )
}