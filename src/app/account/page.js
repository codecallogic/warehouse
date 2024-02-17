
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
import Colors from '../_components/_account/colors'
import NewColor from '../_components/_forms/color'
import Locations from '../_components/_account/locations'
import NewLocation from '../_components/_forms/location'
import Brands from '../_components/_account/brands'
import NewBrond from '../_components/_forms/brand'
import Categories from '../_components/_account/categories'
import NewCategory from '../_components/_forms/category'
import Models from '../_components/_account/models'
import NewModel from '../_components/_forms/model'

//// REDUCERS
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/app/_redux/features/authSlice";
import { changeView, changePopup, changeEdit } from "@/app/_redux/features/navigationSlice";
import { changeSlabArray, changeSlabValue, changeSlabImages, editSlab, resetSlab } from "@/app/_redux/features/slabSlice";
import { changeProductArray, changeProductValue, changeProductImages, editProduct, resetProduct } from "@/app/_redux/features/productSlice";
import { changeRemnantArray, changeRemnantValue, changeRemnantImages, editRemnant, resetRemnant } from "../_redux/features/remnantSlice";
import { changeMaterialValue, editMaterial, resetMaterial } from "../_redux/features/materialSlice";
import { changeColorValue, editColor, resetColor } from "../_redux/features/colorSlice";
import { changeLocationValue, editLocation, resetLocation } from "../_redux/features/locationSlice";
import { changeBrandValue, editBrand, resetBrand } from "../_redux/features/brandSlice";
import { changeCategoryValue, editCategory, resetCategory } from "../_redux/features/categorySlice";
import { changeModelValue, editModel, resetModel } from "../_redux/features/modelSlice";

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
import NEW_COLOR from '@/app/_mutations/newColor'
import UPDATE_COLOR from '@/app/_mutations/updateColor'
import DELETE_COLOR from '@/app/_mutations/deleteColor'
import NEW_LOCATION from '@/app/_mutations/newLocation'
import UPDATE_LOCATION from '@/app/_mutations/updateLocation'
import DELETE_LOCATION from '@/app/_mutations/deleteLocation'
import NEW_BRAND from '@/app/_mutations/newBrand'
import UPDATE_BRAND from '@/app/_mutations/updateBrand'
import DELETE_BRAND from '@/app/_mutations/deleteBrand'
import NEW_CATEGORY from '@/app/_mutations/newCategory'
import UPDATE_CATEGORY from '@/app/_mutations/updateCategory'
import DELETE_CATEGORY from '@/app/_mutations/deleteCategory'
import NEW_MODEL from '@/app/_mutations/newModel'
import UPDATE_MODEL from '@/app/_mutations/updateModel'
import DELETE_MODEL from '@/app/_mutations/deleteModel'

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
  const [color, setColor]                     = useState('')
  const [colors, setColors]                   = useState([])
  const [location, setLocation]               = useState('')
  const [locations, setLocations]             = useState([])
  const [brand, setBrand]                     = useState('')
  const [brands, setBrands]                   = useState([])
  const [category, setCategory]               = useState('')
  const [categories, setCategories]           = useState([])
  const [model, setModel]                     = useState('')
  const [models, setModels]                   = useState([])
  const currentNavigation                     = useSelector((state) => state.navigationReducer);
  const currentSlab                           = useSelector((state) => state.slabReducer)
  const currentProduct                        = useSelector((state) => state.productReducer)
  const currentRemnant                        = useSelector((state) => state.remnantReducer)
  const currentMaterial                       = useSelector((state) => state.materialReducer)
  const currentColor                          = useSelector((state) => state.colorReducer)
  const currentLocation                       = useSelector((state) => state.locationReducer)
  const currentBrand                          = useSelector((state) => state.brandReducer)
  const currentCategory                       = useSelector((state) => state.categoryReducer )
  const currentModel                          = useSelector((state) => state.modelReducer )
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
  const { refetch: refetchMaterials  }        = useQuery(GET_MATERIALS, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown' } })
  const { refetch: refetchColors  }           = useQuery(GET_COLORS, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown' } })
  const { refetch: refetchLocations  }        = useQuery(GET_LOCATIONS, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown' } })
  const { refetch: refetchBrands  }           = useQuery(GET_BRANDS, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown' } })
  const { refetch: refetchCategories  }       = useQuery(GET_CATEGORIES, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown' } })
  const { refetch: refetchModels  }           = useQuery(GET_MODELS, { variables: { id: cookies.user ? cookies.user.id : 'unknown', token: cookies.token ? cookies.token : 'unknown' } })

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

  const [newColor, { dataNewColor, loadingNewColor, errorNewColor }] = useMutation(NEW_COLOR, { refetchQueries: [ GET_COLORS ]})
  const [updateColor, { dataUpdateColor, loadingUpdateColor, errorUpdateColor}] = useMutation(UPDATE_COLOR, { refetchQueries: [ GET_COLORS ]})
  const [deleteColor, { dataDeleteColor, loadingDeleteColor, errorDeleteColor}] = useMutation(DELETE_COLOR, { refetchQueries: [ GET_COLORS ]})

  const [newLocation, { dataNewLocation, loadingNewLocation, errorNewLocation }] = useMutation(NEW_LOCATION, { refetchQueries: [ GET_LOCATIONS ]})
  const [updateLocation, { dataUpdateLocation, loadingUpdateLocation, errorUpdateLocation}] = useMutation(UPDATE_LOCATION, { refetchQueries: [ GET_LOCATIONS ]})
  const [deleteLocation, { dataDeleteLocation, loadingDeleteLocation, errorDeleteLocation}] = useMutation(DELETE_LOCATION, { refetchQueries: [ GET_LOCATIONS ]})

  const [newBrand, { dataNewBrand, loadingNewBrand, errorNewBrand }] = useMutation(NEW_BRAND, { refetchQueries: [ GET_BRANDS ]})
  const [updateBrand, { dataUpdateBrand, loadingUpdateBrand, errorUpdateBrand}] = useMutation(UPDATE_BRAND, { refetchQueries: [ GET_BRANDS ]})
  const [deleteBrand, { dataDeleteBrand, loadingDeleteBrand, errorDeleteBrand}] = useMutation(DELETE_BRAND, { refetchQueries: [ GET_BRANDS ]})

  const [newCategory, { dataNewCategory, loadingNewCategory, errorNewCategory }] = useMutation(NEW_CATEGORY, { refetchQueries: [ GET_CATEGORIES ]})
  const [updateCategory, { dataUpdateCategory, loadingUpdateCategory, errorUpdateCategory}] = useMutation(UPDATE_CATEGORY, { refetchQueries: [ GET_CATEGORIES ]})
  const [deleteCategory, { dataDeleteCategory, loadingDeleteCategory, errorDeleteCategory}] = useMutation(DELETE_CATEGORY, { refetchQueries: [ GET_CATEGORIES ]})

  const [newModel, { dataNewModel, loadingNewModel, errorNewModel }] = useMutation(NEW_MODEL, { refetchQueries: [ GET_MODELS ]})
  const [updateModel, { dataUpdateModel, loadingUpdateModel, errorUpdateModel }] = useMutation(UPDATE_MODEL, { refetchQueries: [ GET_MODELS ]})
  const [deleteModel, { dataDeleteModel, loadingDeleteModel, errorDeleteModel }] = useMutation(DELETE_MODEL, { refetchQueries: [ GET_MODELS ]})
  
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

  useEffect(() => {
    setColor(currentColor.value)
  }, [currentColor])

  useEffect(() => {
    setLocation(currentLocation.value)
  }, [currentLocation])

  useEffect(() => {
    setBrand(currentBrand.value)
  }, [currentBrand])

  useEffect(() => {
    setCategory(currentCategory.value)
  }, [currentCategory])

  useEffect(() => {
    setModel(currentModel.value)
  }, [currentModel])

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

  useEffect(() => {
    if(dataColors.data) setColors(dataColors.data.allColors)
  }, [dataColors])

  useEffect(() => {
    if(dataLocations.data) setLocations(dataLocations.data.allLocations)
  }, [dataLocations])

  useEffect(() => {
    if(dataBrands.data) setBrands(dataBrands.data.allBrands)
  }, [dataBrands])

  useEffect(() => {
    if(dataCategories.data) setCategories(dataCategories.data.allCategories)
  }, [dataCategories])

  useEffect(() => {
    if(dataModels.data) setModels(dataModels.data.allModels)
  }, [dataModels])

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
          user={user}
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
            resetColor={resetColor}
            resetLocation={resetLocation}
            resetBrand={resetBrand}
            resetModel={resetModel}
            slabs={slabs}
            products={products}
            remnants={remnants}
            materials={materials}
            colors={colors}
            locations={locations}
            brands={brands}
            categories={categories}
            models={models}
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
        { view == 'colors' &&
          <Colors
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            colors={colors}
            editColor={editColor}
            deleteColor={deleteColor}
            refetch={refetchColors}
          />
        }
        { view == 'locations' &&
          <Locations
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            locations={locations}
            editLocation={editLocation}
            deleteLocation={deleteLocation}
            refetch={refetchLocations}
          />
        }
        { view == 'brands' &&
          <Brands
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            brands={brands}
            editBrand={editBrand}
            deleteBrand={deleteBrand}
            refetch={refetchBrands}
          />
        }
        { view == 'categories' &&
          <Categories
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            categories={categories}
            editCategory={editCategory}
            deleteCategory={deleteCategory}
            refetch={refetchCategories}
          />
        }
        { view == 'models' &&
          <Models
            dispatch={dispatch}
            changeView={changeView}
            changePopup={changePopup}
            changeEdit={changeEdit}
            models={models}
            editModel={editModel}
            deleteModel={deleteModel}
            refetch={refetchModels}
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
      { popup == 'newColor' && 
        <NewColor
          dispatch={dispatch}
          changePopup={changePopup}
          changeEdit={changeEdit}
          changeColorValue={changeColorValue}
          color={color}
          newColor={newColor}
          resetColor={resetColor}
          changeView={changeView}
          edit={edit}
          updateColor={updateColor}
          refetch={refetchColors}
        />
      }
      { popup == 'newLocation' && 
        <NewLocation
          dispatch={dispatch}
          changePopup={changePopup}
          changeEdit={changeEdit}
          changeLocationValue={changeLocationValue}
          location={location}
          newLocation={newLocation}
          resetLocation={resetLocation}
          changeView={changeView}
          edit={edit}
          updateLocation={updateLocation}
          refetch={refetchLocations}
        />
      }
      { popup == 'newBrand' && 
        <NewBrond
          dispatch={dispatch}
          changePopup={changePopup}
          changeEdit={changeEdit}
          changeBrandValue={changeBrandValue}
          brand={brand}
          newBrand={newBrand}
          resetBrand={resetBrand}
          changeView={changeView}
          edit={edit}
          updateBrand={updateBrand}
          refetch={refetchBrands}
        />
      }
      { popup == 'newCategory' && 
        <NewCategory
          dispatch={dispatch}
          changePopup={changePopup}
          changeEdit={changeEdit}
          changeCategoryValue={changeCategoryValue}
          category={category}
          newCategory={newCategory}
          resetCategory={resetCategory}
          changeView={changeView}
          edit={edit}
          updateCategory={updateCategory}
          refetch={refetchCategories}
        />
      }
      { popup == 'newModel' && 
        <NewModel
          dispatch={dispatch}
          changePopup={changePopup}
          changeEdit={changeEdit}
          changeModelValue={changeModelValue}
          model={model}
          newModel={newModel}
          resetModel={resetModel}
          changeView={changeView}
          edit={edit}
          updateModel={updateModel}
          refetch={refetchModels}
        />
      }
    </>
  )
}

export default Account
