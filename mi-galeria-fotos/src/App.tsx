// src/App.tsx
import React, { useState } from 'react';
// Importa el hook que decidiste usar para cargar imágenes (useImages o useDeviceImages)
// Para empezar, te recomiendo usar useImages, que carga imágenes de ejemplo simuladas.
import useImages from './hooks/useImages';
// import useDeviceImages from './hooks/useDeviceImages'; // Descomentar si vas a usar la galería real del dispositivo

import ImageGrid from './components/ImageGrid/ImageGrid';
import ImageViewer from './components/ImageViewer/ImageViewer';
import { Image } from './types';
import './App.css'; // Asegúrate de que este archivo tiene los estilos globales

function App() {
  // Usa el hook de carga de imágenes
  const { images, loading, error } = useImages(); // O useDeviceImages();
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleCloseViewer = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <h1>Mi Galería de Fotos</h1>
      {loading && <p>Cargando imágenes...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <ImageGrid images={images} onImageClick={handleImageClick} />
      )}
      <ImageViewer image={selectedImage} onClose={handleCloseViewer} />
    </div>
  );
}

export default App;