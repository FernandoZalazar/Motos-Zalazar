import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { customFetch } from './customFetch';
import { useParams } from 'react-router-dom';
import { firestoreFetch} from './firebaseFetch'

const {data}= require('./data')

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);

    useEffect(() => {
        customFetch(500, data,filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);
    return (
        <>
        <ItemList items={datos} />
        </>
    )
}

export default ItemListContainer;


