import React, { useEffect, useState } from 'react'
import BodyHeader from '../BodyHeader'
import BodyItem from '../BodyItem'
import BodyFooter from '../BodyFooter'

const SectionBody = () => {


  const [cart, setCart] = useState([
    {
      id: 1,
      img: '/images/item1.jpg',
      title: 'Apple MacBook Air 13',
      count: 1,
      price: 110000,
      priceTotal: 110000
    },
    {
      id: 2,
      img: '/images/item2.jpg',
      title: 'Apple watch',
      count: 1,
      price: 29000,
      priceTotal: 29000
    },
    {
      id: 3,
      img: '/images/item3.jpg',
      title: 'Mac Pro',
      count: 1,
      price: 190000,
      priceTotal: 190000
    }
  ]);

  const [total, setTotal] = useState({
    price: cart.reduce((prev, acc) => prev + acc.priceTotal, 0),
    count: cart.reduce((prev, acc) => prev + acc.count, 0)
  })

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, acc) => prev + acc.priceTotal, 0),
      count: cart.reduce((prev, acc) => prev + acc.count, 0)
    })
  }, [cart])

  const deleteProduct = (id) => {
    setCart(cart => cart.filter(item => id !== item.id))
  }

  const increase = (id) => {
    setCart(cart => cart.map(item => {
      if (id === item.id) {
        return {
          ...item,
          count: ++item.count,
          priceTotal: item.count * item.price,
        }
      } return item
    }))
  }

  const decrease = (id) => {
    setCart(cart => cart.map(item => {
      if (id === item.id) {
        return {
          ...item,
          count: item.count > 1 ? --item.count : item.count,
          priceTotal: item.count * item.price
        }
      } return item
    }))
  }


  return (
    <div>
      <BodyHeader />
      {cart.map((item) => <BodyItem key={item.id} {...item} deleteProduct={deleteProduct} increase={increase} decrease={decrease} />)}
      <BodyFooter total={total} setTotal={setTotal} />
    </div>
  )
}

export default SectionBody;