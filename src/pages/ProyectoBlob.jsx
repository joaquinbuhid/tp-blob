import { useState } from 'react';
import '../App.css';

const textoOriginal = 'Hola Mundo! archivo con Blob';

function ProyectoBlob() {
const [blob, setBlob] = useState(null);
  const [resultado, setResultado] = useState();

  const obtenerBlob = () => {
    if (blob) {
      return blob;
    }

    const nuevoBlob = new Blob([textoOriginal], { type: 'text/plain;charset=utf-8' });
    setBlob(nuevoBlob);
    return nuevoBlob;
  };

  const crearBlob = () => {
    const nuevoBlob = new Blob([textoOriginal], { type: 'text/plain;charset=utf-8' });
    setBlob(nuevoBlob);
    setResultado(`Blob creado con éxito`);
  };

  const descargarBlob = () => {
    const blobParaDescargar = obtenerBlob();
    const url = URL.createObjectURL(blobParaDescargar);
    const enlace = document.createElement('a');

    enlace.href = url;
    enlace.download = 'blob.txt';
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();
    setResultado('Blob descargado como blob.txt.');
  };

  const usarSlice = async () => {
    const blobParaCortar = obtenerBlob();
    const corte = blobParaCortar.slice(0, 100, 'text/plain;charset=utf-8');
    const textoCortado = await corte.text();

    setResultado(`Resultado de slice: "${textoCortado}"`);
  };

  return (
    <div className="app">
      <h1 className="app-titulo">Trabajo práctico: Blob</h1>
      <section className="acciones" aria-label="Acciones con Blob">
        <button className="boton" type="button" onClick={crearBlob}>
          Crear Blob de texto
        </button>
        <button className="boton" type="button" onClick={descargarBlob}>
          Descargar Blob
        </button>
        <button className="boton" type="button" onClick={usarSlice}>
          Usar slice()
        </button>
      </section>
      <p className="resultado">{resultado}</p>
    </div>
  );
}

export default ProyectoBlob;