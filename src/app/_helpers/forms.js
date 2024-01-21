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