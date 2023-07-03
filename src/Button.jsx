//function CalculatorBtn(){

//}

// Name of the function must be uppercase
// Always return 1 jsx
// Have only one parameter props

//named export ko lagi yehi aghadi export
const CalculatorBtn = ({text,handelClick,textcolor,bgcolor,textsize}) =>{
  //const { text , handelClick } = props; object destructor
  return(
    <button onClick={handelClick} style={
      {
        color: textcolor,
        backgroundColor: bgcolor,
        fontSize: textsize, 
      }
    }
    >
      {text}
    </button>
  )
} 
//default export
export default CalculatorBtn;