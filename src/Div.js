export default function Div(pros){
    const {data,nome,valor,cor} =pros
    
    return(
        <>
            <div className="caixa2">
                <div className="caixa">
                    <div className="data" >{data}</div>
                    <div>{nome}</div>
               </div>
               <div className={cor}>R${valor}</div>
            </div>
        </>
    )
}
