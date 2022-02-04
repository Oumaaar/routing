import './App.css';
import  {Link} from 'react-router-dom';



function Nav() {
   const navStyle = {
       color: 'white'
   }


  return (
   <nav>
       <h3> Logo </h3>
<ul className="nav-links">
     <Link style={navStyle} to ="/MovieCard">
     <li> MovieCard </li>
     </Link>
     <Link style={navStyle}to ="/MovieList">
     <li> MovieList </li>
     </Link>
     <Link style={navStyle} to ="/Discription">
     <li> Discription </li>
     </Link>
</ul>

   </nav>
  );
}

export default Nav;