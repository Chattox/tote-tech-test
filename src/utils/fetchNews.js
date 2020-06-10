import {API_KEY} from '../config/config';

// URL to get news from newsAPI
const url = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`;

export async function getGBNews() {
  // Fetch all articles from newsAPI and return as JSON object
  const newsData = await fetch(url);
  const result = await newsData.json();

  return result.articles;
}
