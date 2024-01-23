
"use client"
//// MODULES
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useMutation, useQuery } from '@apollo/client';

//// COMPONENTS
import TopNav from "../_components/_account/topNav"
import Dashboard from '../_components/_account/dashboard'
import NewSlab from "../_components/_forms/slab";

//// REDUCERS
import { useDispatch, useSelector } from "react-redux";
import { changeView, changePopup } from "@/app/_redux/features/navigationSlice";
import { changeSlabArray } from "@/app/_redux/features/slabSlice";

///// QUERIES AND MUTATIONS
import GET_MATERIALS from '@/app/_queries/fetchMaterials'

const Account = ({}) => {
  
  const dispatch               = useDispatch()
  const [view, setView]        = useState('')
  const [popup, setPopup]      = useState('')
  const [slab, setSlab]        = useState('')
  const currentNavigation      = useSelector((state) => state.navigationReducer);
  const currentSlab            = useSelector((state) => state.slabReducer)
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'user', 'view']);

  //// QUERIES AND MUTATIONS
  const dataMaterials = useQuery(GET_MATERIALS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  
  useEffect(() => {
    setView(currentNavigation.value.view)
    setPopup(currentNavigation.value.popup)
  }, [currentNavigation])

  useEffect(() => {
    setSlab(currentSlab.value)
  }, [currentSlab])

  useEffect(() => {
    console.log(dataMaterials.data)
  }, [dataMaterials])
  
  return (
    <>
      <div className="w-full flex flex-col">
        <TopNav 
          dispatch={dispatch}
          changeView={changeView}
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
          materials={ dataMaterials.data && dataMaterials.data.allSlabs}
          changeSlabArray={changeSlabArray}
          slab={slab}
        />
      }
    </>
  )
}

export default Account
