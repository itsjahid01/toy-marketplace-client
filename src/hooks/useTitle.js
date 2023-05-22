import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} - Toy Land `
    },[title])
}

export default useTitle