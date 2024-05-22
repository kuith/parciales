/* eslint-disable react/prop-types */
import { useState } from "react";

const FormularioParcial = ({ onSendData }) => {
    const [data, setData] = useState({
        nombre: "",
        peso: "",
        id:""
    });

    function handleNameChange(e) {
        setData({
            ...data,
            nombre: e.target.value,
        })
    }

    function handlePesoChange(e) {
        setData({
            ...data,
            peso: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSendData(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="nombre"
                type="text"
                placeholder="Nombre"
                onChange={handleNameChange}
            ></input>
            <input
                name="peso"
                type="number"
                placeholder="Peso"
                onChange={handlePesoChange}
            ></input>
            <input type="hidden" name="idParcial"></input>
            <input type="submit" value="enviar" />
        </form>
    );
};

export default FormularioParcial;
