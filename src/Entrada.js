
import e from "cors";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
export default function Entrada(props){
     const {token} = props
     const [valor,setValor]=useState(0)
     const [desc,setDesc]=useState('')
     
    const navigate = useNavigate();
    async function somar(e){
     e.preventDefault();
     try{
          const valor2 =parseFloat(valor)
          await axios.post('https://mywalletok.herokuapp.com/somar',{
               valor:valor2,desc,token
          })
         
          navigate("/pg1")
     }catch{
          alert('deu ruim meu amigo __-')
     }
    }
    return (
       <>
       <h1 className="ola">nova entrada</h1>
       <div className="quadro">
          <form>
               <div className="quadro">
                    <input   type={'number'} value={valor} placeholder='Valor' onChange={(e) => setValor(e.target.value)} className="input"></input>
                    <input type={'text'} value={desc} placeholder='Descrição' onChange={(e) => setDesc(e.target.value)} className="input"></input>
                    <button className="input1" type="subimit" onClick={somar} >Salvar entrada</button>
               </div>
          </form>
          
       </div>
       
       </>
        )
}