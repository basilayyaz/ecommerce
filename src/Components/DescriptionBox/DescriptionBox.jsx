import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            E-commerce, short for electronic commerce, refers to the buying and 
            selling of goods and services over the internet. 
            It has revolutionized the way businesses operate, 
            Customers can browse products, compare prices, and make purchases from the comfort of their homes.
            E-commerce platforms offer convenience and variety, catering to diverse consumer needs. 
            The rise of mobile commerce, secure payment systems,
            and advanced logistics has further fueled the growth of e-commerce, 
            making it a dominant force in the global marketplace.
            </p>
        </div>
    </div>
  )
}
