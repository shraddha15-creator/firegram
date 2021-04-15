import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (colloction) =>{
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(colloction)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        });

        return () => unsub();

    }, [colloction])

    return { docs };
}

export default useFirestore;