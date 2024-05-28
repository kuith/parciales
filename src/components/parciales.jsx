//import React from 'react';
import ParcialTag from './parcial-tag.jsx';

const Parciales = ({ parciales, onEliminarParcial, onAplicar }) =>
    parciales.map(({ id, nombre, peso, nota }) => (
        <ParcialTag
            key={id}
            id={id}
            nombre={nombre}
            peso={peso}
            nota={nota}
            onEliminar={onEliminarParcial}
            onAplicar={onAplicar}
        />
    ));

export default Parciales;