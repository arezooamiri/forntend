import styled from "./navbar.module.css"

function Navbar(props){

console.log(props);
  
    return(
      <div className={styled.headerWrapper}>
        <div className="container">
        <div className={styled.header}>
            
            <ul>
              <h3>{props.title}</h3>
              <li>لیست مقالات </li>
              <li> مقاله جدید</li>
              <li> درباره </li>
            </ul>
          </div>
      </div>
      </div>
      
        
    )
}

export default Navbar;
