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
        <h6>Author: {author}</h6>
        <p>
          Published Date:{" "}
          {publishedDate === "0000"
            ? "Not Available"
            : publishedDate.substring(0, 4)}
        </p>
      </div>
    </div>
  );
}
