/* eslint-disable react/prop-types */
import { useState } from "react";

const FormularioParcial = ({ onSendData }) => {
    const [data, setData] = useState({
        nombre: "",
        peso: "",
        id: "",
        nota: 0,
        notaPonderada: 0
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
        <>
            <div className="formularioParciales">
                <h3>Creacion de parciales</h3>
                <form
                    onSubmit={handleSubmit}
                    className="contenedorCrearParcial"
                >
                    <div className="imputFormulario">
                        <input
                            name="nombre"
                            type="text"
                            placeholder="Nombre"
                            onChange={handleNameChange}
                        ></input>
                    </div>
                    <div className="imputFormulario">
                        <input
                            name="peso"
                            type="number"
                            placeholder="Peso"
                            onChange={handlePesoChange}
                        ></input>
                    </div>
                    <input type="hidden" name="idParcial"></input>
                    <input
                        className="btn primary"
                        type="submit"
                        value="Crear Parcial"
                    />
                </form>
            </div>
        </>
    );
};

export default FormularioParcial;
