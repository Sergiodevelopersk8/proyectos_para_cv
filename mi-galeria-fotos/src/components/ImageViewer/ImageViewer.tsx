import React from 'react';
import styles from './ImageViewer.module.css';
import { Image } from '../../types'; // Importamos nuestra interfaz Image


interface ImageViewerProps{
    image: Image | null;
    onClose: ()=> void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({image,onClose})=>{

    if(!image){
        return null;
    }
return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.viewerContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <img src={image.url} alt={image.title} className={styles.fullImage} />
        <div className={styles.imageDetails}>
          <h2>{image.title}</h2>
          <p>Fecha: {image.date}</p>
        </div>
      </div>
    </div>
  );
} 

export default ImageViewer;