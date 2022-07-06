import e from "cors";
import { useState, useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
import Div from "./Div";

export default function Pg1(props){
    const navigate = useNavigate();
    const n=10
    const {token} = props
    const [valor,setValor]=useState([])
    const [caixa,setCaixa]=useState([])
    const [nome,setNome]=useState([])
    const [zero,setZero]=useState('fechar')
    let batata=[]
    const ab =[]
    useEffect(() => {
     async function getpg1(){
      try{
         const promessa=await axios.get('https://mywalletok.herokuapp.com/tela1',{headers: {
            User: token
          }})
         setValor(promessa.data.total)
         setNome(promessa.data.nome)
         setCaixa([...promessa.data.msg])
         
         if(promessa.data.msg.length==0){
            setZero('abrir')
         }else{
            setZero('fechar')
         }
         
        
      }catch(e){
         console.log('ruim no getpg1')
      }
     }
      getpg1()
     
      }, []);
      async function sair(){
         try{
            const promessa=await axios.get('https://mywalletok.herokuapp.com/sair',{headers: {
               User: token
             }})
             navigate("/")
         }catch(e){
           alert('voce')
         }
        

      }
    return (
       <>
       <div className="caixa2">
       <p className="ola">olá, {nome}</p>
       <img onClick={sair} className="ola2" src='Vector.png'></img>
       </div>
       
       <div className="quadro">
        
          <div className="tela">
            <div className="saldo"><p>SALDO</p></div>
          <div className="total"> <p>{valor}</p></div>
          <div className={zero}>
            <h1> Não há registros de entrada ou saída</h1>
          </div>
          {caixa.map((ns)=>{
            return(
                <>
                   <Div data={ns.data} nome={ns.nome} valor={ns.valor} cor={ns.cor}> </Div>
                </>
                )
            })}

          </div>
          <div className="caixa2">
               <Link to={`/entrada`}><div className="entrada"> <p className="sinal">+</p>  <img className="circulo" src='Vector(1).png'></img><h1 className="text">Nova entrada</h1></div></Link>
               <Link to={`/saida`}> <div className="entrada1"><p className="sinal2">-</p>  <img className="circulo" src='Vector(1).png'></img><h1 className="text">Nova saída</h1></div></Link>
          </div>
         
       </div>
       
       
       </>
        )
}