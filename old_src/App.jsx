import { useEffect, useState } from 'react';
import Parcial from './components/parcial';
import FormularioParcial from './components/formulario-parcial';
import { utilidades } from './util';
import parciales from './datos';
import "./App.css";

//const parciales = [];
function App() {

  useEffect(() => {
      console.log("Paso por el useEffect");
  }, []);

  function handleData(data) {
    utilidades.addParcial(parciales, data);
    console.log( parciales) ;
  }
  
  const mostrarParciales = parciales.map(parcial => {
      <Parcial nombre={parcial.nombre} peso={parcial.peso} key={parcial.id} />
  });

  return (
    <>
      <FormularioParcial sendData={handleData} />
      <div id="contenedorParciales">
        {/* {utilidades.mostrarParciales(parciales)} */}
        {mostrarParciales}
      </div>
      <div>
        <h3>Nota final</h3>
      </div>
    </>
  );
  
}
  export default App;
