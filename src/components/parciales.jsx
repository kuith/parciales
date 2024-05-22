//import React from 'react';
import Parcial from './parcial.jsx';

const Parciales = ({ parciales, onEliminarParcial, onAplicar }) =>
    parciales.map(({ id, nombre, peso, nota }) => (
        <Parcial
            key={id}
            id={id}
            nombre={nombre}
            peso={peso}
            nota={nota}
            onEliminar={onEliminarParcial}
            onAplicar={ onAplicar}
        />
    ));

export default Parciales;