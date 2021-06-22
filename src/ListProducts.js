import React, { useState} from "react"
import ModalNewProd from "./Components/ModalNewProd";

const ListProducts = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            imageUrl: 'some url here',
            name: 'Product1 name',
            count: 4,
            size: {
                width: 200,
                height: 200
            },
            weight: '200g',
            comments: [Comment, Comment]
        },
        {
            id: 2,
            imageUrl: 'some url here',
            name: 'Product2 name',
            count: 6,
            size: {
                width: 200,
                height: 200
            },
            weight: '200g',
            comments: [Comment, Comment]
        }

    ])

    //modal 
    const [modal, setModal]  = useState(false);
    const Toggle = () => setModal(!modal);
    return (
        <div>
            <h1>ListProducts</h1>
            <ul products={products}>
                <li>
                </li>
            </ul>

            <button className='clickMe' onClick={()=> Toggle()}>New Product</button>
            <ModalNewProd show={modal}  close={Toggle}  title='Create new product'>
                
                This is modal dynamic contant
                <form action="create-form">
                    <button>Add photo</button>
                    <span>Name</span>
                    <input className='input' type="text"  text='name' placeholder='name' />
                    <span>Count</span>
                    <input type="number" className='input' text='name' placeholder='count' />
                    <span>Size</span>
                    <input type="number" className='input' text='name' placeholder='width' />
                    <input type="number" className='input' text='name' placeholder='height' />
                    <span> Weight</span>
                    <input type="number" className='input' text='name' placeholder='weight' />
                </form>
                </ModalNewProd>
        </div>
    )
}

export default ListProducts
