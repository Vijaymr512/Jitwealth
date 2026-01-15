import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

export default function Courses() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section
        style={{
          minHeight: "90vh",
          background: "#ffffff",
          padding: "60px 20px"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <h1
            style={{
              fontSize: "42px",
              color: "#111",
              marginBottom: "10px"
            }}
          >
            Explore <span style={{ color: "#C9A24D" }}>Courses</span>
          </h1>

          <p style={{ color: "#777", marginBottom: "40px" }}>
            Learn from expert mentors and build profitable trading strategies.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px"
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
        </div>
      </section>
    </>
  );
}
