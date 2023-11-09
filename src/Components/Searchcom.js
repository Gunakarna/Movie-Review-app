
import React,{ useState, useEffect } from "react";
import Card from "./Card";


const Searchcomp=()=>{
    const [movieData,setData]=useState([]);
    const [search,setSearch]=useState();
   
    useEffect(()=>{
        fetch("http://localhost:3031/results")
        .then(res=>res.json()).then(data=>{
            
            setSearch(data)
        });
    },[])

    const searchMovie= (value) => 
    {
    const res = search.filter(f => f.title.toLowerCase().includes(value) )
    // console.log(res)
    // setData(res); 
    if(value === " "){
       setData([])
    }
    else{
        setData(res); 
    }
    
    };
    return(
        <>
            <div className="header">
               
                <form>
                <div  className="search-btn">
           <input type="text"  placeholder="Search Movie" onChange={ e =>searchMovie(e.target.value.toLowerCase())}/>
          <button><i className="fas fa-search"></i></button>
            </div>
                </form>
            </div>
            <div className="container">
                {
                    (movieData.length==0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
                        return(
                            <Card infom={res} key={pos}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Searchcomp;