import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

export default function Courses() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <h2 style={{textAlign:"center", color:"#B78425", marginTop:"20px"}}>
        All Courses
      </h2>

      <div
        style={{
          width:"80%",
          margin:"auto",
          display:"flex",
          gap:"25px",
          flexWrap:"wrap",
          justifyContent:"center"
        }}
      >

        {courses.map(course => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.title}
            desc={course.desc}
            onClick={() => navigate(`/course/${course.id}`)}
          />
        ))}

      </div>
    </>
  );
}
