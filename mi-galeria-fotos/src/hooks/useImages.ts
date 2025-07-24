import { useState, useEffect, useCallback } from 'react';
import { fetchImages } from '../utils/api';
import { Image } from '../types';

interface UseImagesHook{
    images:Image[];
    loading:boolean;
    error:string | null;
    reloadImages: () => Promise<void>;
}

const useImages = (): UseImagesHook =>{
    const [images, setImages] = useState<Image[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadImages = useCallback(async ()=>{
        setLoading(true);
        setError(null);
    try{
        const data : Image[] = await fetchImages();
        setImages(data)
    }
    catch (err){
        console.error("Error loading image:", err);
        setError((err as Error).message || "No se pudieron cargar las imagenes. Intentalo mas tarde  ")

    } finally{
        setLoading(false)
    }
    
    },[])

    useEffect(()=>{
        loadImages();
    }, [loadImages] )  // Se ejecuta cuando loadImages cambia (que es una sola vez gracias a useCallback)

    return {images, loading, error, reloadImages: loadImages};



}


export default useImages