
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
import NewProduct from "../_components/_forms/product"
import SideNav from '../_components/_account/sideNav'
import Slabs from '../_components/_account/slabs'
import Products from '../_components/_account/products'
import NewRemnant from '../_components/_forms/remnant'
import Remnants from '../_components/_account/remnants'
import NewMaterial from '../_components/_forms/material'
import Materials from '../_components/_account/materials'

//// REDUCERS
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/app/_redux/features/authSlice";
import { changeView, changePopup, changeEdit } from "@/app/_redux/features/navigationSlice";
import { changeSlabArray, changeSlabValue, changeSlabImages, editSlab, resetSlab } from "@/app/_redux/features/slabSlice";
import { changeProductArray, changeProductValue, changeProductImages, editProduct, resetProduct } from "@/app/_redux/features/productSlice";
import { changeRemnantArray, changeRemnantValue, changeRemnantImages, editRemnant, resetRemnant } from "../_redux/features/remnantSlice";
import { changeMaterialValue, editMaterial, resetMaterial } from "../_redux/features/materialSlice";

///// QUERIES
import GET_USER from '@/app/_queries/fetchUser'
import GET_MATERIALS from '@/app/_queries/fetchMaterials'
import GET_COLORS from '@/app/_queries/fetchColors'
import GET_SUPPLIERS from '@/app/_queries/fetchSuppliers'
import GET_LOCATIONS from '@/app/_queries/fetchLocations'
import GET_SLABS from '@/app/_queries/fetchSlabs'
import GET_BRANDS from '@/app/_queries/fetchBrands'
import GET_CATEGORIES from '@/app/_queries/fetchCategories'
import GET_MODELS from '@/app/_queries/fetchModels'
import GET_PRODUCTS from '@/app/_queries/fetchProducts'
import GET_REMNANTS from '@/app/_queries/fetchRemnants'

///// MUTATIONS
import NEW_SLAB from '@/app/_mutations/newSlab'
import UPDATE_SLAB from '@/app/_mutations/updateSlab'
import DELETE_SLAB_IMAGE from '@/app/_mutations/deleteSlabImage'
import DELETE_SLAB from '@/app/_mutations/deleteSlab'
import NEW_PRODUCT from '@/app/_mutations/newProduct'
import UPDATE_PRODUCT from '@/app/_mutations/updateProduct'
import DELETE_PRODUCT_IMAGE from '@/app/_mutations/deleteProductImage'
import DELETE_PRODUCT from '@/app/_mutations/deleteProduct'
import NEW_REMNANT from '@/app/_mutations/newRemnant'
import UPDATE_REMNANT from '@/app/_mutations/updateRemnant'
import DELETE_REMNANT_IMAGE from '@/app/_mutations/deleteRemnantImage'
import DELETE_REMNANT from '@/app/_mutations/deleteRemnant'
import NEW_MATERIAL from '@/app/_mutations/newMaterial'
import UPDATE_MATERIAL from '@/app/_mutations/updateMaterial'
import DELETE_MATERIAL from '@/app/_mutations/deleteMaterial'

