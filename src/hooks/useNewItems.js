import { useEffect, useState } from "react"

const useNewItems = () => {
    const [newItems, setNewItems] = useState()
    useEffect(() => {
        fetch(`https://mysterious-forest-28554.herokuapp.com/new`)
            .then(res => res.json())
            .then(data => setNewItems(data))
    }, [])
    return [newItems]
}
export default useNewItems;