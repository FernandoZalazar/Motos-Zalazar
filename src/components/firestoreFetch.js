import {query, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc} from "firebase/firestore";
import db from './firebaseConfig';

export const firebaseFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "data"), where("categoryId", '==', idCategory));

    } else {
        q = query(collection(db, "productos"));

    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id:document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}
export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "preoducts", idItem);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
        return {
            id: idItem,
            ...docSnap.data()
        }   
    } else {
        doc.data();        
    }
}