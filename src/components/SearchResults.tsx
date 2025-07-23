import { useLocation } from "react-router-dom";
import BookList from "../components/BookList";

export default function SearchResults() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div className="min-h-screen bg-zinc-700 p-4">
      <h2 className="text-white text-xl mb-4">
        Search Results ({searchResults.length})
      </h2>
      <BookList books={searchResults} />
    </div>
  );
}
