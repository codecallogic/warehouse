export const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('mobile-menu')
  const nav = document.getElementById('nav')
  
  if (!hamburgerBtn || !mobileMenu) {
    console.error('Button or menu element not found.');
    return;
  }

  if(hamburgerBtn && mobileMenu){
    mobileMenu.classList.toggle("hidden")
    mobileMenu.classList.toggle("flex")
    hamburgerBtn.classList.toggle('toggle-btn')
  }
  
}

export const dateNow = () => {
  let date = new Date(Date.now())
  let hr = date.getHours()
  let min = date.getMinutes();

  if (min < 10) {
    min = "0" + min;
  }

  let ampm = "am";
  if( hr > 12 ) {
      hr -= 12;
      ampm = "pm";
  }


  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var month = monthNames[date.getUTCMonth()]
  var day = date.getUTCDate()
  var year = date.getUTCFullYear()

  return `${month} ${day}, ${year}, ${hr}:${min} ${ampm}`
}