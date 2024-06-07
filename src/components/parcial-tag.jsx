/* eslint-disable react/prop-types */
import { useState } from "react";

const ParcialTag = ({ id, nombre, peso, notaPonderada, onEliminar, onAplicar }) => {

    const [nota, setNota] = useState();

    function handleChange(e) {
         setNota(e.target.value)
     }
    return (
        <>
            <div className=" contenedorParcial">
                <div className="notaFinal">
                    Nombre: <span className="negrita">{nombre}</span> 
                    <br/>Peso:{" "}
                    <span className="negrita">{peso}</span> %
                </div>
                <input
                    className="inputNota"
                    type="number"
                    placeholder="Nota"
                    onChange={handleChange}
                ></input>
                <button onClick={() => onEliminar(id)} className="btn primary">
                    Eliminar
                </button>
                <button
                    onClick={() => onAplicar(id, nota)}
                    className="btn primary"
                >
                    Aplicar
                </button>
                <div className="notaFinal">Nota Ponderada:<span className="notaFinalPonderada"> {notaPonderada} </span></div>
            </div>
        </>
    );
};

export default ParcialTag;