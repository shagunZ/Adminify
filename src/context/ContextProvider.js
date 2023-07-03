import React from "react";
import { createContext,useContext,useState } from 'react';


const StateContext = createContext();


const initialState={
    //currently opened or closed
    chat: false,   
    cart:false,
    userProfile:false,
    notification:false,
}


export const ContextProvider =({children})=>{
const [activeMenu,setActiveMenu] = useState(true)
const[isClicked,setisClicked] =useState(initialState)

const [screenSize,setScreenSize]=useState(undefined)

const handleClick=(clicked)=>{
setisClicked({...initialState,[clicked]:true})
}

    return (
        <StateContext.Provider 
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setisClicked,
            handleClick,
            screenSize,
            setScreenSize
            }}>
            {children}
            </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)


//if key and value are of same name, we can simply permit the value.