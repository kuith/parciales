/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const Parcial = ({ id, nombre, peso, onEliminar, onAplicar }) => {

    const [nota, setNota] = useState();

    function handleChange(e) {
         setNota(e.target.value)
     }
    return (
        <>
            <h3>
                {nombre} - {peso} %
            </h3>
            <label>
                Nota
                <input
                    type="number"
                    placeholder="Nota"
                    onChange={handleChange}
                ></input>
            </label>
            <button onClick={() => onEliminar(id)}>Eliminar</button>
            <button onClick={() => onAplicar(id, nota)}>Aplicar</button>
        </>
    );
};

export default Parcial;