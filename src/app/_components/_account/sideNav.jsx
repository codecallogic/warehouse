
import SVG from '@/app/_libs/svg'

const Nav = ({}) => {
  
  return (
    <div
      id="mobile-menu"
      className="w-[345px] bg-white h-screen shadow-lg dark:bg-darkSchemeOne"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <div 
          className="w-[224px] h-[120px] py-[25px]"
        >
          <img 
            className="w-[224px] h-[100%] hover:cursor-pointer"
            src="/assets/logoTwo.png" 
            alt="Logo" 
          />
        </div>
        <div>
          <div className="w-[345px] px-[50px] text-[18px] font-[900] pt-[20px] text-grey">Main Menu</div>
          <div className="w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px] hover:cursor-pointer">
            <SVG
              svg={'home'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className='text-[18px] font-[700] leading-[30px]'>Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
