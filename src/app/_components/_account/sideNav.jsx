
import SVG from '@/app/_libs/svg'

//// HELPERS
import { initApp } from '@/app/_helpers/main'

const Nav = ({
  dispatch,
  changeView,
  logout,
  router,
  view
}) => {
  
  return (
    <div
      id="mobile-menu"
      className="hidden absolute left-0 top-0 z-20 w-[345px] bg-white h-screen shadow-lg dark:bg-darkSchemeOne"
    >
      <div className="w-full flex flex-col items-center relative">
        <div
          className="absolute top-5 right-2 hover:cursor-pointer shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all ease-in-out hover:top-4"
          onClick={() => initApp()}
        >
          <SVG
            svg={'close'}
            width={25}
            height={25}
            schemeOne={'black'}
          >
          </SVG>
        </div>
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
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'dashboard' ? 'text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px]' : ' text-black' )}
            onClick={() => dispatch(changeView('dashboard'))}
          >
            <SVG
              svg={'home'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className='text-[18px] font-[700] leading-[30px]'>Dashboard</span>
          </div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'slabs' ? 'text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px]' : ' text-black ' )}
            onClick={() => dispatch(changeView('slabs'))}
          >
            <SVG
              svg={'inventory'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className='text-[18px] font-[700] leading-[30px]'>Slabs</span>
          </div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'products' ? 'text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px]' : ' text-black ' )}
            onClick={() => dispatch(changeView('products'))}
          >
            <SVG
              svg={'product'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className='text-[18px] font-[700] leading-[30px]'>Products</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
