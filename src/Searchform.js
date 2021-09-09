import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import Select from 'react-select'
import Card from './Card'

export default function Searchform(props) {
   
    const [recipies, setrecipies] = useState([])
    let DietList=[{
        value:'balanced',label:'Balanced'
    },
{
    value:'high-protein',label:'High-Protein'
},
{
    value:'high-fiber',label:'High-Fiber'
}]

    const [query, setquery] = useState('')
    const onChangehandler_q=(event)=>{
       
        setquery(event.target.value)
    }
    const [diet, setDiet] = useState(DietList.value)
    const onSelect=event=>{
        setDiet(event.value)
       
    }
    console.log(diet)
   
    let url=`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=cf9cf8b7&app_key=${props.apiKey}&diet=${diet}`
    async function getResponse(){
        let result= await Axios.get(url);
        setrecipies(result.data.hits)
        console.log(recipies);
    }

    return (
        <div className="container my-3 ">
           <h1 className="text-center">Search for Your Favorite Recipes Here</h1>
            <form action="" className="d-flex justify-content-center my-5">
            <input value={query} className="form-control form-control-lg" type="text" placeholder="Input your Query" aria-label=".form-control-lg example"  onChange={onChangehandler_q} style={{maxWidth:'544px'}}   />
            <div style={{width:'300px'}}><Select className="mx-3" options={DietList} stye={{minWidth:'500px'}} onChange={onSelect}></Select></div>
<button type="button" className="btn btn-primary" onClick={getResponse}>Get Results</button>
            </form>
            <div className="container my-3">
                <div className="row">
                    {recipies.map((element)=>{
                        return (<div className="col-md-4">
                            <Card  title={element['recipe']['label']} image={element['recipe']['image']} url={element['recipe']['url']} />
                        </div>)
                    })}
                </div>
            </div>
            
        </div>
    )
}
