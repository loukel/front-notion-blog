import { useEffect, useState } from 'react';
import ArticleList from './ArticleList';
// import Loading from '../components/Loading'
import { getArticles } from '../services';

const Articles = () => {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(async () => {
    try {
      setArticles(await getArticles());
    } catch (error) {
      setError('Failed');
    }
  }, []);

  if (!articles) return <h4>Loading</h4>;

  if (error) return <div className='mt-4 text-center'>{error}</div>;

  return (
    <div className='p-3'>
      <h3 className='text-center'>Articles</h3>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Articles;
