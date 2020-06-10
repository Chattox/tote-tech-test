import {API_KEY} from '../config/config';

// URL to get news from newsAPI
const defaultURL = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`;

export async function getNews(searchTerm) {
  // Fetch all articles from newsAPI and return as JSON object
  const url = `https://newsapi.org/v2/everything?q=${searchTerm}&language=en&apiKey=${API_KEY}`;

  let newsData, result;

  if (searchTerm) {
    newsData = await fetch(url);
    result = await newsData.json();
  } else {
    newsData = await fetch(defaultURL);
    result = await newsData.json();
  }

  return result.articles;
}
