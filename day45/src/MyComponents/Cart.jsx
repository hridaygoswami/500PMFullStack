import React from 'react'
import '../assets/css/cart.css'
import Item from './Item'
export default function Cart({cart}) {
    return (
        <>
            <div class="container mt-5 mb-5">
                <div class="d-flex justify-content-center row">
                    <div class="col-md-8">
                        <div class="p-2">
                            <h4>Shopping cart</h4>
                            <div class="d-flex flex-row align-items-center pull-right"><span class="mr-1">Sort by:</span><span
                                class="mr-1 font-weight-bold">Price</span><i class="fa fa-angle-down"></i></div>
                        </div>
                        {cart.map((c)=>{
                            return <Item title={c.title} price={c.price} size={c.size} key={c.sr} img={c.img}/>
                        })}
                        <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><input type="text"
                            class="form-control border-0 gift-card" placeholder="discount code/gift card" /><button
                                class="btn btn-outline-warning btn-sm ml-2" type="button">Apply</button></div>
                        <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button
                            class="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}
