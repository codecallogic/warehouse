'use client'
import SVG from '@/app/_libs/svg'
import { useRouter } from 'next/navigation';

const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  width,
  height,
  font,
  fullWidth,
  svgColor,
  svg,
  href,
  disabled,
  borderRadius,
  loading,
  loadingType,
  svgBackgroundColor,
  showSVG
}) => {

  const router = useRouter();
  
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-eina text-[20px] leading-none hover:cursor-pointer ` + (fullWidth ? " w-full " : ` w-[${width}px] `) + (borderRadius ? " rounded-full " : " rounded-md ") + (height ? ` h-[${height}px] ` : " h-[20px] ") + (font ? ` font-[${font}] ` : " font-[500] ")}
      style={{
        backgroundColor: backgroundColor ? `${backgroundColor}` : "transparent",
        color: textColor ? `${textColor}` : "transparent",
        borderColor: borderColor ? `${borderColor}` : "transparent"
      }}
      onClick={() => href ? router.push(href) : null}
      disabled={disabled}
    >
      {
        loading == loadingType
        ?
        <div className="loading border-r-gold after:border-r-gold before:border-l-gold mr-3"></div>
        :
        label
      }
      { svg && showSVG &&
        <SVG
          svg={svg}
          width={20}
          height={20}
          schemeOne={svgColor}
          backgroundColor={svgBackgroundColor}
        />
      }
    </button>
  );
};

export default Button;