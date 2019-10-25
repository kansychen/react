import React,{useContext} from 'react';
import {ColorContext,UPDATA_COLOR} from './color'
function Buttons(){
    const {dispatch}=useContext(ColorContext)
 return(
     <>
        <button onClick={()=>{dispatch({type:UPDATA_COLOR,color:'red'})}}>红色</button>
        <button onClick={()=>{dispatch({type:UPDATA_COLOR,color:'yellow'})}}>黄色</button>
     </>
 )
}
export default Buttons