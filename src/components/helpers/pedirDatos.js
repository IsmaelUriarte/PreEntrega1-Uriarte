import data from "../../productData.json";
import categoria from "../../categoryData.json"

export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        resolve(data) 
    })

}

export const pedirCategoria = () => {

    return new Promise((resolve, reject) => {
        resolve(categoria) 
    })

}

export const pedirProducto = (id) => {

    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.id === id);

        if (item){
            resolve(item);
        } else {
            reject ({
                error: "No se encontró el producto"
            })
        }
    })

}

export const pedirProductoPorCategoria = (categoria) => {

    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.categoria === categoria);

        if (item){
            resolve(item);
        } else {
            reject ({
                error: "No se encontró la categoria"
            })
        }
    })

}