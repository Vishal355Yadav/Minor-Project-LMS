import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Login from './user/Login';
import Dashboard from './user/Dashboard';
import Register from './user/Register';
import FavoriteCourses from './user/FavoriteCourses';
import RecommendedCourses from './user/RecommendedCourses';
import Mycourses from './user/Mycourses';
import CourseDetail  from './Coursedetail';
import {Routes, Route} from 'react-router-dom';
// import Mycourses from './user/Mycourses';

function Main() {
    return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/CourseDetail/:course_id' element={<CourseDetail/>}/>
          <Route path='/user-login' element ={<Login/>}/>
          <Route path='/user-register' element ={<Register/>}/>
          <Route path='/user-dashboard' element ={<Dashboard/>}/>
          <Route path='/my-courses' element ={<Mycourses/>}/>
          <Route path='/favorite-courses' element ={<FavoriteCourses/>}/>
          <Route path='/recommended-courses' element ={<RecommendedCourses/>}/>
        </Routes>
        <Footer/>
      </div> 
    );
  }
  
  export default Main;

  