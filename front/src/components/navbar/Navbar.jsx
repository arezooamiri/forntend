import styled from "./navbar.module.css";
import {Link} from "react-router-dom";
function Navbar(props){

console.log(props);
  
    return(
      <div className={styled.headerWrapper}>
        <div className="container">
        <div className={styled.header}>
            
            <ul>
              <h3>{props.title}</h3>
              <li> 
                <Link to="/">لیست مقالات</Link>
              </li>
              <li> مقاله جدید</li>
              <li>
                <Link to="/about">درباره </Link>
              </li>
            </ul>
          </div>
      </div>
      </div>
      
        
    )
}

export default Navbar;
