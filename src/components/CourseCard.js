export default function CourseCard({ image, title, desc, onClick }) {
  return (
    <div className="course-card">
      <img src={image} className="course-img" alt={title} />

      <h3>{title}</h3>
      <p>{desc}</p>

      <button className="btn secondary" onClick={onClick}>
        View Details
      </button>
    </div>
  );
}
