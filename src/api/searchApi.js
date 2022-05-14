import axios from 'axios'

const key = '540c0a2d08264331b2101b7c7169ed92';

export const searchCategory = async (search) => {
  const res = await axios.get('https://newsapi.org/v2/everything?q=' + search + '&from=2022-04-15&sortBy=publishedAt&apiKey='+ key)
  const articles = res.data.articles;
  return articles
}