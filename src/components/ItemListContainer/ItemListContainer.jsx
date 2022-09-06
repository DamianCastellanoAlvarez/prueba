import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Pedirdatos from '../../helpers/pedirdatos'
import { Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState(false);

    const {categoryId} = useParams()
    
    useEffect(() => {
        setloading(true)
        Pedirdatos()
            .then( (res) => {
                if(!categoryId){
                setProductos(res)
            }else{setProductos(res.filter((prod)=> prod.category === categoryId))
            }})
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setloading(false)
            })
    }, [categoryId])
    
if(loading){
    return (
        <div className="d-flex justify-content-around spinner">
            <div>
                <Spinner
                    color="success"
                    size="sm"
                    type="grow">
                </Spinner>  
            </div>
            <div>
                <Spinner
                    color="success"
                    size="sm"
                    type="grow">
                </Spinner>  
            </div>
            <div>
                <Spinner
                    color="success"
                    size="sm"
                    type="grow">
                </Spinner>  
            </div>
        </div>
    )
    }
    return (
        <>
            <ItemList productos = {productos} />
        </>
    )
}


export default ItemListContainer