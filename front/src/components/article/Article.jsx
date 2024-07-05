import styeld from "./article.module.css"
import articel from "./../../assest/images/articel.png"
function Article(){


    return(
        <div className={styeld.articlewrapper}>
            <img src={articel}/>
            <h3> نکات جاوا اسکریپت </h3>
            <p> مدت زمان خواندن ۱۰ دقیقه</p>
        </div>
    )

}

export default Article