export async function searchBooks(query: string) {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}
