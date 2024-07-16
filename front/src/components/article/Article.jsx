import styeld from "./article.module.css"
import article from "./../../assest/images/articel.png"
function Article(props){

    
    return(
        <div className={styeld.articlewrapper}>
            <img src={props.article.imageUrl}/>
            <h3>{props.article.title}</h3>
            <p> مدت زمان خواندن {props.article.readingTime} دقیقه</p>
        </div>
    )

}

export default Article