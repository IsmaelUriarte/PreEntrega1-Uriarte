import { useState,useEffect } from "react";
import {collection, doc, getDocs, getDoc, query, where, getFirestore} from 'firebase/firestore'

// ESTA SE USA PARA OBTENER TODOS LOS ELEMENTOS DE UNA COLECCIÓN
// QUE SE LA PASA POR PARAMETRO (collectionName) EJ: product
export const useGetFirestoreCollection = (collectionName) => {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, collectionName);+

        getDocs(productsCollection).then((snapshot) => {
            setProductsData(
                snapshot.docs.map((doc) => ( { id: doc.id, ...doc.data() }))
            );
        });
      }, []);
      
  return { productsData };
};

// ESTA SE USA PARA OBTENER UN ELEMENTOS (DOCUMENTO) DE UNA COLECCIÓN 
// SE LA PASA POR PARAMETRO:
// LA COLECCION: collectionName
// EL ID DEL DOCUMENTO: id
export const useGetFirestoreDocument = (collectionName, id) => {
    const [documentData, setDocumentData] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, collectionName, id);

        getDoc(docRef).then((snapshot) => {
            setDocumentData( { id: snapshot.id, ...snapshot.data() } );
        });
      }, [id]);
    return { documentData };
};

// ESTA SE USA PARA OBTENER LOS ELEMENTOS (DOCUMENTOS) DE UNA COLECCIÓN 
// DONDE SE FILTRA SU VALOR POR "CATEGORIA"
// SE LE PASA POR PARAMETRO EL NOMBRE DE LA CATEGORIA A FILTRAR 
export const useGetFirestoreCollectionCategory = (filtro='') => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, 'product');
        const q = query(productsCollection, where("categoria", "==", filtro));
        
        getDocs(q).then((snapshot) => {
            setProductsData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

      }, [filtro]);
  return { productsData };
};

// SE USA PARA FILTRAR EN CUALQUIER COLECCION CON CUALQUIER CAMPO.
// SE LE DEBE PASAR EL NOMBRE DE LA COLLECION
// EL NOMBRE DEL CAMPO A FILTRAR
// Y EL FILTRO DENTRO DE UN ARRAY (PORQUE SE USA LA QUERY "IN")
export const useGetFirestoreCollectionFilter = (collectionName='product', campo='', filtro=[]) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, collectionName);
        const q = query(productsCollection, where(campo, "in", filtro));
        
        getDocs(q).then((snapshot) => {
            setProductsData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

      }, []);
  return { productsData };
};

export const useGetFirestoreCartProducts = (itemsCart) => {

  const [cartProductsData, setCartProductsData] = useState([]);

  useEffect(() => {
    if(itemsCart.length !== 0) {

      const itemsIdList = itemsCart.map((item) => item.id);
      const db = getFirestore();
      const dataFilterCollection = collection(db, 'product');
      const q = query(dataFilterCollection, where('titulo', 'in', itemsIdList));

      getDocs(q).then((snapshot) => {
        if (snapshot.empty) {
          console.log("No hay resultados...");
          setCartProductsData(['nodata']);
        } else {
          setCartProductsData(snapshot.docs.map((doc) => ({ 
            id: doc.id,
            cantidad: itemsCart.find((item) => item.id == doc.data().titulo).cantidad,
            ...doc.data()
            })
          ));
        }
      });

    }else{
      setCartProductsData(['nodata']);
    }

    }, [itemsCart]);
    
  return { cartProductsData };
};



