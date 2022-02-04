
import './App.css';
import Nav from './Nav';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import Discription from './Discription';
import {BrowserRouter as Router , Switch , Route, Routes,  } from 'react-router-dom';





function App() {
  return (
    <Router>
    <div className="App">
   <Nav />
  
   <Routes>
   <Route path="/" component={Home} exact />
   <Route path="/MovieCard" component={MovieCard}/>
   <Route path="/MovieList" component={MovieList}/>
   <Route path="/Discription" component={Discription}/>
   
   </Routes>
   
    </div>
    </Router>
   
  );
}
const Home = () => (
  <div>
    <h1> Home Page</h1>
  </div>
);
export default App;
