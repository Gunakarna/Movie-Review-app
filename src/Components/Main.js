import React, { useEffect, useState } from "react";
import Card from "./Card";

// https://gunakarna.github.io/test_api/movies_db.json
let url="https://gunakarna.github.io/test_api/movies_db.json";
let arr=["Trending","Action","Thriller","Drama","Comedie"];

const Main=()=>{
    const [movieData,setData]=useState([]);
    const [search,setSearch]=useState();
    const [url_set,setUrl]=useState(url);
   
   
    useEffect(()=>{
        fetch(url_set)
        .then(res=>res.json()).then(data=>{
            setData(data.results)
            setSearch(data.results)
           
            
         });
    },[url_set])
console.log(url_set)
    const getData=(movieType)=>{
        if(movieType==="Trending")
        {
         url="https://gunakarna.github.io/test_api/movies_db.json";
        }
        if(movieType==="Action")
        {
            url="https://gunakarna.github.io/test_api/Action.json";
        }
        if(movieType==="Thriller")
         {
            url="https://gunakarna.github.io/test_api/thriller.json";
        }
        if(movieType==="Drama")
        {
            url="https://gunakarna.github.io/test_api/drama.json";
        }
        if(movieType==="Comedie")
        {
            url="https://gunakarna.github.io/test_api/Comedie.json";
        }
        setUrl(url);

    }

const searchMovie= (value) => 
    {
    const result = search.filter(f => f.title.toLowerCase().includes(value) )
    console.log(value)
    setData(result)
    setUrl("https://gunakarna.github.io/test_api/Search.json ")
    }
    
return(
        <>
  <div class="menu-icon">
        <div class="menu-bar"></div>
        <div class="menu-bar"></div>
        <div class="menu-bar"></div>
    </div>

       <div className="sidebar">
            
                <ul>
                {
                    arr.map((value,pos)=>{
                                return(
                                    <li><a href="/#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                                  
                                )
                            })
                        }
                </ul>
            
          
            <footer className="footer"> 2023 @Copyright Gunakarna &#128525; </footer>
            
            </div>
                <div  className="search-btn">
                <h3 className="head-title">Movie Shěnchá </h3>
                      <input type="text"  placeholder="Search Movie name"  className="inputText"
                       onChange={e =>searchMovie(e.target.value.toLowerCase())}/>
                    <button><i className="fas fa-search"></i></button>
                   </div>
             
        
            <div className="container">
                {
                    (movieData.length===0)?<p className="notfound">Not Found</p>: 
                     movieData.map((res,pos)=>{
                        return(
                            <Card infom={res} key={pos} />
                        )
                    })
                }
                
            </div>
       
            
        </>

    )
    }
export default Main;