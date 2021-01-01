import "../styles/BookCard.css";
export default function BookCard({
  image,
  title,
  author,
  publishedDate,
  subtitle,
}) {
  return (
    <div className="card-container">
      <img src={image} alt="" />
      <div className="desc">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <h6>{author}</h6>
        <p>{publishedDate}</p>
      </div>
    </div>
  );
}
