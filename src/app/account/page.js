
"use client"
//// MODULES
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';

//// COMPONENTS
import TopNav from "../_components/_account/topNav"
import Dashboard from '../_components/_account/dashboard'
import NewSlab from "../_components/_forms/slab"
import SideNav from '../_components/_account/sideNav'
import Slabs from '../_components/_account/slabs'

//// REDUCERS
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/app/_redux/features/authSlice";
import { changeView, changePopup, changeEdit } from "@/app/_redux/features/navigationSlice";
import { changeSlabArray, changeSlabValue, changeSlabImages, editSlab, resetSlab } from "@/app/_redux/features/slabSlice";

///// QUERIES
import GET_USER from '@/app/_queries/fetchUser'
import GET_MATERIALS from '@/app/_queries/fetchMaterials'
import GET_COLORS from '@/app/_queries/fetchColors'
import GET_SUPPLIERS from '@/app/_queries/fetchSuppliers'
import GET_LOCATIONS from '@/app/_queries/fetchLocations'
import GET_SLABS from '@/app/_queries/fetchSlabs'

///// MUTATIONS
import NEW_SLAB from '@/app/_mutations/newSlab'
import UPDATE_SLAB from '@/app/_mutations/updateSlab'
import DELETE_SLAB_IMAGE from '@/app/_mutations/deleteSlabImage'

const Account = ({}) => {
  
  const dispatch                        = useDispatch()
  const router                          = useRouter();
  const [loadingData, setLoadingData]   = useState(true)
  const [user, setUser]                 = useState('')
  const [view, setView]                 = useState('')
  const [popup, setPopup]               = useState('')
  const [edit, setEdit]                 = useState('')
  const [slab, setSlab]                 = useState('')
  const [slabs, setSlabs]               = useState([])
  const currentNavigation               = useSelector((state) => state.navigationReducer);
  const currentSlab                     = useSelector((state) => state.slabReducer)
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'user', 'view']);
  
  //// QUERIES
  const dataUser                 = useQuery(GET_USER, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown'}})
  const dataMaterials            = useQuery(GET_MATERIALS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataColors               = useQuery(GET_COLORS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataSuppliers            = useQuery(GET_SUPPLIERS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataLocations            = useQuery(GET_LOCATIONS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataSlabs                = useQuery(GET_SLABS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})

  //// REFETCH
  const { refetch: refetchSlabs  }              = useQuery(GET_SLABS, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown' } })


  //// MUTATIONS
  const [newSlab, { dataNewSlab, loadingNewSlab, errorNewSlab }] = useMutation(NEW_SLAB, { refetchQueries: [ GET_SLABS ]})
  const [updateSlab, { dataUpdateSlab, loadingUpdateSlab, errorUpdateSlab}] = useMutation(UPDATE_SLAB, { refetchQueries: [ GET_SLABS ]})
  const [deleteSlabImage, { dataDeleteSlab, loadingDeleteSlab, errorDeleteSlab}] = useMutation(DELETE_SLAB_IMAGE, { refetchQueries: [ GET_SLABS ]})
  
  useEffect(() => {

    setLoadingData(true)
    // console.log(dataUser)
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
    setEdit(currentNavigation.value.edit)
  }, [currentNavigation])

  useEffect(() => {
    setSlab(currentSlab.value)
  }, [currentSlab])

  useEffect(() => {
    if(dataSlabs.data) setSlabs(dataSlabs.data.allSlabs)
  }, [dataSlabs])


  if(!user) return <div className="ring">Loading</div>
  
  return (
    <>
      <main className="relative ">
        <SideNav
          dispatch={dispatch}
          changeView={changeView}
          logout={logout}
          router={router}
          view={view}
        />
      </main>
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
            changeEdit={changeEdit}
          />
        }
        { view == 'slabs' &&
          <Slabs
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            slabs={slabs}
            editSlab={editSlab}
          />
        }
      </div>
      { popup == 'newSlab' && 
        <NewSlab 
          dispatch={dispatch}
          changePopup={changePopup}
          changeEdit={changeEdit}
          materials={dataMaterials.data && dataMaterials.data.allMaterials}
          colors={dataColors.data && dataColors.data.allColors}
          suppliers={dataSuppliers.data && dataSuppliers.data.allSuppliers}
          locations={dataLocations.data && dataLocations.data.allLocations}
          changeSlabArray={changeSlabArray}
          changeSlabValue={changeSlabValue}
          changeSlabImages={changeSlabImages}
          slab={slab}
          newSlab={newSlab}
          resetSlab={resetSlab}
          changeView={changeView}
          edit={edit}
          updateSlab={updateSlab}
          refetch={refetchSlabs}
          deleteSlabImage={deleteSlabImage}
        />
      }
    </>
  )
}

export default Account
