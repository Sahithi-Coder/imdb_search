import React, { Component } from 'react'
import Search from 'Search'

export class Show extends Component {
    render() {
        return (
            <div>
                 {this.state.Results.map(movie =>
                <Link to={`/${movie.imdbID}`} target='_blank'> 
                <div style={{display:'inline-block',}} key={movie} width='30%'>
                    <table>
                    <tr>
               <th>
                   <p> {movie.Title}</p>
                 <img src={movie.Poster} alt=' ' onError={(e)=>{this.onError=null; this.src='images.png'}} height='250px'/>'
                </th>
                </tr></table></div>
                 </Link>
                )}   
            </div>
        )
    }
}

export default Resultshow
