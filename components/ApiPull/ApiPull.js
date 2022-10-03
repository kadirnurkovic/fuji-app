import {useEffect, useState} from 'react'
import './ApiPull.css'

export default function(){
    const [dataArray, setDataArray] = useState([])
    const fetchAPI = () => {
        fetch('https://kitsu.io/api/edge/anime')
        .then((res) => (res.json()))
        .then((json) => {
        console.log(json.data)
        setDataArray(json.data)
    })
    };
    useEffect(() => {
       fetchAPI()
    },[])
    return(
        <div className="posts">
            {dataArray.map((el) => (
                <div key={el.id} className="flex-display">
                    <h3>{el.attributes.abbreviatedTitles}</h3>
                    <img className="image-class" src={el.attributes.posterImage.large}></img>
                </div>
            ))}
        </div>
    )
}