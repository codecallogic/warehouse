
"use client"
//// MODULES
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

//// COMPONENTS
import TopNav from "../_components/_account/topNav"
import Dashboard from '../_components/_account/dashboard'
import NewSlab from "../_components/_forms/slab";

//// REDUCERS
import { useDispatch, useSelector } from "react-redux";
import { changeView, changePopup } from "@/app/_redux/features/navigation";

const Account = ({}) => {
  
  const dispatch = useDispatch()
  const [view, setView] = useState('')
  const [popup, setPopup] = useState('')
  const currentNavigation = useSelector((state) => state.navigationReducer);
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'user', 'view']);
  
  useEffect(() => {
    setView(currentNavigation.value.view)
    setPopup(currentNavigation.value.popup)
  }, [currentNavigation])
  
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
        />
      }
    </>
  )
}

export default Account
