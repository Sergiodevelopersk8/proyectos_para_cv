import { Image } from "../types";

const images : Image[] = [
{ id: '1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreMJCfXtlIeuUDdiS7qq684TweKR5m8eGGw&s', title: 'Kiernan', date: '2023-01-15' },
  { id: '2', url: 'https://media.cnn.com/api/v1/images/stellar/prod/cnne-1716444-skateboarding-juegos-olimpicos-paris-2024-reglas.jpg?c=original', title: 'skate', date: '2023-02-20' },
  { id: '3', url: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Image3', title: 'Playa paradisíaca', date: '2023-03-10' },
  { id: '4', url: 'https://via.placeholder.com/150/FFFF00/000000?text=Image4', title: 'Bosque otoñal', date: '2023-04-05' },
  { id: '5', url: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Image5', title: 'Aurora boreal', date: '2023-05-12' },
];


export const fetchImages = ():Promise<Image[]>=>{

    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(images)
        },500)
    });

} 