/* eslint-disable react/prop-types */
//import React from "react";
//import { useId } from "react";
import '../App.css';

const Parcial = ({ nombre, peso }) => {
    return (
        <>
            <h3>
                {nombre} - {peso} %
            </h3>
            <label>Nota</label>
            <input type="number" />
            <button>Eliminar</button>
        </>
    );
};

export default Parcial;