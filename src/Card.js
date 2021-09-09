import React from 'react'

export default function Card(props) {
    return (
        
        <div class="card" styles="width: 18rem;">
        <img src={props.image} class="card-img-top" alt={props.image} />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          
          <a href={props.url} class="btn btn-primary ">Check it Out </a>
       
        </div>
      </div>
      
    )
}