const Account = ({}) => {
  
  const dispatch                              = useDispatch()
  const router                                = useRouter();
  const [loadingData, setLoadingData]         = useState(true)
  const [user, setUser]                       = useState('')
  const [view, setView]                       = useState('')
  const [popup, setPopup]                     = useState('')
  const [edit, setEdit]                       = useState('')
  const [slab, setSlab]                       = useState('')
  const [slabs, setSlabs]                     = useState([])
  const [product, setProduct]                 = useState('')
  const [products, setProducts]               = useState([])
  const [remnant, setRemnant]                 = useState('')
  const [remnants, setRemnants]               = useState([])  
  const [material, setMaterial]               = useState('')
  const [materials, setMaterials]             = useState([])
  const currentNavigation                     = useSelector((state) => state.navigationReducer);
  const currentSlab                           = useSelector((state) => state.slabReducer)
  const currentProduct                        = useSelector((state) => state.productReducer)
  const currentRemnant                        = useSelector((state) => state.remnantReducer)
  const currentMaterial                       = useSelector((state) => state.materialReducer)
  const [cookies, setCookie, removeCookie]    = useCookies(['token', 'user', 'view']);
  
  //// QUERIES
  const dataUser                              = useQuery(GET_USER, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown'}})
  const dataMaterials                         = useQuery(GET_MATERIALS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataColors                            = useQuery(GET_COLORS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataSuppliers                         = useQuery(GET_SUPPLIERS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataLocations                         = useQuery(GET_LOCATIONS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataSlabs                             = useQuery(GET_SLABS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataBrands                            = useQuery(GET_BRANDS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataCategories                        = useQuery(GET_CATEGORIES, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataModels                            = useQuery(GET_MODELS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataProducts                          = useQuery(GET_PRODUCTS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})
  const dataRemnants                          = useQuery(GET_REMNANTS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})

  //// REFETCH
  const { refetch: refetchSlabs  }            = useQuery(GET_SLABS, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown' } })
  const { refetch: refetchProducts  }         = useQuery(GET_PRODUCTS, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown' } })
  const { refetch: refetchRemnants  }         = useQuery(GET_REMNANTS, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown' } })
  const { refetch: refetchMaterials  }         = useQuery(GET_MATERIALS, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown' } })

  //// MUTATIONS
  const [newSlab, { dataNewSlab, loadingNewSlab, errorNewSlab }] = useMutation(NEW_SLAB, { refetchQueries: [ GET_SLABS ]})
  const [updateSlab, { dataUpdateSlab, loadingUpdateSlab, errorUpdateSlab}] = useMutation(UPDATE_SLAB, { refetchQueries: [ GET_SLABS ]})
  const [deleteSlabImage, { dataDeleteSlabImage, loadingDeleteSlabImage, errorDeleteSlabImage}] = useMutation(DELETE_SLAB_IMAGE, { refetchQueries: [ GET_SLABS ]})
  const [deleteSlab, { dataDeleteSlab, loadingDeleteSlab, errorDeleteSlab}] = useMutation(DELETE_SLAB, { refetchQueries: [ GET_SLABS ]})

  const [newProduct, { dataNewProduct, loadingNewProduct, errorNewProduct }] = useMutation(NEW_PRODUCT, { refetchQueries: [ GET_PRODUCTS ]})
  const [updateProduct, { dataUpdateProduct, loadingUpdateProduct, errorUpdateProduct}] = useMutation(UPDATE_PRODUCT, { refetchQueries: [ GET_PRODUCTS ]})
  const [deleteProductImage, { dataDeleteProductImage, loadingDeleteProductImage, errorDeleteProductImage}] = useMutation(DELETE_PRODUCT_IMAGE, { refetchQueries: [ GET_PRODUCTS ]})
  const [deleteProduct, { dataDeleteProduct, loadingDeleteProduct, errorDeleteProduct}] = useMutation(DELETE_PRODUCT, { refetchQueries: [ GET_PRODUCTS ]})

  const [newRemnant, { dataNewRemnant, loadingNewRemnant, errorNewRemnant }] = useMutation(NEW_REMNANT, { refetchQueries: [ GET_REMNANTS ]})
  const [updateRemnant, { dataUpdateRemnant, loadingUpdateRemnant, errorUpdateRemnant}] = useMutation(UPDATE_REMNANT, { refetchQueries: [ GET_REMNANTS ]})
  const [deleteRemnantImage, { dataDeleteRemnantImage, loadingDeleteRemnantImage, errorDeleteRemnantImage}] = useMutation(DELETE_REMNANT_IMAGE, { refetchQueries: [ GET_REMNANTS ]})
  const [deleteRemnant, { dataDeleteRemnant, loadingDeleteRemnant, errorDeleteRemnant}] = useMutation(DELETE_REMNANT, { refetchQueries: [ GET_REMNANTS ]})

  const [newMaterial, { dataNewMaterial, loadingNewMaterial, errorNewMaterial }] = useMutation(NEW_MATERIAL, { refetchQueries: [ GET_MATERIALS ]})
  const [updateMaterial, { dataUpdateMaterial, loadingUpdateMaterial, errorUpdateMaterial}] = useMutation(UPDATE_MATERIAL, { refetchQueries: [ GET_MATERIALS ]})
  const [deleteMaterial, { dataDeleteMaterial, loadingDeleteMaterial, errorDeleteMaterial}] = useMutation(DELETE_MATERIAL, { refetchQueries: [ GET_MATERIALS ]})

  
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

  //// REDUX
  
  useEffect(() => {
    setView(currentNavigation.value.view)
    setPopup(currentNavigation.value.popup)
    setEdit(currentNavigation.value.edit)
  }, [currentNavigation])

  useEffect(() => {
    setSlab(currentSlab.value)
  }, [currentSlab])

  useEffect(() => {
    setProduct(currentProduct.value)
  }, [currentProduct])

  useEffect(() => {
    setRemnant(currentRemnant.value)
  }, [currentRemnant])

  useEffect(() => {
    setMaterial(currentMaterial.value)
  }, [currentMaterial])

  //// LISTS

  useEffect(() => {
    if(dataSlabs.data) setSlabs(dataSlabs.data.allSlabs)
  }, [dataSlabs])

  useEffect(() => {
    if(dataProducts.data) setProducts(dataProducts.data.allProducts)
  }, [dataProducts])

  useEffect(() => {
    if(dataRemnants.data) setRemnants(dataRemnants.data.allRemnants)
  }, [dataRemnants])

  useEffect(() => {
    if(dataMaterials.data) setMaterials(dataMaterials.data.allMaterials)
  }, [dataMaterials])

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
          user={user}
        />
        { view == 'dashboard' &&
          <Dashboard
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            resetSlab={resetSlab}
            resetProduct={resetProduct}
            resetRemnant={resetRemnant}
            resetMaterial={resetMaterial}
            slabs={slabs}
            products={products}
            remnants={remnants}
            materials={materials}
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
            deleteSlab={deleteSlab}
            refetch={refetchSlabs}
          />
        }
        { view == 'products' &&
          <Products
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            products={products}
            editProduct={editProduct}
            deleteProduct={deleteProduct}
            refetch={refetchProducts}
          />
        }
        { view == 'remnants' &&
          <Remnants
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            remnants={remnants}
            editRemnant={editRemnant}
            deleteRemnant={deleteRemnant}
            refetch={refetchRemnants}
          />
        }
        { view == 'materials' &&
          <Materials
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            materials={materials}
            editMaterial={editMaterial}
            deleteMaterial={deleteMaterial}
            refetch={refetchMaterials}
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
      { popup == 'newProduct' && 
        <NewProduct 
          dispatch={dispatch}
          changePopup={changePopup}
          changeEdit={changeEdit}
          brands={dataBrands.data && dataBrands.data.allBrands}
          models={dataModels.data && dataModels.data.allModels}
          categories={dataCategories.data && dataCategories.data.allCategories}
          colors={dataColors.data && dataColors.data.allColors}
          locations={dataLocations.data && dataLocations.data.allLocations}
          changeProductArray={changeProductArray}
          changeProductValue={changeProductValue}
          changeProductImages={changeProductImages}
          product={product}
          newProduct={newProduct}
          resetProduct={resetProduct}
          changeView={changeView}
          edit={edit}
          updateProduct={updateProduct}
          refetch={refetchProducts}
          deleteProductImage={deleteProductImage}
        />
      }
      { popup == 'newRemnant' && 
        <NewRemnant 
          dispatch={dispatch}
          changePopup={changePopup}
          changeEdit={changeEdit}
          materials={dataMaterials.data && dataMaterials.data.allMaterials}
          colors={dataColors.data && dataColors.data.allColors}
          changeRemnantArray={changeRemnantArray}
          changeRemnantValue={changeRemnantValue}
          changeRemnantImages={changeRemnantImages}
          remnant={remnant}
          newRemnant={newRemnant}
          resetRemnant={resetRemnant}
          changeView={changeView}
          edit={edit}
          updateRemnant={updateRemnant}
          refetch={refetchRemnants}
          deleteRemnantImage={deleteRemnantImage}
        />
      }
      { popup == 'newMaterial' && 
        <NewMaterial 
          dispatch={dispatch}
          changePopup={changePopup}
          changeEdit={changeEdit}
          changeMaterialValue={changeMaterialValue}
          material={material}
          newMaterial={newMaterial}
          resetMaterial={resetMaterial}
          changeView={changeView}
          edit={edit}
          updateMaterial={updateMaterial}
          refetch={refetchMaterials}
        />
      }
    </>
  )
}

export default Account
