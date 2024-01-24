import QRCode from 'qrcode'

///// REQUIREMENTS
const formFields = {
  slabQRCode: ['material', 'sizeOne', 'sizeTwo', 'lotNumber']
}

export const changeInputType = (id, fromType, toType) => {

  const input = document.getElementById(id)
  
  if(input.type == fromType) return input.type = toType
  if(input.type == toType) return input.type = fromType
  
}

export const verifyEmail = (email) => {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailPattern.test(email)) return false
  
  return true
  
}

export const generateQR = async (e, validationType, data, dispatch, stateMethod, setMessage, property) => {

  let options = {
    type: 'image/png',
    width: 500,
    scale: 10,
    margin: 1,
    color: {
      dark:"#413838",
      light:"#ededec"
    }
  }

  setMessage('')
  e.preventDefault()
  e.stopPropagation()

  for(let i = 0; i < formFields[validationType].length; i++){
    if(!data[formFields[validationType][i]]) return (
      // window.scrollTo(0, 0), 
      setMessage(`${formFields[validationType][i].replace('_', ' ')} is required`)
    )
  }

  try {

    let qrData = new Object()

    for(let i = 0; i < formFields[validationType].length; i++){
      if(data[formFields[validationType][i]]){
        qrData[formFields[validationType][i]] = data[formFields[validationType][i]]
      }
    }
    
    const image = await QRCode.toDataURL(JSON.stringify(qrData), options)
    dispatch(stateMethod({ value: image, type: property }))
    setMessage('')

  } catch (err) {
    console.log(err)
    if(err) return setMessage('Error occurred generating QR code')
  }

}

export const multipleFiles = (e, data, validationType, setMessage, dispatch, stateMethod) => {
  
  let filesMax = data[validationType].length + e.target.files.length

  if(filesMax > 3) return (
    setMessage('Max number of files is 3')
  )


  let filesData
  
  if(e.target.files.length > 0){
    let array = Array.from(e.target.files)
    
    filesData = array.map(item => ({
      name: item.name,
      type: item.type,
      size: item.size,
      location: URL.createObjectURL(item),
    }));
  }

  dispatch(stateMethod({ item: [...data[validationType], ...filesData], type: validationType }))

}