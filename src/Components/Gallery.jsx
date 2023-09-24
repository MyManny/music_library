import GalleryItem from './GalleryItem'
import { DataContext } from '../Context/DataContext.js'
import { useContext } from 'react'


export default function Gallery() {
    const data = useContext(DataContext)

    const display = data.map((item, index) => <GalleryItem item={item} index={index} />)

    return (
        <div>
            {display}
        </div>
    )
}