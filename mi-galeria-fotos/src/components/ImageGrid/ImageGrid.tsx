import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGrid.module.css';
import { Image } from '../../types'; // Importamos nuestra interfaz Image

interface ImageGridProps{

    images: Image[];
    onImageClick: (image: Image )=> void;

}


const ImageGrid : React.FC<ImageGridProps> = ({images, onImageClick}) => {
    if(!images || images.length === 0){
        return <p>No hay Imagenes para mostrar.</p>
    }

    return(
        <>
        <div className={styles.grid}>

        {images.map((image)=>(
            <ImageCard  key={image.id} image={image} onClick={onImageClick} />
        ))}

        </div>
        
        </>
    );
} ;


export default ImageGrid;
