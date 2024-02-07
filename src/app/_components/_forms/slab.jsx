"use client"
import SVG from '@/app/_libs/svg'
import { useState, useEffect } from 'react'
import { useS3Upload } from "next-s3-upload"

//// HELPERS
import { validateNumber, validatePrice } from '@/app/_helpers/validations'
import { dateNow } from '@/app/_helpers/main'
import { removeItemByIndex } from '@/app/_helpers/forms'

//// DATASETS
import { grades, finishes } from '@/app/_libs/datasets'

//// COMPONENTS
import InputDropdownField from './inputDropdownField'
import InputField from './inputField'
import ToggleButtonValue from './toggleButtonValue'
import GenerateQRCode from './qrCode'
import UploadButton from './fileUploadButton'
import Button from '../button'

///// HELPERS
import { checkObjectValues } from '@/app/_helpers/validations'

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
  slab,
  newSlab,
  resetSlab,
  changeView,
  edit,
  updateSlab,
  refetch,
  deleteSlabImage
}) => {
  
  const [dropdown, setDropdown] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('deleteSlabImage')
  const [images, setImages] = useState([])
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  const submitNewSlab = async () => {
    
    try {

      let array = []
      setLoading('createSlab')
      
      if(images){
        const updatedPromises = await Promise.all(images.map(async (item, idx) => {
          if (!item.url) {
            let { url } = await uploadToS3(item);
            array.push({ url: url })
          } else {
            array.push(item)
          }
        }))        
      }

      setImages(array)

      const response = await newSlab({
        variables: {
          material: slab.material,
          color: slab.color,
          supplier: slab.supplier,
          grade: slab.grade,
          finish: slab.finish,
          location: slab.location,
          quantity: slab.quantity,
          sizeOne: slab.sizeOne,
          sizeTwo: slab.sizeTwo,
          thickness: slab.thickness,
          priceSlab: slab.priceSlab,
          priceSqft: slab.priceSqft,
          block: slab.block,
          orderedStatus: slab.orderedStatus,
          receivedStatus: slab.receivedStatus,
          deliveredStatus: slab.deliveredStatus,
          lotNumber: slab.lotNumber,
          qrCode: slab.qrCode,
          images: array
        }
      })

      setLoading('')
      dispatch(resetSlab())
      setMessage(response.data.newSlab.message)
      setImages([])
      
    } catch (error) {
      console.log(error)
      if(error) setMessage(error.message)
    }
    
  }

  const submitUpdateSlab = async () => {

    try {

      let array = []
      setLoading('updateSlab')
      
      if(images){

        const updatedPromises = await Promise.all(images.map(async (item, idx) => {
          if (!item.url) {
            let { url } = await uploadToS3(item);
            array.push({ url: url })
          } else {
            array.push(item)
          }
        }))

      }

      setImages(array)

      const response = await updateSlab({
        variables: {
          id: slab.id,
          material: slab.material,
          color: slab.color,
          supplier: slab.supplier,
          grade: slab.grade,
          finish: slab.finish,
          location: slab.location,
          quantity: slab.quantity,
          sizeOne: slab.sizeOne,
          sizeTwo: slab.sizeTwo,
          thickness: slab.thickness,
          priceSlab: slab.priceSlab,
          priceSqft: slab.priceSqft,
          block: slab.block,
          orderedStatus: slab.orderedStatus,
          receivedStatus: slab.receivedStatus,
          deliveredStatus: slab.deliveredStatus,
          lotNumber: slab.lotNumber,
          qrCode: slab.qrCode,
          images: array
        }
      })

      refetch()
      setLoading('')
      setMessage(response.data.updateSlab.message)
      
    } catch (error) {
      console.log(error)
      if(error) setMessage(error.message)
    }
    
  }

  const deleteImage = async (url) => {

    setLoading(`deleteSlabImage-${url}`)

    try {

      const response = await deleteSlabImage({
        variables: {
          id: slab.id,
          images: images,
          url: url
        }
      })

      let newArray        = images.filter((item) => item.url !== url)

      refetch()
      setLoading('')
      setImages(newArray)
      setMessage(response.data.deleteSlabImage.message)
      
    } catch (error) {
      console.log(error)
      if(error) setMessage(error.message)
    }
    
  }

  useEffect(() => {
    if(slab) setImages(slab.images)
  }, [slab])    
  
  return (
    <div id="default-modal" tabIndex="-1" aria-hidden="true" className="overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex bg-[rgba(0, 0, 0, 0.5)] justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/50">
      <div className="relative p-4 w-[50%] max-h-full">
          <div className="relative bg-white rounded-xl shadow-xl dark:bg-gray-700">
            <div className="flex items-center justify-between pt-5 pb-3 px-5 rounded-lg dark:border-gray-600 h-[50px]">
                <h3 className="flex flex-col">
                  <span className="font-poppins text-[24px] font-[900] text-gray-900 dark:text-white">{edit ? 'Update Slab' : 'Create Slab'}</span>
                </h3>
                {slab && checkObjectValues(slab, images) && !edit &&
                  <div 
                    className="w-min flex justify-center ml-3"
                    onClick={() => submitNewSlab()}
                  >
                    <Button 
                      label='Save'
                      backgroundColor={'#000000'}
                      width={50}
                      height={50}
                      font={400}
                      fullWidth={false}
                      textColor={'#FFFFFF'}
                      borderColor={'black'}
                      borderRadius={true}
                      loading={loading}
                      loadingType={'createSlab'}
                      showSVG={false}
                      svg={'arrowRight'}
                      svgColor={'white'}
                      svgBackgroundColor={'#B78514'}
                    />
                  </div>
                }
                {slab && checkObjectValues(slab, images) && edit == 'slab' &&
                  <div 
                    className="w-min flex justify-center ml-3"
                    onClick={() => submitUpdateSlab()}
                  >
                    <Button 
                      label='Update'
                      backgroundColor={'#000000'}
                      width={50}
                      height={50}
                      font={400}
                      fullWidth={false}
                      textColor={'#FFFFFF'}
                      borderColor={'black'}
                      borderRadius={true}
                      loading={loading}
                      loadingType={'updateSlab'}
                      showSVG={false}
                      svg={'arrowRight'}
                      svgColor={'white'}
                      svgBackgroundColor={'#B78514'}
                    />
                  </div>
                }
                { message &&
                  <div className="ml-3 text-[16px] font-[400]">
                    *{message.substring(0,40)}
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
            <div className="flex items-center justify-between p-2 md:p-5 border-b rounded-lg dark:border-gray-600 h-[20px]">
                <h3 className="flex flex-col">
                  <span 
                    className="font-poppins text-[16px] font-[400] text-gold underline dark:text-white hover:cursor-pointer"
                    onClick={() => (dispatch(changeView('slabs'), dispatch(changePopup(''))))}
                  >
                    view all
                  </span>
                </h3>
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
                property={'priceSlab'}
                dispatch={dispatch}
                stateMethod={changeSlabValue}
                validation={true}
                id="priceSlab"
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
                setImages={setImages}
                images={images}
              >
              </UploadButton>
              {images.length == 0 &&
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
              {images.length > 0 && images.map((item, idx) => (
                <a 
                key={idx} 
                onClick={() => window.open(item.url ? item.url : URL.createObjectURL(item), '_blank')}
                className="w-full relative rounded-2xl mt-2"
                target="_blank" 
                rel="noreferrer"
                >
                  <img 
                    className="rounded-2xl bg-cover"
                    src={item.url ? item.url : URL.createObjectURL(item)}
                  />
                  <div 
                    className="absolute top-3 right-3 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center hover:cursor-pointer"
                    onClick={(e) => (e.stopPropagation(), images[idx].url ? deleteImage(item.url) : setImages(removeItemByIndex(idx, images))) }
                  >
                  { loading == `deleteSlabImage-${item.url}` 
                    ? 
                    <div className="loading border-r-gold after:border-r-gold before:border-l-gold mr-3"></div>
                    :
                    <SVG 
                      svg={'close'}
                      width={20}
                      height={20}
                      schemeOne={'black'}
                    >
                    </SVG>
                  }
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
