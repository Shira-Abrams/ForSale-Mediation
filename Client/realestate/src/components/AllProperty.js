import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProperty } from "../redux/PropertySlice";
import { ExposureTwoTone } from "@mui/icons-material";
import { GoogleMap, useLoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import MultiActionAreaCard from "./singleProperty";
import '../cssomponents/AllProperty.css'
import { setProperty } from "../redux/singlePropertySlice";
import SearchAppBar from './filterNavBar';
import { Stack } from "@mui/joy";
import { bool } from "yup";
import { useNavigate ,useParams} from 'react-router-dom';
import Typography from '@mui/material/Typography';

// import Map from "./map";
const AllProperty = () => {
  // const[propCondition,setPropCondition]=React.useState([false,false,false,false,false])
  // const[area,setArea]=React.useState({from:0,until:0})
  // const[floor,setFloor]=React.useState({from:0,until:0})
  // const[otherCondition,setOtherCondition]=React.useState({
  //   'propCondition':propCondition,
  //   'area':area,
  //   'floor':floor
  // })
  const statuss=useParams().status;
  
  const [closeFilters, setCloseFilters] = useState(true)
  const [isDispatch, setIsDispatch] = useState()

 const properties = useSelector(state => state.properties.property)
 // let tempProperties=useSelector(state => state.properties.property)
  const [tempProperties, setTempProperties] = useState(properties);
  const status = useSelector(state => state.properties.status)
  const dispatch = useDispatch()
 
  const propCharArray=['parkinglot','elivator','porchGarden','safeRoom','aircondition','basmsent','disabledAcces','bars'];
  const FilteBySearch = (cityName) => {
    console.log('at all properties ');
     setTempProperties(tempProperties.filter(x=>x.city.name==cityName))
  }

  const FilteByPrice = (val1, val2) => {
    console.log('at filter by serch all proerty components');
    setTempProperties(properties)
    setTempProperties(tempProperties.filter(x => x.propertyPrice >= val1[0] && x.propertyPrice <= val1[1]&&x.priceForSm>=val2[0]&&x.priceForSm<=val2[1]))
    console.log('property afte filter contain: ', tempProperties);
    console.log('the array value to filter :', val1, val2);
  }
  const CleanFilterPrice = () => {
    setTempProperties(properties)

  }
  const FilterByRoom = (e) => {
    if (e < 6) {
      setTempProperties(tempProperties.filter(x => x.numRoom === e))
    }
    else {
      setTempProperties(tempProperties.filter(x => x.numRoom >= e))

    }

  }
  const IsHasType=(prop,type)=>{
    let indexTypeArray=[];
    let flag=false
     for(let i=0;i<type.length;i++)
     {
        if(type[i]===true)
        indexTypeArray.push(i)
     }

     for(let i=0;i<indexTypeArray.length;i++ )
     {
         if(prop.propertyType===indexTypeArray[i])
           flag=true;
      
     } 
      return flag;
  }

  
  const FilterByPropertytype = (e) => {
    setTempProperties(tempProperties.filter(x=>IsHasType(x,e)))
  }
  const AsyncCharFilter=(c)=>{
    setTempProperties(tempProperties.filter(x=>x[c]==true))
  }
  const FilterByPropChar = (e) => {
   for(let i=0;i<e.length;i++)
   {  
      if(e[i]===true&&tempProperties.length!==0){
        
        var c=propCharArray[i];
        console.log('at FilterByPropChar change :',e[i],c);
        AsyncCharFilter(c)
        console.log('after filter array ',tempProperties);
      }
      
   }
    
  }
  const IsFitOtherFilter=(property,condition,area,floor)=>{
   
     let auxiliaryCondition=[];
    
     console.log('property',property,'conditionObject',property,condition,area,floor);
     let flag=false;
     for (let i = 0; i < condition.length; i++) {
          if(condition[i]==true)
          auxiliaryCondition.push(i);
      } 
    for (let i = 0; i < auxiliaryCondition.length; i++) {
      if(property.propertyCondition==auxiliaryCondition[i])
          flag=true;
    }
       
    if(!(property.sm>=area.from&&property.sm<=area.until))
       flag=false
    if(!(property.floor>=floor.from&&property.floor<=floor.until))
        flag=false
     return flag
  }
   
  const OthersFilter = (condition,area,floor) => {
     setTempProperties(tempProperties.filter(x=>IsFitOtherFilter(x,condition,area,floor)))
  }                

  let Filtersfunction = {
    'serch': FilteBySearch,
    'price': FilteByPrice,
    'cleanPrice': CleanFilterPrice,
    'room': FilterByRoom,
    'propertytype': FilterByPropertytype,
    'PropChar': FilterByPropChar,
    'others': OthersFilter,
    'close': closeFilters,
    'ChangeClose': (flag) => { setCloseFilters({ flag }) }
  }
 
  const calldispatch=async()=>{

    console.log('at calldispatch');
    dispatch(GetAllProperty())
    setTempProperties(properties)
    console.log('tempProperties  =',tempProperties);
    console.log('properties  =',properties);

  }
   
  useEffect (
    () => {
      console.log('all property dispatch dispatch');
     console.log('use efect tempProperties',tempProperties);
      calldispatch()

      if(statuss==='for-sale')
      setTempProperties(tempProperties.filter(x=>x.propertyStatus===0))
     if(statuss==='for-rent')
      setTempProperties(tempProperties.filter(x=>x.propertyStatus===1))
     console.log(statuss);
    console.log(properties);
       },[]) 
      
  return (
    <>
       <SearchAppBar  filters={Filtersfunction} ></SearchAppBar>
       {statuss==='for-sale'&&( <Typography textAlign="right"  variant="h5" sx={{marginRight:'1vh'}}>  דירות למכירה בכל הארץ </Typography>)}

       {statuss==='for-rent'&&( <Typography textAlign="right"  variant="h5" sx={{marginRight:'1vh'}}>  דירות להשכרה בכל הארץ </Typography>)}
        
      {tempProperties.length!=0?(<div className="PropertyWarp" style={{direction:'rtl'}} onClick={() => { setCloseFilters(false) }}> {tempProperties.map((item, index) => {
        console.log(item);
        console.log(tempProperties);
        dispatch(setProperty(item))
        return (
          <div key={item.index} className="Property">
              <MultiActionAreaCard element={item} />
          </div>)
        })}</div>) : 
        ( 
        <div className="no-found">אין נכס מתאים נסה לנקות מסננים</div>)}
    </> )     
   
}
export default AllProperty