export const validateNumber = (type) => {
  const input = document.getElementById(type)
  
  const regex = /[^0-9|\n\r]/g

  if(input.value && type == 'size_1' || type == 'size_2') {
    return input.value = input.value.split(regex).join('') + ' in'
  }

  if(input.value && type == 'thickness') {
    return input.value = input.value.split(regex).join('') + ' cm'
  }

  if(input.value == ' in') return input.value = ''
  if(input.value == ' cm') return input.value = ''

  input.value = input.value.split(regex).join('')
}