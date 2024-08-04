import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createarticle.module.css";
import Input from "../../input/input";

function CreateArticle() {
   const [article,setArticle]=useState({
    title:"",
    date:"",
    readingTime:"",
    author:"",
   });
    const HandelChange=(e)=>{
       
            setArticle((prevState)=>({
              ...prevState,
              [e.target.name]:e.target.valeu,
              title:e.target.value
            }));

    };
    console.log(article);
     return(
    <>
      <Navbar />
      <div className={styled.createarticlepage}>
        <div className="container">
            <h1>ساخت مقاله </h1>
            <Input label="عنوان" name="title" HandelChange={HandelChange} type="text"/>
            <Input label="تاریخ" name="date" HandelChange={HandelChange} type="text"/>
            <Input label="زمان خواندن" name="readingTime" HandelChange={HandelChange} type="text"/>
            <Input label="نویسنده" name="author" HandelChange={HandelChange} type="text"/>

        </div>

      </div>

      
    </>
     )
}
export default CreateArticle;