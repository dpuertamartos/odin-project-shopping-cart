import { useState } from "react"
import { Offcanvas, Button } from 'react-bootstrap'

const initialItems = [
    {id: 1, price: 25}, {id: 2, price: 24}, 
    {id: 3, price: 33}, {id: 4, price: 32}, 
    {id: 5, price: 23}, {id: 6, price: 24}, 
    {id: 7, price: 22}, {id: 8, price: 233}, 
    {id: 9, price: 47}, {id: 10, price: 288}, 
    {id: 11, price: 25}, {id: 12, price: 88}
  ]

  const options = [
    {
      name: 'checkout',
      scroll: true,
      backdrop: true,
      placement: "end"
    }
  ];


function OffCanvasCartShop({ name, itemsCart, numberOfItems, totalPrice, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    return (
        <>
        <Button variant="dark" onClick={handleShow} className="me-2">
            {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Checkout</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>There are {numberOfItems} items in the cart</p>
                <ul>
                {itemsCart.map(element=>
                    <li key={element.item.id}>
                        id: {element.item.id} {element.item.price}€/ud x {element.quantity} uds. 
                        subtotal: {element.item.price * element.quantity}€
                    </li>
                )
                }
                </ul>
                <p>Total price of {totalPrice}€</p>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

const Shopcart = ({itemsCart}) => {
    const reducer = (previousitem, currentitem) => previousitem + currentitem;
    const totalPrice = itemsCart.map(element=>element.item.price*element.quantity).reduce(reducer,0)
    const numberOfItems = itemsCart.map(element=>element.quantity).reduce(reducer,0)
    
    
    return(
        <div>
            <div>Shopcart {numberOfItems} total price: {totalPrice}€ 
            {options.map((props, idx) => (
                <OffCanvasCartShop key={idx} itemsCart={itemsCart} numberOfItems={numberOfItems} totalPrice={totalPrice} {...props} />
            ))}   
            </div>
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
        const selectedItem = itemsCart.filter(e=>e.item.id===itemToDisplay.id)
        const newObject = {
            item: itemToDisplay,
            quantity: n
        }
        if(selectedItem.length===1){
            setItemsCart(itemsCart.map(element=>element.item.id===itemToDisplay.id?newObject:element))
        }
        else{
           
            setItemsCart(itemsCart.concat(newObject))
        }
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