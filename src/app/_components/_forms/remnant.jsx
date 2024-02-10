"use client"
import SVG from '@/app/_libs/svg'
import { useState, useEffect } from 'react'
import { useS3Upload } from "next-s3-upload"

//// HELPERS
import { validateNumber, validateSize } from '@/app/_helpers/validations'
import { removeItemByIndex } from '@/app/_helpers/forms'

//// COMPONENTS
import InputDropdownField from './inputDropdownField'
import InputField from './inputField'
import ToggleButtonValue from './toggleButtonValue'
import GenerateQRCode from './qrCode'
import UploadButton from './fileUploadButton'
import Button from '../button'

///// HELPERS
import { checkObjectValues } from '@/app/_helpers/validations'

const NewRemnant = ({
  dispatch,
  changePopup,
  materials,
  colors,
  changeRemnantArray,
  changeRemnantValue,
  changeRemnantImages,
  remnant,
  newRemnant,
  resetRemnant,
  changeView,
  edit,
  updateRemnant,
  refetch,
  deleteRemnantImage
}) => {
  
  const [dropdown, setDropdown] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')
  const [images, setImages] = useState([])
  const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  const submitNewRemnant = async () => {
    
    try {

      let array = []
      setLoading('createRemnant')
      
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
      
      const response = await newRemnant({
        variables: {
          material: remnant.material,
          color: remnant.color,
          name: remnant.name,
          shape: remnant.shape,
          l1: remnant.l1,
          w1: remnant.w1,
          l2: remnant.l2,
          w2: remnant.w2,
          notes: remnant.notes,
          lot: remnant.lot,
          bundle: remnant.bundle,
          supplierRef: remnant.supplierRef,
          bin: remnant.bin,
          qrCode: remnant.qrCode,
          images: array
        }
      })

      setLoading('')
      dispatch(resetRemnant())
      setMessage(response.data.newRemnant.message)
      setImages([])
      
    } catch (error) {
      console.log(error)
  
      if(error) setMessage(error.message)
    }
    
  }

  const submitUpdateRemnant = async () => {
    
    try {

      let array = []
      setLoading('updateRemnant')
      
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

      const response = await updateRemnant({
        variables: {
          id: remnant.id,
          material: remnant.material,
          color: remnant.color,
          name: remnant.name,
          shape: remnant.shape,
          l1: remnant.l1,
          w1: remnant.w1,
          l2: remnant.l2,
          w2: remnant.w2,
          notes: remnant.notes,
          lot: remnant.lot,
          bundle: remnant.bundle,
          supplierRef: remnant.supplierRef,
          bin: remnant.bin,
          qrCode: remnant.qrCode,
          images: array
        }
      })

      refetch()
      setLoading('')
      setMessage(response.data.updateRemnant.message)
      
    } catch (error) {
      console.log(error)
      if(error) setMessage(error.message)
    }
    
  }

  const deleteImage = async (url) => {

    setLoading(`deleteRemnantImage-${url}`)

    try {

      const response = await deleteRemnantImage({
        variables: {
          id: remnant.id,
          images: images,
          url: url
        }
      })

      let newArray        = images.filter((item) => item.url !== url)

      refetch()
      setLoading('')
      setImages(newArray)
      setMessage(response.data.deleteRemnantImage.message)
      
    } catch (error) {
      console.log(error)
      if(error) setMessage(error.message)
    }
    
  }

  useEffect(() => {
    if(remnant) setImages(remnant.images)
  }, [remnant])    
  
  return (
    <div id="default-modal" tabIndex="-1" aria-hidden="true" className="overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex bg-[rgba(0, 0, 0, 0.5)] justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/50">
      <div className="relative p-4 w-[50%] max-h-full">
          <div className="relative bg-white rounded-xl shadow-xl dark:bg-gray-700">
            <div className="flex items-center justify-between pt-5 pb-3 px-5 rounded-lg dark:border-gray-600 h-[50px]">
                <h3 className="flex flex-col">
                  <span className="font-poppins text-[24px] font-[900] text-gray-900 dark:text-white">{edit ? 'Update Remnant' : 'Create Remnant'}</span>
                </h3>
                {remnant && checkObjectValues(remnant, images) && !edit &&
                  <div 
                    className="w-min flex justify-center ml-3"
                    onClick={() => submitNewRemnant()}
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
                      loadingType={'createRemnant'}
                      showSVG={false}
                      svg={'arrowRight'}
                      svgColor={'white'}
                      svgBackgroundColor={'#B78514'}
                    />
                  </div>
                }
                {remnant && checkObjectValues(remnant, images) && edit == 'remnant' &&
                  <div 
                    className="w-min flex justify-center ml-3"
                    onClick={() => submitUpdateRemnant()}
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
                      loadingType={'updateRemnant'}
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
                    onClick={() => (dispatch(changeView('remnants'), dispatch(changePopup(''))))}
                  >
                    view all
                  </span>
                </h3>
            </div>
            <div className="p-4 md:p-5 space-y-4 h-[40rem] overflow-y-scroll">
              <InputDropdownField 
                label="material"
                item={remnant}
                property={'material'}
                index={0}
                value={'name'}
                dropdown={dropdown}
                setDropdown={setDropdown}
                dropdownType={'materials'}
                list={materials}
                dispatch={dispatch}
                stateMethod={changeRemnantArray}
              />
              <InputDropdownField 
                label="color"
                item={remnant}
                property={'color'}
                index={0}
                value={'name'}
                dropdown={dropdown}
                setDropdown={setDropdown}
                dropdownType={'colors'}
                list={colors}
                dispatch={dispatch}
                stateMethod={changeRemnantArray}
              />
              <InputField 
                label="name"
                item={remnant}
                property={'name'}
                dispatch={dispatch}
                stateMethod={changeRemnantValue}
                id="name"
              />
              <InputField 
                label="shape"
                item={remnant}
                property={'shape'}
                dispatch={dispatch}
                stateMethod={changeRemnantValue}
                id="shape"
              />
              <InputField 
                label="l1"
                item={remnant}
                property={'l1'}
                dispatch={dispatch}
                stateMethod={changeRemnantValue}
                validation={true}
                id="l1"
                validationMethod={validateSize}
              />
              <InputField 
                label="w1"
                item={remnant}
                property={'w1'}
                dispatch={dispatch}
                stateMethod={changeRemnantValue}
                validation={true}
                id="w1"
                validationMethod={validateSize}
              />
              <InputField 
                label="w2"
                item={remnant}
                property={'w2'}
                dispatch={dispatch}
                stateMethod={changeRemnantValue}
                validation={true}
                id="w2"
                validationMethod={validateSize}
              />
              <InputField 
                label="l2"
                item={remnant}
                property={'l2'}
                dispatch={dispatch}
                stateMethod={changeRemnantValue}
                validation={true}
                id="l2"
                validationMethod={validateSize}
              />
              <InputField 
                label="notes"
                item={remnant}
                property={'notes'}
                dispatch={dispatch}
                stateMethod={changeRemnantValue}
                id="notes"
              />
              <InputField 
                label="lot"
                item={remnant}
                property={'lot'}
                dispatch={dispatch}
                stateMethod={changeRemnantValue}
                validation={true}
                id="lot"
                validationMethod={validateNumber}
              />
              <InputField 
                label="bundle"
                item={remnant}
                property={'bundle'}
                dispatch={dispatch}
                stateMethod={changeRemnantValue}
                id="bundle"
              />
              <InputField 
                label="supplierRef"
                item={remnant}
                property={'supplierRef'}
                dispatch={dispatch}
                stateMethod={changeRemnantValue}
                id="supplierRef"
              />
              <InputField 
                label="bin"
                item={remnant}
                property={'bin'}
                dispatch={dispatch}
                stateMethod={changeRemnantValue}
                validation={true}
                id="bin"
                validationMethod={validateNumber}
              />
              <GenerateQRCode
                item={remnant}
                dispatch={dispatch}
                stateMethod={changeRemnantValue}
                setMessage={setMessage}
                type={'remnantQRCode'}
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
                item={remnant}
                property={'images'}
                dispatch={dispatch}
                stateMethod={changeRemnantImages}
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
                  { loading == `deleteRemnantImage-${item.url}` 
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

export default NewRemnant
