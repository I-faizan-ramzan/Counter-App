
const Subtraction=({value})=> {
  const sub=4;
  const subt = sub-value;
  return (
    <div>
        <div className='container'>
        <div className='num'>4-{value} </div>
           
            <div className='rslt'>{subt}</div>
            
        </div>
    </div>
  )
}
export default Subtraction;