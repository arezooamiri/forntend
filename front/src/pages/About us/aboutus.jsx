 import Navbar from "../../components/navbar/Navbar";
 import styled from "./about.module.css";
 import Footer  from "../../components/footer/Footer";
 import map from "../../../src/assest/images/map.png"
 function About(){
    return(
        <div className={styled.about}>
            <Navbar />
            <h2 > درباره ما </h2>
            <p>
               جستجوی موتورهای جستجوی معتبر فارسی زبان مانند گوگل، یاهو و بینگ   :


               با استفاده از کلیدواژه های مرتبط، مقالات مرتبط را جستجو کنید .

              به سایت های دارای پسوند  .ir، .ac.ir و .gov.ir توجه کنید که معمولاً معتبرتر هستند.
               استفاده از پایگاه های داده علمی و آکادمیک فارسی زبان:

                پایگاه های داده مانند نورمگز، جستجوگر علمی و پرتال جامع علوم انسانی.
                این پایگاه ها مقالات علمی و پژوهشی معتبر را ارائه می دهند.
            </p>
            <img src={map}/>

            <Footer/>
        </div>
        
    )
 }
 export default About;