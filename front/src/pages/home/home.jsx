import Article from "../../components/article/Article"
import Navbar from "../../components/navbar/Navbar"
import styled from "../home/home.module.css"

function  Home(){
    let article=[
        {
            id:1,
            imageUrl:"https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/BMD-3398.png",
            readingTime:10,
        },
        {
            
            id:2,
            imageUrl:"https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg?t=st=1720512413~exp=1720516013~hmac=b9e6b0589ab89f50343efc03fb22498786e24bf59f724a74c425f18fd49a97fd&w=1060",
            title:"تست2",
            readingTime:10,
        }
    ]
    return(
        <div className={styled.homewrapper}> 
            <Navbar />
            <div className="container">

               <h2>مقالات جدید</h2>
               <div className={styled.articles}>

                  {
                    article.map(article=>(
                        <Article article={article}/> 
                    ))
                  }
                   
                  


               </div>
               



            </div>

    

        </div>
    )
}


export default Home
