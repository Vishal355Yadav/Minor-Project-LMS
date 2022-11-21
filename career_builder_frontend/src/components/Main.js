import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Login from './user/Login';
import Dashboard from './user/Dashboard';
import Register from './user/Register';
import CourseDetail  from './Coursedetail';
import {Routes, Route} from 'react-router-dom';

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
        </Routes>
        <Footer/>
      </div> 
    );
  }
  
  export default Main;

  