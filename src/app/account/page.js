
"use client"
//// MODULES
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';

//// COMPONENTS
import TopNav from "../_components/_account/topNav"
import Dashboard from '../_components/_account/dashboard'
import NewSlab from "../_components/_forms/slab";

//// REDUCERS
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/app/_redux/features/authSlice";
import { changeView, changePopup } from "@/app/_redux/features/navigationSlice";
import { changeSlabArray, changeSlabValue, changeSlabImages } from "@/app/_redux/features/slabSlice";

///// QUERIES AND MUTATIONS
import GET_USER from '@/app/_queries/fetchUser'
import GET_MATERIALS from '@/app/_queries/fetchMaterials'
import GET_COLORS from '@/app/_queries/fetchColors'
import GET_SUPPLIERS from '@/app/_queries/fetchSuppliers'
import GET_LOCATIONS from '@/app/_queries/fetchLocations'

const Account = ({}) => {
  
  const dispatch                        = useDispatch()
  const router                          = useRouter();
  const [loadingData, setLoadingData]   = useState(true)
  const [user, setUser]                 = useState('')
  const [view, setView]                 = useState('')
  const [popup, setPopup]               = useState('')
  const [slab, setSlab]                 = useState('')
  const currentNavigation               = useSelector((state) => state.navigationReducer);
  const currentSlab                     = useSelector((state) => state.slabReducer)
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'user', 'view']);
  
  //// QUERIES AND MUTATIONS
  const dataUser                 = useQuery(GET_USER, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown'}})
  const dataMaterials            = useQuery(GET_MATERIALS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataColors               = useQuery(GET_COLORS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataSuppliers            = useQuery(GET_SUPPLIERS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataLocations            = useQuery(GET_LOCATIONS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  
  useEffect(() => {

    setLoadingData(true)
    console.log(dataUser)
    if(dataUser.error){ 
      console.log('ERROR')
      dataUser.error.message = 'Invalid token' ? router.push('/') : router.push('/error') 
    }

    if(!dataUser.error) setLoadingData(false)
    
    if(dataUser.data && dataUser.data.user){
      setUser(dataUser.data.user)
      dispatch(login())
    }
    
  }, [dataUser])
  
  useEffect(() => {
    setView(currentNavigation.value.view)
    setPopup(currentNavigation.value.popup)
  }, [currentNavigation])

  useEffect(() => {
    setSlab(currentSlab.value)
  }, [currentSlab])

  if(!user) return <div className="ring">Loading</div>
  
  return (
    <>
      <div className="w-full flex flex-col">
        <TopNav 
          dispatch={dispatch}
          changeView={changeView}
          logout={logout}
          router={router}
        />
        { view == 'dashboard' &&
          <Dashboard
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
          />
        }
      </div>
      { popup && 
        <NewSlab 
          dispatch={dispatch}
          changePopup={changePopup}
          materials={dataMaterials.data && dataMaterials.data.allMaterials}
          colors={dataColors.data && dataColors.data.allColors}
          suppliers={dataSuppliers.data && dataSuppliers.data.allSuppliers}
          locations={dataLocations.data && dataLocations.data.allLocations}
          changeSlabArray={changeSlabArray}
          changeSlabValue={changeSlabValue}
          changeSlabImages={changeSlabImages}
          slab={slab}
        />
      }
    </>
  )
}

export default Account
