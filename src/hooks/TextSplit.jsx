import { useState} from 'react'
export const splitText = (text) => {
   // const [character, setCharacter] = useState([])
    const words = text.split('');
   // setCharacter(words)
    return words
  }