import SVG from "@/app/_libs/svg"
import { multipleFiles } from "@/app/_helpers/forms"

const FormButton = ({
  svg,
  svgType,
  svgWidth,
  svgHeight,
  svgColor,
  label,
  formType,
  id,
  item,
  property,
  dispatch,
  stateMethod,
  setMessage
}) => {
  
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-x-2 w-full p-5 rounded-2xl border-gold border-[1px] text-center capitalize text-[18px] text-black hover:cursor-pointer"
    >
      <input
        id={id}
        type={formType}
        className="hidden"
        accept="image/*" 
        multiple
        onChange={(e) =>  multipleFiles(e, item, property, setMessage, dispatch, stateMethod)} 
      />
      {svg && 
        <SVG
          svg={svgType}
          width={svgWidth}
          height={svgHeight}
          schemeOne={svgColor}
        >
        </SVG>
      }
      {label}
    </label>
  )
}

export default FormButton
