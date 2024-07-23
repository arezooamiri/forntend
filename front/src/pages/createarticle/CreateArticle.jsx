import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createarticle.module.css";

function CreateArticle() {
    const HandelChange=(e)=>{

    }
     return(
    <>
      <Navbar />
      <div className={styled.createarticlepage}>
        <div className="container">
            <h1>ساخت مقاله </h1>
            <div className={styled.inputwraper}>
                <label>عنوان  </label>
                <input onChange={HandelChange} type="text"/>
            </div>

        </div>

      </div>

      
    </>
     )
}
export default CreateArticle;