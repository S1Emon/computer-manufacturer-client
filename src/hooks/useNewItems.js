import { useEffect, useState } from "react"

const useNewItems = () => {
    const [newItems, setNewItems] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/new`)
            .then(res => res.json())
            .then(data => setNewItems(data))
    }, [])
    return [newItems]
}
export default useNewItems;