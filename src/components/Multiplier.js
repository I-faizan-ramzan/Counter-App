
 const Multiplier =({value}) => {
  const mul=-5;
  const rslts = mul*value;
  return (
    <div>
        <div className='container'>
            <div className='num'>-5 * {value}</div>
            <div className='rslt'> {rslts}</div>
           
        </div>
    </div>
  )
}
export default Multiplier;