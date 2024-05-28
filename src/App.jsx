import React, { useEffect, useState } from 'react';

import { dataStorage } from './data-storage/datos.js';
import FormularioParcial from './components/formulario-parcial';
import Parciales from './components/parciales.jsx';
import "./App.css";

function App() {
  const [parciales, setParciales ] = useState(dataStorage.getParciales());

  const reloadParciales = () => {
    const parciales = dataStorage.getParciales();
    setParciales(parciales);
  }

  const sendDataHandler = data => {
    dataStorage.addParcial(data);
    reloadParciales();
  }

  const eliminarParcialHandler = id => {
    dataStorage.removeParcial(id);
    reloadParciales();
  };

  const onAplicarHandler = (id, nota) => {
    dataStorage.actualizarNota(id, nota);
    reloadParciales();
  }

  return (
      <>
          <FormularioParcial onSendData={sendDataHandler} />

          <div id="contenedorParciales">
              <Parciales
                  parciales={parciales}
                  onEliminarParcial={eliminarParcialHandler}
                  onAplicar={onAplicarHandler}
              />
          </div>

          <div>
              <h3>Nota final:</h3>
          </div>
      </>
  );

}

export default App;
