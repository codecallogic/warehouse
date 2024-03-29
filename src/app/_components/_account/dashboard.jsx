
import SVG from '@/app/_libs/svg'
import { resetRemnant } from '@/app/_redux/features/remnantSlice'

const Dashboard = ({
  dispatch,
  changeView,
  changePopup,
  changeEdit,
  resetSlab,
  resetProduct,
  resetRemnant,
  resetMaterial,
  resetColor,
  resetLocation,
  resetBrand,
  resetModel,
  slabs,
  products,
  remnants,
  materials,
  colors,
  locations,
  brands,
  categories,
  models
}) => {
  
  return (
    <div className="w-full bg-white h-screen">
      <div className="px-[50px] py-[20px]">
        <div className="flex gap-x-[38px] flex-wrap">
          <div className="w-[48%] bg-gradient-to-r from-gold from-[10%] via-schemethree via-[55%] to-goldShadeOne h-[384px] rounded-[20px] shadow-xl  p-[50px] flex">
            <div className="w-[50%] flex flex-col">
              <h1 className="text-[32px] font-[900] font-poppins text-white">
                Manage your project in one touch
              </h1>
              <h2 className="text-[16px] font-[700] font-poppins text-white py-[15px]">
                Let Fabworkflow manage your project automatically with our best systems 
              </h2>
            </div>
            <div className="w-[50%] h-full">
              <img src="./assets/analytics.svg" alt="" srcSet="" />
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
                    width={150}
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
          <div className="w-[100%] flex flex-wrap gap-x-[38px]">
            <div className="w-[22%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
              <div className="flex w-full">
                <div className="w-[60%] flex flex-col">
                  <h1 className="text-[32px] font-poppins font-[900]">{slabs.length > 0 ? slabs.length : '0'}</h1>
                  <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">Total Slabs</h2>
                  <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"></div>
                </div>
                <div className="w-[40%] flex flex-col items-center">
                  <div 
                    className="hover:cursor-pointer transition-all ease-linear hover:translate-y-1"
                    onClick={() => (dispatch(changePopup('newSlab'), dispatch(changeEdit('')), dispatch(resetSlab())))}
                  >
                    <SVG
                      svg={'plus'}
                      width={48}
                      height={48}
                      schemeOne={'#09BD3C'}
                    >
                    </SVG>
                  </div>
                  <h1 className="text-[14px] font-poppins font-[400] mt-5">New Slab</h1>
                  <h1 
                    className="text-[16px] font-poppins font-[400] underline text-blue-400 hover:cursor-pointer"
                    onClick={() => dispatch(changeView('slabs'))}
                  >
                    view all
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[22%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
              <div className="flex w-full">
                <div className="w-[60%] flex flex-col">
                  <h1 className="text-[32px] font-poppins font-[900]">{products.length > 0 ? products.length : '0'}</h1>
                  <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">Total Products</h2>
                  <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"></div>
                </div>
                <div className="w-[40%] flex flex-col items-center">
                  <div 
                    className="hover:cursor-pointer transition-all ease-linear hover:translate-y-1"
                    onClick={() => (dispatch(changePopup('newProduct'), dispatch(changeEdit('')), dispatch(resetProduct())))}
                  >
                    <SVG
                      svg={'plus'}
                      width={48}
                      height={48}
                      schemeOne={'#09BD3C'}
                    >
                    </SVG>
                  </div>
                  <h1 className="text-[14px] font-poppins font-[400] mt-5">New Product</h1>
                  <h1 
                    className="text-[16px] font-poppins font-[400] underline text-blue-400 hover:cursor-pointer"
                    onClick={() => dispatch(changeView('products'))}
                  >
                    view all
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[22%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
              <div className="flex w-full">
                <div className="w-[60%] flex flex-col">
                  <h1 className="text-[32px] font-poppins font-[900]">{remnants.length > 0 ? remnants.length : '0'}</h1>
                  <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">Total Remnants</h2>
                  <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"></div>
                </div>
                <div className="w-[40%] flex flex-col items-center">
                  <div 
                    className="hover:cursor-pointer transition-all ease-linear hover:translate-y-1"
                    onClick={() => (dispatch(changePopup('newRemnant'), dispatch(changeEdit('')), dispatch(resetRemnant())))}
                  >
                    <SVG
                      svg={'plus'}
                      width={48}
                      height={48}
                      schemeOne={'#09BD3C'}
                    >
                    </SVG>
                  </div>
                  <h1 className="text-[14px] font-poppins font-[400] mt-5">New Remnant</h1>
                  <h1 
                    className="text-[16px] font-poppins font-[400] underline text-blue-400 hover:cursor-pointer"
                    onClick={() => dispatch(changeView('remnants'))}
                  >
                    view all
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[22%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
              <div className="flex w-full">
                <div className="w-[60%] flex flex-col">
                  <h1 className="text-[32px] font-poppins font-[900]">{materials.length > 0 ? materials.length : '0'}</h1>
                  <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">Total Materials</h2>
                  <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"></div>
                </div>
                <div className="w-[40%] flex flex-col items-center">
                  <div 
                    className="hover:cursor-pointer transition-all ease-linear hover:translate-y-1"
                    onClick={() => (dispatch(changePopup('newMaterial'), dispatch(changeEdit('')), dispatch(resetMaterial())))}
                  >
                    <SVG
                      svg={'plus'}
                      width={48}
                      height={48}
                      schemeOne={'#09BD3C'}
                    >
                    </SVG>
                  </div>
                  <h1 className="text-[14px] font-poppins font-[400] mt-5">New Material</h1>
                  <h1 
                    className="text-[16px] font-poppins font-[400] underline text-blue-400 hover:cursor-pointer"
                    onClick={() => dispatch(changeView('materials'))}
                  >
                    view all
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[22%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
              <div className="flex w-full">
                <div className="w-[60%] flex flex-col">
                  <h1 className="text-[32px] font-poppins font-[900]">{colors.length > 0 ? colors.length : '0'}</h1>
                  <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">Total Colors</h2>
                  <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"></div>
                </div>
                <div className="w-[40%] flex flex-col items-center">
                  <div 
                    className="hover:cursor-pointer transition-all ease-linear hover:translate-y-1"
                    onClick={() => (dispatch(changePopup('newColor'), dispatch(changeEdit('')), dispatch(resetColor())))}
                  >
                    <SVG
                      svg={'plus'}
                      width={48}
                      height={48}
                      schemeOne={'#09BD3C'}
                    >
                    </SVG>
                  </div>
                  <h1 className="text-[14px] font-poppins font-[400] mt-5">New Color</h1>
                  <h1 
                    className="text-[16px] font-poppins font-[400] underline text-blue-400 hover:cursor-pointer"
                    onClick={() => dispatch(changeView('colors'))}
                  >
                    view all
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[22%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
              <div className="flex w-full">
                <div className="w-[60%] flex flex-col">
                  <h1 className="text-[32px] font-poppins font-[900]">{locations.length > 0 ? locations.length : '0'}</h1>
                  <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">Total Locations</h2>
                  <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"></div>
                </div>
                <div className="w-[40%] flex flex-col items-center">
                  <div 
                    className="hover:cursor-pointer transition-all ease-linear hover:translate-y-1"
                    onClick={() => (dispatch(changePopup('newLocation'), dispatch(changeEdit('')), dispatch(resetLocation())))}
                  >
                    <SVG
                      svg={'plus'}
                      width={48}
                      height={48}
                      schemeOne={'#09BD3C'}
                    >
                    </SVG>
                  </div>
                  <h1 className="text-[14px] font-poppins font-[400] mt-5">New Location</h1>
                  <h1 
                    className="text-[16px] font-poppins font-[400] underline text-blue-400 hover:cursor-pointer"
                    onClick={() => dispatch(changeView('locations'))}
                  >
                    view all
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[22%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
              <div className="flex w-full">
                <div className="w-[60%] flex flex-col">
                  <h1 className="text-[32px] font-poppins font-[900]">{brands.length > 0 ? brands.length : '0'}</h1>
                  <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">Total Brands</h2>
                  <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"></div>
                </div>
                <div className="w-[40%] flex flex-col items-center">
                  <div 
                    className="hover:cursor-pointer transition-all ease-linear hover:translate-y-1"
                    onClick={() => (dispatch(changePopup('newBrand'), dispatch(changeEdit('')), dispatch(resetBrand())))}
                  >
                    <SVG
                      svg={'plus'}
                      width={48}
                      height={48}
                      schemeOne={'#09BD3C'}
                    >
                    </SVG>
                  </div>
                  <h1 className="text-[14px] font-poppins font-[400] mt-5">New Brand</h1>
                  <h1 
                    className="text-[16px] font-poppins font-[400] underline text-blue-400 hover:cursor-pointer"
                    onClick={() => dispatch(changeView('brands'))}
                  >
                    view all
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[22%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
              <div className="flex w-full">
                <div className="w-[60%] flex flex-col">
                  <h1 className="text-[32px] font-poppins font-[900]">{categories.length > 0 ? categories.length : '0'}</h1>
                  <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">Total Categories</h2>
                  <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"></div>
                </div>
                <div className="w-[40%] flex flex-col items-center">
                  <div 
                    className="hover:cursor-pointer transition-all ease-linear hover:translate-y-1"
                    onClick={() => (dispatch(changePopup('newCategory'), dispatch(changeEdit('')), dispatch(resetBrand())))}
                  >
                    <SVG
                      svg={'plus'}
                      width={48}
                      height={48}
                      schemeOne={'#09BD3C'}
                    >
                    </SVG>
                  </div>
                  <h1 className="text-[14px] font-poppins font-[400] mt-5">New Category</h1>
                  <h1 
                    className="text-[16px] font-poppins font-[400] underline text-blue-400 hover:cursor-pointer"
                    onClick={() => dispatch(changeView('categories'))}
                  >
                    view all
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[22%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
              <div className="flex w-full">
                <div className="w-[60%] flex flex-col">
                  <h1 className="text-[32px] font-poppins font-[900]">{models.length > 0 ? models.length : '0'}</h1>
                  <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">Total Models</h2>
                  <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"></div>
                </div>
                <div className="w-[40%] flex flex-col items-center">
                  <div 
                    className="hover:cursor-pointer transition-all ease-linear hover:translate-y-1"
                    onClick={() => (dispatch(changePopup('newModel'), dispatch(changeEdit('')), dispatch(resetModel())))}
                  >
                    <SVG
                      svg={'plus'}
                      width={48}
                      height={48}
                      schemeOne={'#09BD3C'}
                    >
                    </SVG>
                  </div>
                  <h1 className="text-[14px] font-poppins font-[400] mt-5">New Model</h1>
                  <h1 
                    className="text-[16px] font-poppins font-[400] underline text-blue-400 hover:cursor-pointer"
                    onClick={() => dispatch(changeView('models'))}
                  >
                    view all
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
