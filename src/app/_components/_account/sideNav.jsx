
import SVG from '@/app/_libs/svg'

//// HELPERS
import { initApp } from '@/app/_helpers/main'

const Nav = ({
  dispatch,
  changeView,
  logout,
  router,
  view,
  user
}) => {
  
  return (
    <div
      id="mobile-menu"
      className="absolute left-0 top-0 z-20 w-[345px] bg-white h-[100%] shadow-lg dark:bg-darkSchemeOne"
    >
      <div className="w-full flex flex-col items-center relative overflow-y-auto">
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
          <div className="flex items-center">
            <div className="ml-[30px] rounded-[50%] w-[60px] h-[60px] bg-gradient-to-r from-gold via-schemethree to-goldShadeOne p-1">
              <div className="rounded-[50%] flex h-full w-full items-center justify-center bg-white back p-1">
                <div className="rounded-[50%] flex h-full w-full items-center justify-center bg-grey back p-1">

                </div>
              </div>
            </div>
            <div className="flex flex-col mx-3">
              <h2 className="font-[600] text-[18px]">{user.firstName} {user.lastName}</h2>
              <h2 className="font-[400] text-[16px] text-grey">{user.username}</h2>
            </div>
          </div>
          <div className="w-[345px] px-[50px] text-[18px] font-[900] pt-[20px] text-grey">Main Menu</div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'dashboard' ? 'text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px]' : ' text-black' )}
            onClick={() => dispatch(changeView('dashboard'), initApp())}
          >
            <SVG
              svg={'home'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className={`text-[18px] leading-[30px] ` + ( view == 'dashboard' ? ' font-[700] ' : '' ) }>Dashboard</span>
          </div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'slabs' ? 'text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px]' : ' text-black ' )}
            onClick={() => dispatch(changeView('slabs'), initApp())}
          >
            <SVG
              svg={'inventory'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className={`text-[18px] leading-[30px] ` + ( view == 'slabs' ? ' font-[700] ' : '' ) }>Slabs</span>
          </div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'products' ? 'text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px]' : ' text-black ' )}
            onClick={() => dispatch(changeView('products'), initApp())}
          >
            <SVG
              svg={'product'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className={`text-[18px] leading-[30px] ` + ( view == 'products' ? ' font-[700] ' : '' ) }>Products</span>
          </div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'remnants' ? 'text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px]' : ' text-black ' )}
            onClick={() => dispatch(changeView('remnants'), initApp())}
          >
            <SVG
              svg={'remnant'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className={`text-[18px] leading-[30px] ` + ( view == 'remnants' ? ' font-[700] ' : '' ) }>Remnants</span>
          </div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'materials' ? 'text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px]' : ' text-black ' )}
            onClick={() => dispatch(changeView('materials'), initApp())}
          >
            <SVG
              svg={'material'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className={`text-[18px] leading-[30px] ` + ( view == 'materials' ? ' font-[700] ' : '' ) }>Materials</span>
          </div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'colors' ? 'text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px]' : ' text-black ' )}
            onClick={() => dispatch(changeView('colors'), initApp())}
          >
            <SVG
              svg={'color'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className={`text-[18px] leading-[30px] ` + ( view == 'colors' ? ' font-[700] ' : '' ) }>Colors</span>
          </div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'locations' ? 'text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px]' : ' text-black ' )}
            onClick={() => dispatch(changeView('locations'), initApp())}
          >
            <SVG
              svg={'location'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className={`text-[18px] leading-[30px] ` + ( view == 'locations' ? ' font-[700] ' : '' ) }>Locations</span>
          </div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'brands' ? 'text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px]' : ' text-black ' )}
            onClick={() => dispatch(changeView('brands'), initApp())}
          >
            <SVG
              svg={'brand'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className={`text-[18px] leading-[30px] ` + ( view == 'brands' ? ' font-[700] ' : '' ) }>Brands</span>
          </div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'categories' ? 'text-gold border-l-[9px] border-gold tab bg-goldShadeOne rounded-br-[150px] rounded-tr-[20px]' : ' text-black ' )}
            onClick={() => dispatch(changeView('categories'), initApp())}
          >
            <SVG
              svg={'category'}
              width={24}
              height={24}
              schemeOne={'#B78514'}
            >
            </SVG>
            <span className={`text-[18px] leading-[30px] ` + ( view == 'categories' ? ' font-[700] ' : '' ) }>Categories</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
