//function CalculatorBtn(){

//}

// Name of the function must be uppercase
// Always return 1 jsx
// Have only one parameter props

//named export ko lagi yehi aghadi export
const CalculatorBtn = ({text,handelClick}) =>{
  //const { text , handelClick } = props; 
  return(
    <button onClick={handelClick}>
      {text}
    </button>
  )
} 
//default export
export default CalculatorBtn;