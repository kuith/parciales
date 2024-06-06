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
                <div className="imputFormulario labelCreacion">Creación de parciales</div>
                <form
                    onSubmit={handleSubmit}
                    className="contenedorCrearParcial"
                >
                    <input
                        className="imputFormulario"
                        name="nombre"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleNameChange}
                    ></input>
                    <br/>

                    <input
                        className="imputFormulario"
                        name="peso"
                        type="number"
                        placeholder="Peso"
                        onChange={handlePesoChange}
                    ></input>
                    <br/>

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
