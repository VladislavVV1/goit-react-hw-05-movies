import React from 'react'
import {useState, useRef} from 'react'
export const SearchBar = ({onSubmit}) => {
    const [value, setValue] = useState('')
    const prevValue = useRef(value)
  const  handleInputValueChange = ({target}) => {
        setValue(target.value)
    }
  
  const  handleFormSubmit = (e) => {
          e.preventDefault()
        //   if(value.trim() === ''){
        //     toast.error('Введите что то')
        //     return;
        //   }
          if(value === prevValue.current){
            return
          }
          prevValue.current = value
          onSubmit(value)
      }
  
return (
<form onSubmit={handleFormSubmit}>
 <input
 type="text"
 autoComplete="off"
 autoFocus
 placeholder="Search images and photos"
 value={value}
 onInput={(e)=>handleInputValueChange(e)}
 />
<button type="submit"  >
      <span>Search</span>
 </button>
</form>
)
}
