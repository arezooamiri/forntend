
import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "../home/home.module.css";
import axios from "axios";


function  Home(){
    const [article,setArticle]=useState([]);

    useEffect(()=>{
       axios.get("http://localhost:8000/articles").then(result=>{
        setArticle(result.data.data);
        
       }) ;    
    },[]);
   
    return(
        <div className={styled.homewrapper}> 
            <Navbar />
            <div className="container">

               <h2>مقالات جدید</h2>
               <div className={styled.articles}>

                  {
                    article.map((article)=>(
                        <Article key={article.id} article={article}/> 
                     ))
                  }
                   
                </div>
             </div>

    

        </div>
    )
}


export default Home
