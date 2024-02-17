
import { useState } from "react"
import SVG from '@/app/_libs/svg'

const Slabs = ({
  dispatch,
  changeView,
  changePopup,
  changeEdit,
  slabs,
  editSlab,
  deleteSlab,
  refetch
}) => {

  const [dropdown, setDropdown] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')

  const submitDeleteSlab = async (id) => {

    setLoading('deleteSlab')
    
    try {
      const response = await deleteSlab({
        variables: {
          id: id
        }
      })

      setLoading('')
      setMessage(response.data.deleteSlab.message)
      refetch()
      
    } catch (error) {
      console.log(error)
      window.scrollTo(0, 0);
      if(error) setMessage(error.message)
    }
  }
  
  return (
    <>
    <div className="flex justify-center">
      {message &&
        <div className="text-center py-3 bg-red w-[300px] mt-3 rounded-xl text-white font-[500] text-[16px] relative">
          <div 
            className="absolute top-[-5px] right-0 bg-white p-2 rounded-[50%] hover:cursor-pointer"
            onClick={() => setMessage('')}
          >
            <SVG
              svg={'close'}
              width={10}
              height={10}
              schemeOne={'#132A4A'}
            ></SVG>
          </div>
          {message}
        </div>
      }
    </div>
    <div className="px-[50px] pt-[20px] bg-white min-h-screen">
      <div className="flex items-center bg-schemethree p-5 rounded-xl">
        <h1 className="text-[18px] font-poppins font-[600] text-black">All Slabs</h1>
      </div>
      <div className="mt-[40px] flex flex-col gap-y-4">
        { slabs && slabs.map((item, idx) => 
          <div 
            key={idx}
            className="w-full rounded-[20px] px-3 py-3 h-[200px] shadow-lg flex items-start gap-x-5 gap-y-2 max-xl:h-[100%] max-xl:items-start max-xl:justify-center max-xl:w-[100%] relative"
          >
            <h3 className="text-[18px] font-poppins font-[500] text-gol">
              <span>{item.material[0] ? item.material[0].name : 'no name'}</span>
              <div className="w-[230px] h-[150px]">
                {item.images.length > 0 && 
                  <img 
                    className="w-full h-full bg-cover rounded-lg"
                    src={item.images[0].url} 
                    alt="" 
                  />
                }
                {!item.images.length && 
                  <img 
                    className="w-full h-full bg-cover rounded-lg"
                    src='https://via.placeholder.com/300' 
                    alt="" 
                  />
                }
              </div>
            </h3>
            <h3 className="text-[18px] font-poppins font-[500] text-gol">
              <span>QR Code</span>
              {item.qrCode && 
                <img 
                  className="w-[150px] h-[150px] bg-cover rounded-lg"
                  src={item.qrCode} 
                  alt="" 
                />
              }
            </h3>
            <div className="flex justify-rounded items-start gap-x-[50px] max-xl:flex-col max-xl:gap-y-5 max-xl:items-start">
              <div className="flex flex-col w-[200px]">
                <h1 className="text-[18px] font-[600] font-poppins">Slab</h1>
                <div className="flex flex-col items-start py-1">
                  <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Quantity: {item.quantity ? item.quantity : '0'}</div>
                  <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Price Sqrft: {item.priceSqft ? item.priceSqft : '$0'}</div>
                  <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Size One: {item.sizeOne ? item.sizeOne : '0 in'}</div>
                  <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Size Two: {item.sizeTwo ? item.sizeTwo : '0 in'}</div>
                  <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Thickness: {item.thickness ? item.thickness : '0 cm'}</div>
                  <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Color: {item.color[0] ? item.color[0].name : 'no color'}</div>
                </div>
              </div>
              {item.supplier[0] &&
                <div className="flex flex-col w-[200px]">
                  <h1 className="text-[18px] font-[600] font-poppins">Supplier</h1>
                  <div className="flex flex-col items-start py-1">
                    <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Name: {item.supplier[0].name}</div>
                    <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Address: {item.supplier[0].address}</div>
                    <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Phone: {item.supplier[0].phone}</div>
                  </div>
                </div>
              }
              {item.orderedStatus &&
                <div className="flex flex-col w-[250px]">
                  <h1 className="text-[18px] font-[600] font-poppins">Status</h1>
                  <div className="flex flex-col items-start py-1">
                    <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Processed: {item.orderedStatus}</div>
                    <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Received: {item.receivedStatus}</div>
                    <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Delivered: {item.deliveredStatus}</div>
                  </div>
                </div>
              }
              <div className="absolute top-3 right-5 hover:cursor-pointer">
                <div
                  onClick={() => dropdown == `${item.id}editInfo` ? setDropdown('') : setDropdown(`${item.id}editInfo`)}
                >
                  <SVG
                    svg={'gear'}
                    width={20}
                    height={20}
                    schemeOne={'#132A4A'}
                  ></SVG>
                </div>
                { dropdown == `${item.id}editInfo` &&
                  <div className="relative top-[100%] left-[-180px]">
                    <div className="absolute w-[200px] rounded-xl bg-slate-200">
                      <div 
                        className="p-2 hover:bg-gold rounded-xl hover:text-white"
                        onClick={(e) => (dispatch(changePopup('newSlab')), dispatch(changeEdit('slab')), dispatch(editSlab({ id: item.id, items: slabs}), setDropdown('')))}
                      >
                        Edit Slab
                      </div>
                      <div 
                        className="p-2 hover:bg-gold rounded-xl hover:text-white"
                        onClick={(e) => (submitDeleteSlab(item.id), setDropdown(''))}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Slabs
