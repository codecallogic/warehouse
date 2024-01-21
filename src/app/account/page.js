
"use client"
import SVG from '@/app/_libs/svg'

//// COMPONENTS
import TopNav from "../_components/_account/topNav"

const Account = ({}) => {
  
  return (
    <div className="w-full bg-white">
      <TopNav>
      </TopNav>
      <div className="p-[50px]">
        <div className="flex gap-x-[38px] flex-wrap">
          <div className="w-[48%] bg-gradient-to-r from-gold from-[10%] via-schemethree via-[55%] to-goldShadeOne h-[384px] rounded-[20px] shadow-2xl  p-[50px] flex">
            <div className="w-[50%] flex flex-col">
              <h1 className="text-[32px] font-[900] font-poppins text-white">
                Manage your project in one touch
              </h1>
              <h2 className="text-[16px] font-[700] font-poppins text-white py-[15px]">
                Let Fabworkflow manage your project automatically with our best systems 
              </h2>
            </div>
            <div className="w-[50%] h-full">
              <img src="./assets/analytics.svg" alt="" srcset="" />
            </div>
          </div>
          <div className="w-[48%] flex flex-wrap gap-x-[38px]">
            <div className="w-[45%] h-[172px] rounded-[20px] shadow-xl flex items-center px-[30px] gap-x-[30px]">
              <div className="w-[48%] flex flex-col">
                <h1 className="text-[16px] font-poppins font-[900]">Total Orders</h1>
                <div className="flex pt-[24px] gap-x-[22px]">
                  <h1 className="text-[32px] font-[900] font-poppins">68</h1>
                  <div className="flex flex-col">
                    <SVG
                      svg={'arrowUp'}
                      width={23}
                      height={11}
                      schemeOne={'#09BD3C'}
                    >
                    </SVG>
                    <div className="text-[16px] pt-[8px] font-[400] text-green">+0.5%</div>
                  </div>
                </div>
              </div>
              <div className="w-[48%] flex items-center gap-x-[16px]">
                <SVG
                  svg={'bar'}
                  width={10}
                  height={101}
                  dataOne={10}
                  dataTwo={40}
                  dataThree={24}
                  backgroundColor={'#EEEEEE'}
                  schemeOne={'#09BD3C'}
                >
                </SVG>
                <SVG
                  svg={'bar'}
                  width={10}
                  height={101}
                  dataOne={10}
                  dataTwo={60}
                  dataThree={30}
                  backgroundColor={'#EEEEEE'}
                  schemeOne={'#09BD3C'}
                >
                </SVG>
                <SVG
                  svg={'bar'}
                  width={10}
                  height={101}
                  dataOne={10}
                  dataTwo={40}
                  dataThree={15}
                  backgroundColor={'#EEEEEE'}
                  schemeOne={'#09BD3C'}
                >
                </SVG>
                <SVG
                  svg={'bar'}
                  width={10}
                  height={101}
                  dataOne={10}
                  dataTwo={30}
                  dataThree={55}
                  backgroundColor={'#EEEEEE'}
                  schemeOne={'#09BD3C'}
                >
                </SVG>
              </div>
            </div>
            <div className="w-[45%] h-[172px] rounded-[20px] shadow-xl flex flex-col p-[30px] gap-y-[30px]">
              <h1 className="text-[18px] font-poppins font-[700]">Total Task Done</h1>
              <div className="flex">
                <div className="flex flex-col">
                  <SVG
                    svg={'horizontalBar'}
                    width={180}
                    height={10}
                    dataOne={89}
                    backgroundColor={'#EEEEEE'}
                    schemeOne={'#09BD3C'}
                  >
                  </SVG>
                  <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"><span className="text-red">76</span> left from target</div>
                </div>
                <div className="text-[32px] font-[900] font-poppins">24</div>
              </div>
            </div>
            <div className="w-[45%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
              <div className="flex w-full">
                <div className="w-[65%] flex flex-col">
                  <h1 className="text-[32px] font-poppins font-[900]">562</h1>
                  <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">Total Quotes</h2>
                  <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"><span className="text-red">-2%</span> than last month</div>
                </div>
                <div className="w-[30%] flex items-center">
                  <SVG
                    svg={'wave'}
                    width={100}
                    height={59}
                    schemeOne={'#09BD3C'}
                  >
                  </SVG>
                </div>
              </div>
            </div>
            <div className="w-[45%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
              <div className="flex w-full">
                <div className="w-[65%] flex flex-col">
                  <h1 className="text-[32px] font-poppins font-[900]">892</h1>
                  <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">New Projects</h2>
                  <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"><span className="text-green">+0.5%</span> than last month</div>
                </div>
                <div className="w-[30%] flex items-center">
                  <SVG
                    svg={'wave2'}
                    width={100}
                    height={59}
                    schemeOne={'#09BD3C'}
                  >
                  </SVG>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
