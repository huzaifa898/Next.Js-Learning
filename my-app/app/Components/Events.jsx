import React, { useState } from 'react'

function Events() {
    // const sayHello = (name) => {
    //     alert(`Hello, ${name}!`); 
    //   }
    const [firstName, setFirstName] = useState('Ali')
    const changeName = () =>{
        setFirstName('Ahmed') 
    }
  return (
   <>
   <h2>Event, Function & State</h2>
   {/* <button onClick={() =>  alert('Hello')}>Click me!</button>  */}
   {/* <button onClick={() => sayHello('Huzaifa')}>Click me!</button>  */}
   <h2>My name is: {firstName}</h2>
   <button onClick={changeName}>Change State</button>
   </>
  )
}

export default Events
