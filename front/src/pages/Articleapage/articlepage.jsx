import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./articlepage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Articlepage(){
    const [article,setArticle]=useState({});
    const param=useParams();

    useEffect(()=>{
       axios.get(`http://localhost:8000/articles/${param.id}`).then(result=>{
         setArticle(result.data);
       })
       .catch((error)=>{
            console.log(error);
       });
    },[])
    return(
       <div>
           <Navbar/>
           <div className={styled.page}>
             <div className="container">
                <h1>{article.title}</h1>
                <div className={styled.articleinfo}>
                    <span>تاریخ:{article.date} </span>
                    <span>نویسنده :{article.author} </span>
                    <span>مدت زمان خواندن :{article.readingTime}</span>
                </div>

                <p>
                    {article.content}

                </p>

             </div>
             <h1>article page</h1>
           </div> 
           <Footer/>
        </div>
       
    );
}

export default Articlepage