import React,{useEffect, useState}from "react";
import Card from "./Card";

let url="https://gunakarna.github.io/test_api/movies_db.json";
let arr=["Trending","Action","Thriller","Drama","Comedie"];

const Main=()=>{
    const [movieData,setData]=useState([]);
    const [search,setSearch]=useState();
    const [curt_url,setUrl]=useState(url);
    
    useEffect(()=>{
        fetch(curt_url).then(res=>res.json()).then((res) => {
            setData(res.results)
            setSearch(res.results)
            // console.log(res.results)
           });
    },[curt_url])

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
   setData(result)
    setUrl("https://gunakarna.github.io/test_api/Search.json ")
  
    }
   
return(
        <>

       <div className="container1">
          <div className="content">
            <header className="header">
              <p>Movie Shěnchá </p>
              </header>
           <div className="search-btn">
              <input type="text"  placeholder="Search Moviename"  className="inputText"
                     onChange={e =>searchMovie(e.target.value.toLowerCase())}/>
                    <button><i className="fas fa-search"></i></button>
                   </div>
                   <div className="main-content">    
                     {(movieData.length===0)?<p className="notfound">Not Found</p>: 
                     movieData.map((res,pos)=>{
                        return(
                            <Card infom={res} key={pos}/>
                        )
                    })}
                 
            </div>
    
        </div>  
               
        <div className="menu-icon">
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
      </div>
   
    <div className="sidebar1">
     <nav>
            <ul>
         {arr.map((value,pos)=>{
             return(
          <li><a href="/#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
             )
              })
             }
                       
          </ul>
             </nav>
                <footer className>@Copyright Gunakarna &#128525; 2023</footer>
    </div>
</div>
 </>
  )
    }
export default Main;
