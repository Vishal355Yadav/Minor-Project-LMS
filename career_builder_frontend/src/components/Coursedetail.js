import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';  //to get id of the course which help to fetch form database
function CourseDetail(){
    let {course_id}=useParams();
    return(
         <div className="container mt-4 ">
            <div className="row">
                <div className="col-4">
                <img src="/logo512.png" className="img-thumbnail" alt="Course Image"/>
                </div>
                <div className='col-8'>
                    <h3>Course Tittle</h3>
                    <p> Wait...it's not over though! The whole purpose of the algorithm is to customize the runtime correctly. Imagine if the
                        range increases from 1-15 to 1-100. The compiler will check each number to determine whether it is divisible by 3
                        or 5. It would then run through the numbers again to check if the numbers are divisible by 3 and 5. The code would
                        essentially have to run through each number in the array twice — it would have to runs the numbers by 3 first and
                        then run it by 5.
                    </p>
                    <p>Author : <a href="#"><strong>Teacher Name</strong></a></p>
                    <p><strong>Duration :3 Hours 30 Minutes</strong></p>
                    <p><strong>Total Enrolled: 355 Students</strong></p>
                    <p><strong>Rating : 4.5/5</strong></p>
                </div>
            </div>
            <div className="cards mt-5">
               <div className="card-header">
                <h5>Course Videos</h5>
               </div>
               <ul class="list-group list-group-flush">
                 <li class="list-group-item">Introduction <button className="btn-btn-sn btn-secondary float-end"><i class="bi bi-play"></i></button></li>
                 <li class="list-group-item">Setup Project <button className="btn-btn-sn btn-secondary float-end"><i class="bi bi-play"></i></button></li>
                 <li class="list-group-item">Start with functional component <button className="btn-btn-sn btn-secondary float-end"><i class="bi bi-play"></i></button></li>
                 <li class="list-group-item">Introduction <button className="btn-btn-sn btn-secondary float-end"><i class="bi bi-play"></i></button></li>
                 <li class="list-group-item">Setup Project <button className="btn-btn-sn btn-secondary float-end"><i class="bi bi-play"></i></button></li>
                 <li class="list-group-item">Start with functional component <button className="btn-btn-sn btn-secondary float-end"><i class="bi bi-play"></i></button></li>
                </ul>
              
            </div>
            <h3 className="pb-1 mb-5">Related Courses</h3>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
            <Link to="/CourseDetail/1" ><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
              <div className="card-body">
                <h5 className="card-title"><Link to="/CourseDetail/1" >Course Title</ Link></h5>        
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
             <a href="#" ><img src="/logo512.png" className="card-img-top" alt="..."/></a>
              <div className="card-body">
                <h5 className="card-title"><a href="#" >Course Title</a></h5>        
              </div>
            </div>
          </div>
            </div>
         </div>
    );
}
export default CourseDetail;