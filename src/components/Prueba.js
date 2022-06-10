import Mapa from "./Mapa";

export default function Prueba(){
    return (
    <div className = "prueba">
        <h1 onClick="{<Mapa/>}">Mapa</h1>
        <Mapa/>
    </div>    
    );
}