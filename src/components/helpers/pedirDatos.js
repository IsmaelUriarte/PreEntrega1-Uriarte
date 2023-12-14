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
