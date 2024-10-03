import { useState } from 'react'
import { useCallback } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
        str+= "0123456789"
    }
   if(character){
    str+= "!@#$%^&*()_+=-"
   }

   for(let i=1; i<= Array.length; i++){
    let char= Math.floor(Math.random() * str.length + 1)
    pass = str.charAt(char)
   }

   setPassword(pass)

  },  [length, number, character])
    
    
  

 return (
    <>

     <h1 className='text-4xl text-center text-white'>PassWord</h1>
   
    </>
  )
}

export default App
