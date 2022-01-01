import { useState } from "react"

const initialItems = [
    {id: 1, price: 25}, {id: 2, price: 24}, 
    {id: 3, price: 33}, {id: 4, price: 32}, 
    {id: 5, price: 23}, {id: 6, price: 24}, 
    {id: 7, price: 22}, {id: 8, price: 233}, 
    {id: 9, price: 47}, {id: 10, price: 288}, 
    {id: 11, price: 25}, {id: 12, price: 88}
  ]

const Shopcart = ({itemsCart}) => {
    const reducer = (previousitem, currentitem) => previousitem + currentitem;
    
    return(
        <div>
            <div>Shopcart {itemsCart.length} total price: {itemsCart.map(item=>item.price).reduce(reducer,0)}€ <button>checkout</button></div>
        </div>
    )
}

const ItemDisplay = ({items, itemsCart, setItemsCart}) => {
    return (
        <div>
            {items.map(item=><Item key={item.id} itemToDisplay={item} itemsCart={itemsCart} setItemsCart={setItemsCart} />)}
        </div>
    )
}

const Item = ({itemToDisplay, itemsCart, setItemsCart}) => {
    const [itemNumber, setItemNumber] = useState(1)
    
    const handleAddToCart = async (n) => {
        let output = []
        for(let i=0; i<n; i++){
            output = [...output, itemToDisplay]

        }
        
        setItemsCart(itemsCart.concat(output))
        setItemNumber(0)
    }

    const handleAdd = () => {
        setItemNumber(itemNumber+1)
    }

    const handleRest = () => {
        if(itemNumber>1){
            setItemNumber(itemNumber-1)
        }
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <p className="card-text">item id: {itemToDisplay.id}</p>
                <p className="itemPrice">price: {itemToDisplay.price}€</p>
                <p className="itemNumber">number of items to add: {itemNumber}</p>
                <p className="itemAdder" onClick={()=>handleAdd()}>+</p>
                <p className="itemSubstracter" onClick={()=>handleRest()}>-</p>
            </div>
            <button className="btn btn-primary" onClick={()=>handleAddToCart(itemNumber)}>Add to cart</button>
        </div>
    )
}

const Shop = () => {
    const [items, setItems] = useState([...initialItems])
    const [itemsCart, setItemsCart] = useState([])

    return(
      <div>
        <Shopcart itemsCart={itemsCart}/>
        <h2>This is the shop</h2>
        <ItemDisplay items={items} itemsCart={itemsCart} setItemsCart={setItemsCart} />
      </div>
    )
  }

export default Shop;  