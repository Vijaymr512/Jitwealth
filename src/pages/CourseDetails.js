import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const courseData = {
  "stock-basics": {
    title: "Stock Market Basics",
    desc: "Beginner friendly roadmap to understand markets, risk, and trading discipline.",
    duration: "6 Weeks",
    level: "Beginner",
    topics: [
      "How the stock market works",
      "Stock types & trading styles",
      "Basics of chart reading",
      "Risk management & psychology"
    ]
  },

  "day-trading": {
    title: "Day Trading Mastery",
    desc: "Learn fast-paced trading, entries, exits, and discipline.",
    duration: "4 Weeks",
    level: "Intermediate",
    topics: [
      "Intraday indicators",
      "Momentum strategies",
      "Risk control",
      "Real trading exercises"
    ]
  }
};

export default function CourseDetails() {
  const { id } = useParams();
  const course = courseData[id];

  return (
    <>
      <Navbar />

      {!course ? (
        <h2 style={{ padding: 30 }}>Course not found</h2>
      ) : (
        <section className="section fade-in">

          <h1 style={{ color: "#B78425" }}>{course.title}</h1>
          <p className="subtitle">{course.desc}</p>

          <div className="details-box">

            <div>
              <h3>What you'll learn</h3>

              <ul>
                {course.topics.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              <button className="btn primary">Enroll Now</button>
            </div>

            <div className="details-card">
              <h3>Course Info</h3>

              <p><b>Duration:</b> {course.duration}</p>
              <p><b>Level:</b> {course.level}</p>
              <p><b>Certification:</b> Yes</p>
            </div>

          </div>
        </section>
      )}
    </>
  );
}
