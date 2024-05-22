/* eslint-disable react/prop-types */
//import React from "react";

const Parcial = ({ id, nombre, peso, onEliminar, onAplicar }) => (
    <>
        <h3>
            {nombre} - {peso} %
        </h3>
        <label>
            Nota
            <input type="number"></input>
        </label>
        <button onClick={() => onEliminar(id)}>Eliminar</button>
        <button onClick={() => onAplicar(id)}>Aplicar</button>
    </>
);

export default Parcial;