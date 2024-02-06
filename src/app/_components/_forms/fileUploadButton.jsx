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
  setMessage,
  setImages,
  images
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
        onChange={(e) => setImages( prevArray => [...prevArray, e.target.files[0]])} 
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
