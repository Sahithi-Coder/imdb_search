import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import Resultshow from 'Resultshow'

class Search extends Component {
constructor(props){
    super(props)
    this.state={
        query: '',
        message: '',
        category: '',
        Results:[],
        c:'',
        t:''
    }
    this.clickHandler=this.clickHandler.bind(this)
}

 handleInputChange = (e) => {
   this.setState({
     query: e.target.value
   })
 }

 handleCategoryChange = (event) => {
     this.setState({
         category: event.target.value
     })
 }

 clickHandler=(click)=>{
    const Api='bf9d80e5'
    const Url='http://omdbapi.com/?apikey='+Api+'&s='+this.state.query+'&type='+this.state.category
    axios.post(Url)
        .then(res =>  { 
            this.setState({
                t:res.data.Response
            })
            console.log(res.data.Response)
            if(this.state.t==="False"){
                console.log(res.data.Error)
            this.setState({c:res.data.Error})
            }
            else{

          
        this.setState({
            Results:res.data.Search
        });
    }
        
        } )   
      .catch(error => console.log(error) )
     // console.log(this.state.Results.Title)
        click.preventDefault()
}

 render() {
   return (
       <div className='wrapper-container'>
             <div className="heading">
                 
           <h2 color='black'>Movies Search</h2>
           </div>
           <div className="container">
           <div className="input-box">
                <br  />
            <form onSubmit={this.clickHandler}>
                <input type="search" style={{
                    fontSize: 20, display: 'flex', paddingLeft: 10 
                }}
                    placeholder="Enter search item"
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                    autoComplete="on"
                    autoSave="true"
                    tabIndex ="-1"
                />
           </form>
           </div>
           <div className="sbutton">
                {this.state.message}
                
                    {/* <Link to='/searchresults'> */}
                        <button type="submit" onClick={this.clickHandler}>
                            {/* <img src='media-film-solid-search-512.png' /> */}
                            Search
                            </button>
                    {/* </Link> */}
             </div>   
            </div>
           <div className="menu">
               <span>Select Category</span>
               <div className="menu-content">
               <select value={this.state.category} onChange={this.handleCategoryChange}>
                   <option value="movie">Movie</option>
                   <option value="series">Web Series</option>
                   <option value="Episode">Episode</option>
               </select>
               </div>
           </div>
           <div>
            {this.state.t==="False"? <p>{this.state.c}</p> : <p></p> }
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
           {/* else{
           return( <p>{this.c}</p>) } })} */}
            </div>
        </div>
   )
 }
}

export default Search