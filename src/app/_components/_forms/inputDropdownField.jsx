
import SVG from "@/app/_libs/svg"

const InputField = ({
  label,
  item,
  property,
  index,
  value,
  dropdown,
  setDropdown,
  dropdownType,
  list,
  dispatch,
  stateMethod
}) => {
  
  return (
    <div className="relative ">
      <input 
        type="text" 
        id="hs-floating-input-email" 
        className="
          peer 
          p-5 
          block 
          w-full 
          border-gold
          border-[1px]
          rounded-xl
          text-[18px] 
          placeholder:text-transparent 
          focus:border-gold
          focus:ring-gold 
          focus:outline-gold
          disabled:opacity-50 
          disabled:pointer-events-none 
          dark:bg-slate-900 
          dark:border-gray-700 
          dark:text-black 
          dark:focus:ring-gray-600
          focus:pt-7
          focus:pb-3
          [&:not(:placeholder-shown)]:pt-7
          [&:not(:placeholder-shown)]:pb-3
          autofill:pt-7
          autofill:pb-3
          outline-transparent
        "
        value={item[property].length > 0 ? item[property][index][value] : ''}
        onChange={(e) => null}
        placeholder={label}
      />
      <label 
        htmlFor="hs-floating-input-email" 
        className="
        absolute 
        top-0 
        start-0 
        p-3 
        h-full 
        text-sm 
        truncate 
        pointer-events-none 
        transition 
        ease-in-out 
        duration-100 
        border 
        border-transparent 
        peer-disabled:opacity-50 
        peer-disabled:pointer-events-none
        peer-focus:text-xs
        peer-focus:-translate-y-1.5
      peer-focus:text-gray-500
        peer-[:not(:placeholder-shown)]:text-xs
        peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500
        capitalize
      ">
        {label}
      </label>
      <div 
        className="absolute top-[25%] right-3 hover:cursor-pointer"
        onClick={() => dropdown == dropdownType ? setDropdown('') : setDropdown(dropdownType)}
      >
        <SVG
          svg={'arrowDown'}
          width={30}
          height={30}
          schemeOne={'#B78514'}
        />
      </div>
      { dropdown == dropdownType && 
        <div className="absolute top-[100%] w-full z-10 border-gold border-[1px] rounded-b-2xl bg-white">
        { dropdown == dropdownType && list.length > 0 && list.map((item, idx) => 
          <div 
            key={idx}
            className={`px-3 py-2 text-gold hover:text-white hover:bg-gold hover:cursor-pointer ` + (idx + 1 == list.length ? '  rounded-b-2xl '  : ' ')}
            onClick={() => (
              dispatch(stateMethod({ item: item, type: property })),
              setDropdown('')
            )}
          >
            {item.name}
          </div>
        )}
      </div>
      }
    </div>
  )
}

export default InputField
