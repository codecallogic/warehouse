
const ToggleButtonValue = ({
  item,
  value,
  property,
  clickValue,
  dispatch,
  stateMethod
}) => {
  
  return (
    <div 
      className="w-full p-5 rounded-2xl border-gold border-[1px] text-center capitalize text-[18px] text-black hover:cursor-pointer"
      onClick={() =>  dispatch(stateMethod({ value: item[property] ? '' : clickValue, type: property }))}
    >
      {item[property] ? item[property] : value}
    </div>
  )
}

export default ToggleButtonValue
