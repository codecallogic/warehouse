"use client"
import { useState, useEffect } from 'react'

//// COMPONENTS
import InputField from './inputField'
import Button from '../button'

///// HELPERS
import { checkObjectValues } from '@/app/_helpers/validations'

const NewModel = ({
  dispatch,
  changePopup,
  changeModelValue,
  model,
  newModel,
  resetModel,
  changeView,
  edit,
  updateModel,
  refetch
}) => {
  
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')
  const [images, setImages] = useState([])

  const submitNewModel = async () => {
    
    try {

      setLoading('createModel')
      
      const response = await newModel({
        variables: {
          name: model.name
        }
      })

      setLoading('')
      dispatch(resetModel())
      setMessage(response.data.newModel.message)
      refetch()
      
    } catch (error) {
      console.log(error)
  
      if(error) setMessage(error.message)
    }
    
  }

  const submitUpdateModel = async () => {
    
    try {

      setLoading('updateModel')

      const response = await updateModel({
        variables: {
          id: model.id,
          name: model.name
        }
      })

      refetch()
      setLoading('')
      setMessage(response.data.updateModel.message)
      
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
                  <span className="font-poppins text-[24px] font-[900] text-gray-900 dark:text-white">{edit ? 'Update Model' : 'Create Model'}</span>
                </h3>
                {model && checkObjectValues(model, images) && !edit &&
                  <div 
                    className="w-min flex justify-center ml-3"
                    onClick={() => submitNewModel()}
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
                      loadingType={'createModel'}
                      showSVG={false}
                      svg={'arrowRight'}
                      svgColor={'white'}
                      svgBackgroundColor={'#B78514'}
                    />
                  </div>
                }
                {model && checkObjectValues(model, images) && edit == 'model' &&
                  <div 
                    className="w-min flex justify-center ml-3"
                    onClick={() => submitUpdateModel()}
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
                      loadingType={'updateModel'}
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
                    onClick={() => (dispatch(changeView('models'), dispatch(changePopup(''))))}
                  >
                    view all
                  </span>
                </h3>
            </div>
            <div className="p-4 md:p-5 space-y-4 h-[40rem] overflow-y-scroll">
              <InputField 
                label="name"
                item={model}
                property={'name'}
                dispatch={dispatch}
                stateMethod={changeModelValue}
                id="name"
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewModel
