export const validateNumber = (type) => {
  const input = document.getElementById(type)
  
  const regex = /[^0-9|\n\r]/g

  if(input.value && type == 'sizeOne' || input.value && type == 'sizeTwo') {
    return input.value = input.value.split(regex).join('') + ' in'
  }

  if(input.value && type == 'thickness') {
    return input.value = input.value.split(regex).join('') + ' cm'
  }

  if(input.value == ' in') return input.value = ''
  if(input.value == ' cm') return input.value = ''

  input.value = input.value.split(regex).join('')
}

export const validatePrice = (type, e) => {

  const input = document.getElementById(type)
  
  if(e.target.value == ''){ return '' }
  
  if(e.keyCode){
    if( e.keyCode == 8 ){
      return e.target.value.substring(0, e.target.value - 1)
    }
  }
  
  let newValue = Number(e.target.value.replace(/\D/g, '')) / 100
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  
  input.value = formatter.format(newValue)

}

export const checkObjectValues = (data, other) => {
  let array = []

  for(let key in data){
    if(data[key].length > 0){
      array.push(true)
    }
  }

  if(other.length > 0){
    array.push(true)
  }
  
  if(array.length == 0) return false

  return true
}