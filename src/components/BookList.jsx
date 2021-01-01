import BookCard from "./BookCard";
import "../styles/BookList.css";

export default function BookList({ books }) {
  return (
    <div className="list">
      {books?.map(
        ({
          id,
          volumeInfo: { imageLinks, title, authors, publishedDate, subtitle },
        }) => (
          <BookCard
            key={id}
            image={imageLinks?.thumbnail}
            title={title}
            author={authors[0]}
            publishedDate={publishedDate}
            subtitle={subtitle}
          />
        )
      )}
    </div>
  );
}
