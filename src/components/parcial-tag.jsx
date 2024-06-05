/* eslint-disable react/prop-types */
import { useState } from "react";

const ParcialTag = ({ id, nombre, peso, notaPonderada, onEliminar, onAplicar }) => {

    const [nota, setNota] = useState();

    function handleChange(e) {
         setNota(e.target.value)
     }
    return (
        <>
            <div className="formularioParciales contenedorParcial">
                <h3>
                    Nombre: {nombre} - Peso: {peso} %
                </h3>
                Nota
                <input
                    type="number"
                    placeholder="Nota"
                    onChange={handleChange}
                ></input>
                <button onClick={() => onEliminar(id)}>Eliminar</button>
                <button onClick={() => onAplicar(id, nota)}>Aplicar</button>
                <h3>Nota Ponderada: {notaPonderada}</h3>
            </div>
        </>
    );
};

export default ParcialTag;