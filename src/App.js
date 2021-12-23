import {useState, useEffect} from 'react';
import logo from './logo.svg';
import ArticleCard from './components/ArticleCard';
import * as ROUTES from './routes';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await axios.get(ROUTES.TEST_API);
      console.log(data.data);
      setArticles(data.data);
      setIsLoading(false);
    }
    fetchArticles();
  }, [])
  

  return (
    <div className="news-container">
      {articles.length < 1 ? <p>Loading</p> : articles.map((article, i) => (
        <ArticleCard key={i} article={article} />
      ))}
    </div>
  );
}

export default App;
