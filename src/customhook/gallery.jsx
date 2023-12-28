
import { useEffect, useState } from 'react'

import axios from 'axios'
import Picture from '../display/Picture';


export default function Galleryimage() {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    async function download() {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=20');
        console.log(response);
        const photo = response.data.photos;
        const res = photo.map((obj) => {
            return obj
        })
        console.log(res);
        setdata(res);
        setloading(false);
    }
    useEffect(() => {
        download()
    }, [])
    return (
        <>
        <h2>Image gallery</h2>
        <p>Click on Image to see image</p>
        <div className='flex flex-wrap ml-20'>
            {(loading) ? 'loading' : data.map((op) => <Picture url={op.url} desp={op.description} title={op.title} id={op.id} />)}
        </div>    
        </>
    )
}
