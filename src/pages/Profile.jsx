import { Helmet } from 'react-helmet';
import ArticleList from '../components/ArticleList';
import Articles from '../components/Articles';
import Books from '../components/Books';
import Certificates from '../components/Certificates';
import Links from '../components/Links';
import Technologies from '../components/Technologies';

const Home = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>Louis Kelly</title>
      </Helmet>
      <div className='row'>
        <div className='col-sm'>
          <div className='p-3'>
            <h3>Bio</h3>
            <p className='mb-0'>
              Currently a web developer who strives to create technology that
              complements people. Passionate about learning new web
              technologies. Actively trying to learn and develop.
            </p>
          </div>
        </div>
        <div className='col-sm-3 m-0'>
          <Links />
        </div>
      </div>
      <Technologies />
      <div className='row'>
        <div className='col-sm'>
          <Articles />
        </div>
        <div className='col-sm text-center'>
          <Books />
        </div>
      </div>
      <Certificates />
    </div>
  );
};

export default Home;
