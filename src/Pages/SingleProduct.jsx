import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../customHook/useFetch'
import ClipLoader from "react-spinners/ClipLoader";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from 'react-toastify';



const SingleProduct = ({cart,handleAddToCart}) => {
    const { id } = useParams()
    const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`)
    console.log(id);
    const { title, price, image, description } = data
    const notify = () => {
        toast('An Item Has Been Added',{
            position:toast.POSITION.TOP_CENTER
        })
    }
    return (
        <div className='container'>
            <h2>{loading && <ClipLoader color={'red'} size={50}/>}</h2>
            <div className= 'row justify-content-between align-items-center mt-4'>
                <div className='col-sm-12 text-center col-md-4'>
                    <Card style={{ width: "100%" }}>
                        <Card.Img variant="top" src={data.image} className="image-fluid" />
                    </Card>
                </div>


            <div className='col-sm-12 col-md-7'>
                <h1 className='text-danger fw-bold'> {title}</h1>
                <h4 className='text-success lh-base'> {description}</h4>
                <h3>{price}</h3>
                <button onClick={()=>{handleAddToCart(data);notify()}}className='btn btn-primary btn-lg '>
                add to cart
            </button>
            <ToastContainer/>
            </div>
            <div>
          
            </div>
            </div>
        </div>
    )
}

export default SingleProduct