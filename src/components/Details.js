import React from  'react'
import axios from 'axios'
class Details extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            result:[]
         }
        }
    componentDidMount()
    {
        const {imdbID}=this.props.match.params;
        const Api='bf9d80e5'
        const Url = `http://www.omdbapi.com/?apikey=${Api}&i=${imdbID}`
        axios.get(Url)
        .then(response =>
          {
            console.log(response)
             console.log(response.data)
            this.setState({
              result:response.data
            })
          })
    }
    render() {
        const{
            Poster,Title,Year,Rated, Released, Runtime,Genre,Director,Writer, Actors,Plot, Country,Awards
        }=this.state.result;
        return (
        <div>
             <h1>{Title}</h1>         
             <div className="movie-poster">
    <img src={Poster} alt=''></img></div>  
            
<div className="col1">
    <p>
    Genre  :   {Genre}<br></br>
    Year    :  {Year}<br></br>
    Rated   :  {Rated}<br></br> 
    Released:  {Released}<br></br>
    Runtime :  {Runtime}<br></br>
    Genre   :  {Genre}<br></br>
    Director:  {Director}<br></br>
    Actors:   {Actors}<br></br>
    Plot :   {Plot}
    </p>
    </div>
   
          </div>   
        )
    }

}
export default Details