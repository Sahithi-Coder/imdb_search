import React, { Component } from 'react'
import Resultshow from 'Resultshow'
export class Resultshow extends Component {
    render() {
        return (
            <div>
                {this.state.Results.map(movie => 
              
              <Link to={`/${movie.imdbID}`} target='_blank' reload> 
              <div style={{display:'inline-block',}} key={movie} width='30%'>
                  <table>
                  <tr>
             <th>
                 <p> {movie.Title}</p>
               <img style={{height:500}} src={movie.Poster==="N/A"?'images.png':movie.Poster} alt=' ' height='250px'/>
              </th>
              </tr></table></div>
               </Link>
         )} 
            </div>
        )
    }
}

export default Resultshow
