
import { useState } from "react"
import SVG from '@/app/_libs/svg'

const Remnants = ({
  dispatch,
  changeView,
  changePopup,
  changeEdit,
  remnants,
  editRemnant,
  deleteRemnant,
  refetch
}) => {

  const [dropdown, setDropdown] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')

  const submitDeleteRemnant = async (id) => {

    setLoading('deleteRemnant')
    
    try {
      const response = await deleteRemnant({
        variables: {
          id: id
        }
      })

      setLoading('')
      setMessage(response.data.deleteRemnant.message)
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
    <div className="px-[50px] pt-[20px] bg-white h-full">
      <div className="flex items-center bg-schemethree p-5 rounded-xl">
        <h1 className="text-[18px] font-poppins font-[600] text-black">All Remnants</h1>
      </div>
      <div className="mt-[40px] flex flex-col gap-y-4">
        { remnants && remnants.map((item, idx) => 
          <div 
            key={idx}
            className="w-full rounded-[20px] px-3 py-3 h-[200px] shadow-lg flex items-start gap-x-5 gap-y-2 max-xl:h-[100%] max-xl:items-start max-xl:justify-center max-xl:w-[100%] relative"
          >
            <h3 className="text-[18px] font-poppins font-[500] text-gol">
              <span>{item.material[0] ? item.material[0].name : ''}</span>
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
                <h1 className="text-[18px] font-[600] font-poppins">Remnant</h1>
                <div className="flex flex-col items-start py-1">
                  <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Quantity: {item.name ? item.name : 'no name'}</div>
                  <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Price: {item.shape ? item.shape : 'no shape'}</div>
                  <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Model: {item.l1 ? item.l1 : 'no l1'}</div>
                  <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Model: {item.w1 ? item.w1 : 'no w1'}</div>
                  <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Model: {item.l2 ? item.l2 : 'no l2'}</div>
                  <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Model: {item.w2 ? item.w2 : 'no w2'}</div>
                </div>
              </div>
              {item.lot &&
                <div className="flex flex-col w-[200px]">
                  <h1 className="text-[18px] font-[600] font-poppins">Location</h1>
                  <div className="flex flex-col items-start py-1">
                    <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Lot: {item.lot}</div>
                    <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Bundle: {item.bundle}</div>
                    <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">SupplierRef: {item.supplierRef}</div>
                    <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">Bin: {item.bin}</div>
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
                    <div className="absolute w-[200px] h-[50px rounded-xl bg-slate-200">
                      <div 
                        className="p-2 hover:bg-gold rounded-xl hover:text-white"
                        onClick={(e) => (dispatch(changePopup('newRemnant')), dispatch(changeEdit('remnant')), dispatch(editRemnant({ id: item.id, items: remnants}), setDropdown('')))}
                      >
                        Edit Remnant
                      </div>
                      <div 
                        className="p-2 hover:bg-gold rounded-xl hover:text-white"
                        onClick={(e) => (submitDeleteRemnant(item.id), setDropdown(''))}
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

export default Remnants
