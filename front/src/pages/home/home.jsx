
import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "../home/home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

function  Home(){
    const [article,setArticle]=useState([]);

    useEffect(()=>{
       axios.get("http://localhost:8000/articles").then(result=>{
        setArticle(result.data);
        
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
                        <Link to={`/article/${article.id}`}>
                            <Article key={article.id} article={article}/> 
                        </Link>
                        
                     ))
                  }
                   
                </div>
             </div>
            <Footer/>
            

        </div>
    )
}


export default Home
