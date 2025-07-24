import React from 'react'
import styles from './ImageCard.module.css';
import { Image } from '../../types'; // Importamos nuestra interfaz Image


interface ImageCardProps{
image : Image;
onClick : (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({image,onClick}) => {

return (
    <>
     <div className={styles.card} onClick={() => onClick(image)}>
      <img src={image.url} alt={image.title} className={styles.image} loading="lazy" />
      
    </div>
    
    
    </>
)

}

export default ImageCard;