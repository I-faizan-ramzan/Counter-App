

const Divider=({value})=> {
  const divid = 21;
  const divide = divid/value;
  return (
    <div>
        <div className='container'>
        <div className='num'>21/ {value}</div>
           
            <div className='rslt'>{divide}</div>
            
        </div>
    </div>
  )
}
export default Divider;