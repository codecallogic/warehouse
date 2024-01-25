"use client"
import SVG from '@/app/_libs/svg'
import { useState, useEffect } from 'react'

//// HELPERS
import { validateNumber, validatePrice } from '@/app/_helpers/validations'
import { dateNow } from '@/app/_helpers/main'

//// DATASETS
import { grades, finishes } from '@/app/_libs/datasets'

//// COMPONENTS
import InputDropdownField from './inputDropdownField'
import InputField from './inputField'
import ToggleButtonValue from './toggleButtonValue'
import GenerateQRCode from './qrCode'
import UploadButton from './fileUploadButton'

const NewSlab = ({
  dispatch,
  changePopup,
  materials,
  colors,
  suppliers,
  locations,
  changeSlabArray,
  changeSlabValue,
  changeSlabImages,
  slab
}) => {
  
  const [dropdown, setDropdown] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    console.log(slab)
  }, [slab])
  
  return (
    <div id="default-modal" tabIndex="-1" aria-hidden="true" className="overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex bg-[rgba(0, 0, 0, 0.5)] justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/50">
      <div className="relative p-4 w-[50%] max-h-full">
          <div className="relative bg-white rounded-xl shadow-xl dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-lg dark:border-gray-600">
                <h3 className="font-poppins text-[24px] font-[900] text-gray-900 dark:text-white">
                  Create Slab
                </h3>
                { message &&
                  <div className="ml-3 text-[16px] font-[400]">
                    *{message}
                  </div>
                }
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal"
                  onClick={() => dispatch(changePopup(''))}
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-4 md:p-5 space-y-4 h-[40rem] overflow-y-scroll">
              <ToggleButtonValue
                item={slab}
                value={'Timestamp order'}
                property={'orderedStatus'}
                clickValue={`Ordered, ${dateNow()}`}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
              />
              <ToggleButtonValue
                item={slab}
                value={'Timestamp processing'}
                property={'receivedStatus'}
                clickValue={`Received, ${dateNow()}`}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
              />
              <ToggleButtonValue
                item={slab}
                value={'Timestamp delivery'}
                property={'deliveredStatus'}
                clickValue={`Delivered, ${dateNow()}`}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
              />
              <InputDropdownField 
                label="material"
                item={slab}
                property={'material'}
                index={0}
                value={'name'}
                dropdown={dropdown}
                setDropdown={setDropdown}
                dropdownType={'materials'}
                list={materials}
                dispatch={dispatch}
                stateMethod={changeSlabArray}
              />
              <InputDropdownField 
                label="color"
                item={slab}
                property={'color'}
                index={0}
                value={'name'}
                dropdown={dropdown}
                setDropdown={setDropdown}
                dropdownType={'colors'}
                list={colors}
                dispatch={dispatch}
                stateMethod={changeSlabArray}
              />
              <InputDropdownField 
                label="supplier"
                item={slab}
                property={'supplier'}
                index={0}
                value={'name'}
                dropdown={dropdown}
                setDropdown={setDropdown}
                dropdownType={'suppliers'}
                list={suppliers}
                dispatch={dispatch}
                stateMethod={changeSlabArray}
              />
              <InputDropdownField 
                label="grade"
                item={slab}
                property={'grade'}
                index={0}
                value={'name'}
                dropdown={dropdown}
                setDropdown={setDropdown}
                dropdownType={'grades'}
                list={grades}
                dispatch={dispatch}
                stateMethod={changeSlabArray}
              />
              <InputDropdownField 
                label="finish"
                item={slab}
                property={'finish'}
                index={0}
                value={'name'}
                dropdown={dropdown}
                setDropdown={setDropdown}
                dropdownType={'finishes'}
                list={finishes}
                dispatch={dispatch}
                stateMethod={changeSlabArray}
              />
              <InputDropdownField 
                label="location"
                item={slab}
                property={'location'}
                index={0}
                value={'name'}
                dropdown={dropdown}
                setDropdown={setDropdown}
                dropdownType={'locations'}
                list={locations}
                dispatch={dispatch}
                stateMethod={changeSlabArray}
              />
              <InputField 
                label="quantity"
                item={slab}
                property={'quantity'}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
                validation={true}
                id="quantity"
                validationMethod={validateNumber}
              />
              <InputField 
                label="Size 1"
                item={slab}
                property={'sizeOne'}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
                validation={true}
                id="sizeOne"
                validationMethod={validateNumber}
              />
              <InputField 
                label="Size 2"
                item={slab}
                property={'sizeTwo'}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
                validation={true}
                id="sizeTwo"
                validationMethod={validateNumber}
              />
              <InputField 
                label="Thickness"
                item={slab}
                property={'thickness'}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
                validation={true}
                id="thickness"
                validationMethod={validateNumber}
              />
              <InputField 
                label="Slab Price"
                item={slab}
                property={'slabPrice'}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
                validation={true}
                id="slabPrice"
                validationMethod={validatePrice}
              />
              <InputField 
                label="Price per sqft"
                item={slab}
                property={'priceSqft'}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
                validation={true}
                id="priceSqft"
                validationMethod={validatePrice}
              />
              <InputField 
                label="Block"
                item={slab}
                property={'block'}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
                validation={true}
                id="block"
                validationMethod={validateNumber}
              />
              <InputField 
                label="Lot Number"
                item={slab}
                property={'lotNumber'}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
                validation={true}
                id="lotNumber"
                validationMethod={validateNumber}
              />
              <GenerateQRCode
                item={slab}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
                setMessage={setMessage}
              >
              </GenerateQRCode>
              <UploadButton
                svg={true}
                svgType={'upload'}
                svgWidth={40}
                svgHeight={40}
                svgColor={'#B78514'}
                label={'Upload Images'}
                formType={'file'}
                id="imageFiles"
                item={slab}
                property={'images'}
                dispatch={dispatch}
                stateMethod={changeSlabImages}
                setMessage={setMessage}
              >
              </UploadButton>
              { slab.images.length == 0 &&
                 <a 
                 className="w-full mt-2 rounded-xl"
                 target="_blank" 
                 rel="noreferrer"
                 >
                   <img 
                    className="w-full mt-2 rounded-xl"
                    src='https://via.placeholder.com/300'
                   />
                 </a>
              }
              {slab.images.length > 0 && slab.images.map((item, idx) => (
                <a 
                key={idx} 
                onClick={() => window.open(item.location, '_blank')}
                className="w-full relative rounded-2xl mt-2"
                target="_blank" 
                rel="noreferrer"
                >
                  <img 
                    className="rounded-2xl bg-cover"
                    src={item.location}
                  />
                  <div 
                    className="absolute top-3 right-3 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center hover:cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                  {/* { loading == 'delete_image' ? 
                    <div className="loading-spinner"></div>
                    : */}
                    <SVG 
                      svg={'close'}
                      width={20}
                      height={20}
                      schemeOne={'black'}
                    >
                    </SVG>
                  {/* } */}
                  </div>
                </a>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewSlab
