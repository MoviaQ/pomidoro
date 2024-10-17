import React from 'react'

const BuyCard = () => {

  let fruitsExample = [
    {name: "Tomato", price: 20},
    {name: "Corn", price: 10},
    {name: "Cucumber", price: 15},

    

  ]
  return (
    <div className=' mx-auto w-1/2 bg-primary-light-yellow m-5 p-5 rounded-lg'>
        <ul>
         {fruitsExample.map((element, index) => (
          <li key={index} className='m-5 text-2xl flex' >  {element.name} - {element.price} <button className=' bg-primary-light-green rounded-xl w-16 h-8 ml-auto hover:bg-primary-heavy-green transition duration-500 ease-in-out '> buy </button> </li>
         ) )}
        </ul>

      
    </div>
  )
}

export default BuyCard
