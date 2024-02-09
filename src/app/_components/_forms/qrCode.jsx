
import { generateQR } from "@/app/_helpers/forms"

const qrCode = ({
  item,
  dispatch,
  stateMethod,
  setMessage,
  type
}) => {
 
  return (
    <div>
      <div 
        className="w-full p-5 rounded-2xl border-gold border-[1px] text-center capitalize text-[18px] text-black hover:cursor-pointer"
        onClick={(e) =>  !item.qrCode ? generateQR(e, type, item, dispatch, stateMethod, setMessage, 'qrCode') :  dispatch(stateMethod({ value: '', type: 'qrCode'}))}
      >
        { item.qrCode ? 'Clear QR' : 'Generate QR' }
      </div>
      <div className="mt-2">
        {!item.qrCode && 
          <img 
          className="w-full" 
          src='https://free-qr.com/images/placeholder.svg' 
          alt="QR Code"
          />
        }
        {item.qrCode && 
          <a
          download="qr-code.png" 
          href={item.qrCode} 
          alt="QR Code" 
          title="QR-code"
          >
            <img 
            className="w-full" 
            src={item.qrCode} 
            alt="QR Code" 
            />
          </a>
        }
      </div>
    </div>
  )
}

export default qrCode
