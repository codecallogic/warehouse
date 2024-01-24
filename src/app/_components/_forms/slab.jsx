"use client"
import SVG from '@/app/_libs/svg'
import { useState } from 'react'

//// HELPERS
import { validateNumber, validatePrice } from '@/app/_helpers/validations'
import { dateNow } from '@/app/_helpers/main'

//// DATASETS
import { grades, finishes } from '@/app/_libs/datasets'

//// COMPONENTS
import InputArrayField from './inputDropdownField'
import InputField from './inputField'
import ToggleButtonValue from './toggleButtonValue'

const NewSlab = ({
  dispatch,
  changePopup,
  materials,
  colors,
  suppliers,
  changeSlabArray,
  changeSlabValue,
  slab
}) => {
  
  const [dropdown, setDropdown] = useState('')
  
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
              <InputArrayField 
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
              <InputArrayField 
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
              <InputArrayField 
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
              <InputArrayField 
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
              <InputArrayField 
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
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewSlab
