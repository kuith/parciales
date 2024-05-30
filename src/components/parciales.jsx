//import React from 'react';
import ParcialTag from './parcial-tag.jsx';

const Parciales = ({ parciales, onEliminarParcial, onAplicar }) =>
    parciales.map(({ id, nombre, peso, nota, notaPonderada }) => (
        <ParcialTag
            key={id}
            id={id}
            nombre={nombre}
            peso={peso}
            nota={nota}
            notaPonderada = {notaPonderada}
            onEliminar={onEliminarParcial}
            onAplicar={onAplicar}
        />
    ));

export default Parciales;