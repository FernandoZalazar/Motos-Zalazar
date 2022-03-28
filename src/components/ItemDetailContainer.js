import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { customFetch } from './customFetch';
import { useParams } from 'react-router-dom';


const {data}= require('./data')

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const {idItem} = useParams();

    useEffect(() => {
        firestoreFetch(idItem)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        customFetch(2000, data.find(item => item.id === parseInt(idItem)))
            .then (result => setDato(result))
            .catch(err => console.log(err))
    }, []);
        
    return (
        <>
        <ItemDetail item={dato} />
        </>
    )
}

export default ItemDetailContainer;


