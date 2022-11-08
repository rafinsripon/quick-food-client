import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Quick Food`
    },[title])
}

export default useTitle;



