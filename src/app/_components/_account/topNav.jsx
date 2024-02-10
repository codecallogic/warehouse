
import SVG from '@/app/_libs/svg'
import { useState } from 'react'

//// HELPERS
import { initApp } from '@/app/_helpers/main'

const TopNav = ({
  dispatch,
  changeView,
  logout,
  router,
  user
}) => {

  const [menu, setMenu] = useState(false)
  
  return (
    <div className="w-full h-[120px] flex items-center px-[50px] bg-[#FFF] shadow-lg dark:bg-darkSchemeOne z-10">
      <button 
        id="hamburger-button"
        className='max-md:mr-4 hover:cursor-pointer relative w-5 h-8'
        onClick={() => initApp()}
      >
        <div className="bg-gold 
          w-5 
          h-1 
          rounded 
          absolute 
          top-4 
          mt-0.5 
          before:content-[''] 
          before:bg-gold 
          before:w-5
          before:h-1 
          before:rounded 
          before:absolute 
          before:-translate-x-2.5 
          before:-translate-y-2
          before:transition-all
          before:duration-500
          after:content-[''] 
          after:bg-gold 
          after:w-5 
          after:h-1 
          after:rounded 
          after:absolute 
          after:-translate-x-2.5
          after:translate-y-2
          after:transition-all
          after:duration-500
        ">
        </div>
      </button>
      <h1 
        className="text-[32px] font-[700] ml-[20px] flex-grow hover:cursor-pointer"
        onClick={() => dispatch(changeView('dashboard'))}
      >
        Dashboard
      </h1>
      <div className="w-[316px] h-[60px] rounded-[50px] border-[1px] border-grey flex items-center p-[20px]">
        <input 
          type="text"
          placeholder="Search here..."
          className="text-[14px] font-[400] h-[21px] w-[94px] flex-grow outline-none dark:bg-transparent"
        />
        <SVG
          svg="search"
          width={32}
          height={32}
          schemeOne={'#717579'}
        >
        </SVG>
      </div>
      <div className="ml-[20px] flex items-center gap-x-[52px]">
        <div className="relative hover:cursor-pointer">
          <SVG
            svg="star"
            width={32}
            height={32}
            schemeOne={'#717579'}
          >
          </SVG>
          <div className="w-[36px] h-[25px] absolute right-[-15px] top-[-15px] bg-schemeone text-white text-[14px] font-[700] rounded-[30px] flex items-center justify-center">
            38
          </div>
        </div>
        <div className="relative hover:cursor-pointer">
          <SVG
            svg="bell"
            width={32}
            height={32}
            schemeOne={'#717579'}
          >
          </SVG>
          <div className="w-[36px] h-[25px] absolute right-[-15px] top-[-15px] bg-schemetwo text-white text-[14px] font-[700] rounded-[30px] flex items-center justify-center">
            12
          </div>
        </div>
        <div className="relative hover:cursor-pointer">
          <SVG
            svg="mail"
            width={32}
            height={32}
            schemeOne={'#717579'}
          >
          </SVG>
          <div className="w-[36px] h-[25px] absolute right-[-15px] top-[-15px] bg-schemethree text-white text-[14px] font-[700] rounded-[30px] flex items-center justify-center">
            1
          </div>
        </div>
        <div className="relative hover:cursor-pointer">
          <SVG
            svg="calendar"
            width={32}
            height={32}
            schemeOne={'#717579'}
          >
          </SVG>
          <div className="w-[36px] h-[25px] absolute right-[-15px] top-[-15px] bg-schemefour text-white text-[14px] font-[700] rounded-[30px] flex items-center justify-center">
            67
          </div>
        </div>
        <div className="relative hover:cursor-pointer">
          <SVG
            svg="gear"
            width={32}
            height={32}
            schemeOne={'#717579'}
          >
          </SVG>
        </div>
      </div>
      <div className="ml-[30px] rounded-[50%] w-[60px] h-[60px] bg-gradient-to-r from-gold via-schemethree to-goldShadeOne p-1">
        <div className="rounded-[50%] flex h-full w-full items-center justify-center bg-white back p-1">
          <div className="rounded-[50%] flex h-full w-full items-center justify-center bg-grey back p-1">

          </div>
        </div>
      </div>
      <div 
        className="ml-[20px] flex items-center bg-gold rounded-[50px] px-[27px] py-[16px] relative hover:cursor-pointer"
        onMouseEnter={() => setMenu(true)}
        onClick={() => menu ? setMenu(false) : setMenu(true)}
      >
        <div className="text-[18px] font-[500] mr-[17px] text-white">{user.firstName ? user.firstName[0] : 'A'} {user.lastName ? user.lastName[0] : 'B'} </div>
        <SVG
          svg={"arrowDown"}
          width={24}
          height={24}
          schemeOne={'white'}
        >
        </SVG>
        { menu &&
          <div className="absolute w-[240px] top-[105%] right-0 rounded-xl bg-white shadow-xl">
            <div 
              className='px-5 py-3 text-gold text-[16px] hover:bg-gold hover:text-white transition-all ease-in-out rounded-xl'
              onClick={() => (
                dispatch(logout()),
                router.push('/')
              )}
            >
              Logout
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default TopNav
