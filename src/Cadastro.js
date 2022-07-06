import e from "cors";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
export default function Cadastro(){
     const navigate = useNavigate();
     const [nome,setNome]=useState('')
     const [email,setEmail]=useState('')
     const [senha,setSenha]=useState('')
     const [senha2,setSenha2]=useState('')
     async function criar(e){
          e.preventDefault();
          try{
               await axios.post('https://mywalletok.herokuapp.com/criar',{
                    nome,email,senha,senha2
               })
               alert('Cadastrado com sucesso !')
               navigate("/")
          }catch{
               alert('deu ruim meu amigo __-')
          }

   //
   //https://mywalletok.herokuapp.com/
          
     }
    return (
       <>
       <div className="quadro">
            <img src='MyWallet.png'></img>
            <form className="caixa3">
             
            <input type={'text'} value={nome} placeholder='Nome' onChange={(e) => setNome(e.target.value)} className="input"></input>
            <input type={'text'} value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} className="input"></input>
            <input type={'password'} value={senha} placeholder='senha' onChange={(e) => setSenha(e.target.value)} className="input"></input>
            <input type={'password'} value={senha2} placeholder='confirma a senha' onChange={(e) => setSenha2(e.target.value)} className="input"></input>
            <div className="caixa">
            <button  className="input1" type="subimit" onClick={criar}>Entrar</button>
            </div>
         
            </form>
            <Link to={`/`}><h1 className="textocor">já tem uma conta? Entre agora!</h1> </Link>
       </div>
       
       </>
        )
}