import { useState } from "react"

const initialItems = [
    {id: 1}, {id: 2}, 
    {id: 3}, {id: 4}, 
    {id: 5}, {id: 6}, 
    {id: 7}, {id: 8}, 
    {id: 9}, {id: 10}, 
    {id: 11}, {id: 12}
  ]

const Shopcart = ({itemsCart}) => {
    return(
        <div>
            <div>Shopcart {itemsCart.length}</div>
        </div>
    )
}

const ItemDisplay = ({items, handleAddToCart}) => {
    return (
        <div>
            {items.map(item=><div onClick={handleAddToCart}>{item.id}</div>)}
        </div>
    )
}

const Item = () => {

}

const Shop = () => {
    const [items, setItems] = useState([...initialItems])
    const [itemsCart, setItemsCart] = useState([])

    const handleAddToCart = (newItem) => {
        setItemsCart(itemsCart.concat(newItem))
    }

    return(
      <div>
        <Shopcart itemsCart={itemsCart}/>
        <h2>This is the shop</h2>
        <ItemDisplay items={items} handleAddToCart={handleAddToCart}/>
      </div>
    )
  }

export default Shop;  