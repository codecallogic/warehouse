"use client"
import SVG from '@/app/_libs/svg'
import { useState } from 'react'

const NewSlab = ({
  dispatch,
  changePopup,
  materials,
  changeSlabArray,
  slab
}) => {
  
  const [dropdown, setDropdown] = useState('')
  console.log(slab)
  return (
    <div id="default-modal" tabIndex="-1" aria-hidden="true" className="overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex bg-[rgba(0, 0, 0, 0.5)] justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/50">
      <div className="relative p-4 w-[50%] max-h-full">
          <div className="relative bg-white rounded-xl shadow-xl dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-lg dark:border-gray-600">
                <h3 className="font-poppins text-[24px] font-[900] text-gray-900 dark:text-white">
                  Create Slab
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal"
                  onClick={() => dispatch(changePopup(''))}
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-4 md:p-5 space-y-4 h-[40rem] overflow-y-scroll ">
              <div className="relative">
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
                  value={slab.material.length > 0 ? slab.material[0].name : ''}
                  onChange={(e) => null}
                  placeholder="material"
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
                peer-[:not(:placeholder-shown)]:text-gray-500"
                >
                  Material
                </label>
                <div 
                  className="absolute top-[25%] right-3 hover:cursor-pointer"
                  onClick={() => dropdown == 'materials' ? setDropdown('') : setDropdown('materials')}
                >
                  <SVG
                    svg={'arrowDown'}
                    width={30}
                    height={30}
                    schemeOne={'#B78514'}
                  />
                </div>
                { dropdown == 'materials' && 
                  <div className="absolute top-[100%] w-full z-10 border-gold border-[1px] rounded-b-2xl">
                  { dropdown == 'materials' && materials.length > 0 && materials.map((item, idx) => 
                    <div 
                      key={idx}
                      className={`px-3 py-2 text-gold hover:text-white hover:bg-gold hover:cursor-pointer ` + (idx + 1 == materials.length ? '  rounded-b-2xl '  : ' ')}
                      onClick={() => (
                        dispatch(changeSlabArray({ item: item, type: 'material' })),
                        setDropdown('')
                      )}
                    >
                      {item.name}
                    </div>
                  )}
                </div>
                }
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewSlab
