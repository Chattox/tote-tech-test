import {API_KEY} from '../config/config';

// Default URL to get news from newsAPI if no search term given
const defaultURL = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`;

export async function getNews(searchTerm) {
  // Fetch all articles from newsAPI and return as JSON object
  const url = `https://newsapi.org/v2/everything?q=${searchTerm}&language=en&apiKey=${API_KEY}`;

  let newsData, result;

  // If no search term given, use default URL
  if (searchTerm) {
    newsData = await fetch(url);
    result = await newsData.json();
  } else {
    newsData = await fetch(defaultURL);
    result = await newsData.json();
  }

  return result.articles;
}
