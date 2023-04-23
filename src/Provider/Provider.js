import { createContext, useState } from "react";

export const Ctx=createContext(null)

const CTXProvider=({children})=>{

    const [todos,setTodos]=useState(['first', 'second', 'third'])
    const addValue=()=> setTodos([...todos, 'Dummy Insert'])
    return (
        <>
        <Ctx.Provider value={[todos, addValue]}>
            {children}
        </Ctx.Provider>
        </>
    )
}
export default CTXProvider