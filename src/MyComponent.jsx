import React, { useState } from "react"

const MyComponent = () => {

  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [comment, setComment] = useState("")
  const [payment, setPayment] = useState("")
  const [shipping, setShipping] = useState("")

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleQuanitiyChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handlePaymentChange = (e) => {
    setPayment(e.target.value)
  }

  const handleShippingChange = (e) => {
    setShipping(e.target.value)
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuanitiyChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder="Delivery instructions" />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="mastercard">Masercard</option>
        <option value="giftcard">giftcard</option>
      </select>
      <p>Payment method: {payment}</p>

      <label>
        <input type="radio" value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input type="radio" value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleQuanitiyChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>

    </div>
  )
}

export default MyComponent