import React, { useState } from "react"

const MyComponent = () => {

  const [name, setName] = useState("")

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
    </div>
  )
}

export default MyComponent