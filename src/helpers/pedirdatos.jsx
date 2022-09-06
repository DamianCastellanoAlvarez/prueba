import productos from '../Productos/productos'

const Pedirdatos = () => {
    const error = false;
    return new Promise (( resolve, reject ) => {
        setTimeout (() => {
            if(!error){
                resolve(productos)
            }
            reject("ERROR")
        },3000)
    }) 
}


export default Pedirdatos;