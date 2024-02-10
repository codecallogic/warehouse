"use client"
import { useState, useEffect } from 'react'

//// COMPONENTS
import InputField from './inputField'
import Button from '../button'

///// HELPERS
import { checkObjectValues } from '@/app/_helpers/validations'

const NewLocation = ({
  dispatch,
  changePopup,
  changeLocationValue,
  location,
  newLocation,
  resetLocation,
  changeView,
  edit,
  updateLocation,
  refetch
}) => {
  
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')
  const [images, setImages] = useState([])

  const submitNewLocation = async () => {
    
    try {

      setLoading('createLocation')
      
      const response = await newLocation({
        variables: {
          name: location.name
        }
      })

      setLoading('')
      dispatch(resetLocation())
      setMessage(response.data.newLocation.message)
      refetch()
      
    } catch (error) {
      console.log(error)
  
      if(error) setMessage(error.message)
    }
    
  }

  const submitUpdateLocation = async () => {
    
    try {

      setLoading('updateLocation')

      const response = await updateLocation({
        variables: {
          id: location.id,
          name: location.name,
          description: location.description
        }
      })

      refetch()
      setLoading('')
      setMessage(response.data.updateLocation.message)
      
    } catch (error) {
      console.log(error)
      if(error) setMessage(error.message)
    }
    
  } 
  
  return (
    <div id="default-modal" tabIndex="-1" aria-hidden="true" className="overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex bg-[rgba(0, 0, 0, 0.5)] justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/50">
      <div className="relative p-4 w-[50%] max-h-full">
          <div className="relative bg-white rounded-xl shadow-xl dark:bg-gray-700">
            <div className="flex items-center justify-between pt-5 pb-3 px-5 rounded-lg dark:border-gray-600 h-[50px]">
                <h3 className="flex flex-col">
                  <span className="font-poppins text-[24px] font-[900] text-gray-900 dark:text-white">{edit ? 'Update Location' : 'Create Location'}</span>
                </h3>
                {location && checkObjectValues(location, images) && !edit &&
                  <div 
                    className="w-min flex justify-center ml-3"
                    onClick={() => submitNewLocation()}
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
                      loadingType={'createLocation'}
                      showSVG={false}
                      svg={'arrowRight'}
                      svgColor={'white'}
                      svgBackgroundColor={'#B78514'}
                    />
                  </div>
                }
                {location && checkObjectValues(location, images) && edit == 'location' &&
                  <div 
                    className="w-min flex justify-center ml-3"
                    onClick={() => submitUpdateLocation()}
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
                      loadingType={'updateLocation'}
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
                    onClick={() => (dispatch(changeView('locations'), dispatch(changePopup(''))))}
                  >
                    view all
                  </span>
                </h3>
            </div>
            <div className="p-4 md:p-5 space-y-4 h-[40rem] overflow-y-scroll">
              <InputField 
                label="name"
                item={location}
                property={'name'}
                dispatch={dispatch}
                stateMethod={changeLocationValue}
                id="name"
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewLocation
