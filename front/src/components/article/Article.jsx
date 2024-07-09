import styeld from "./article.module.css"
import articel from "./../../assest/images/articel.png"
function Article(props){

    console.log(props.articel)
    return(
        <div className={styeld.articlewrapper}>
            <img src={props.article.imageUrl}/>
            <h3>{props.article.title}</h3>
            <p> مدت زمان خواندن {props.article.readingTime} دقیقه</p>
        </div>
    )

}

export default Article