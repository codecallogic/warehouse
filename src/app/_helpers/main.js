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