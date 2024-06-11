import { useContext } from "react";
import "../styles/CartItem.css";
import { ItemContext } from "../Shop";

// function for rendering individual card items for the cart part of the store

function CartItem(props) {
  const itemContext = useContext(ItemContext);

  const handleIncrementClick = () => {
    let tempArray = [...itemContext.cart];
    for (let x = 0; x < tempArray.length; x++) {
      if (tempArray[x].id === props.id) {
        let tempValue = tempArray[x].itemQuantity;
        tempValue++;
        tempArray[x] = { ...tempArray[x], itemQuantity: tempValue };
      }
    }
    itemContext.setNewCart(tempArray);
  };

  const handleDecrementClick = () => {
    let tempArray = [...itemContext.cart];
    for (let x = 0; x < tempArray.length; x++) {
      if (tempArray[x].id === props.id) {
        let tempValue = tempArray[x].itemQuantity;

        if (tempValue > 1) {
          tempValue--;
          tempArray[x] = { ...tempArray[x], itemQuantity: tempValue };
        }
      }
    }
    itemContext.setNewCart(tempArray);
  };

  const handleInputChange = (e) => {
    // inform user that they cannot enter a value less than 1
    if (e.target.value < 1) {
      return alert(
        'You cannot enter a value less than 1, if you want to delete the item from your cart, please click "delete from cart" below'
      );
    }

    let tempArray = [...itemContext.cart];
    for (let x = 0; x < tempArray.length; x++) {
      if (tempArray[x].id === props.id) {
        tempArray[x] = { ...tempArray[x], itemQuantity: e.target.value };
      }
    }
    itemContext.setNewCart(tempArray);
  };

  const handleItemRemove = () => {
    let tempArray = [...itemContext.cart];
    let purgedArray = tempArray.filter((item) => item.id !== props.id);
    itemContext.setNewCart(purgedArray);
  };

  return (
    <div className="cartItem">
      <div className="cartImageDiv">
        <img className="cartImage" src={props.url}></img>
      </div>
      <div className="itemName">{props.name}</div>
      <div className="itemSubtotal">EUR {props.subtotal}</div>
      <div className="quantityChange">
        <button onClick={handleDecrementClick}>-</button>
        <input
          type="number"
          value={props.quantity}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleIncrementClick}>+</button>
      </div>
      <button onClick={handleItemRemove}>Remove from cart</button>
    </div>
  );
}

export { CartItem };
