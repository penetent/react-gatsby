import * as React from 'react'
import Button from '@mui/material/Button'



function ButtonUI ({buttonText}) {


const AlertMe = (e) => {
     console.log(e)
  alert(e);
}


  return (
    <Button variant="contained" onClick={()=>AlertMe("alerted")}>{buttonText}</Button>
    )

}


 export default ButtonUI;