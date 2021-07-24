import { Image } from 'react-bootstrap';
import icons from '../components/Icons';

const Technologies = () => {
  return (
    <div className='p-3'>
      <h3 className='text-center mt-2'>Techonology Experience</h3>
      <p className='text-center font-italic mb-0'>
        Technologies that I have used in projects - experience will vary.
      </p>
      <div className='row'>
        <div className='col-sm mt-3'>
          <h4>Back-End</h4>
          <ul className='fa-ul'>
            <li>
              <span className='fa-li'>
                <Image src={icons.laravel} className='icon-sm' />
              </span>
              Laravel
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.php} className='icon-sm' />
              </span>
              PHP
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.node} className='icon-sm' />
              </span>
              Node.js
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.express} className='icon-sm' />
              </span>
              Express.js
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.prisma} className='icon-sm' />
              </span>
              Prisma.js
            </li>
          </ul>
        </div>
        <div className='col-sm mt-3'>
          <h4>Front-End</h4>
          <ul className='fa-ul'>
            <li>
              <span className='fa-li'>
                <Image src={icons.html} className='icon-sm' />
              </span>
              HTML & CSS
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.js} className='icon-sm' />
              </span>
              JavaScript
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.react} className='icon-md' />
              </span>
              React
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.sass} className='icon-sm' />
              </span>
              SASS
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.bootstrap} className='icon-sm' />
              </span>
              Bootstrap
            </li>
          </ul>
        </div>
        <div className='col-sm mt-3'>
          <h4>Database</h4>
          <ul className='fa-ul'>
            <li>
              <span className='fa-li'>
                <Image src={icons.mySQL} className='icon-sm' />
              </span>
              MySQL
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.mongo} className='icon-sm' />
              </span>
              MongoDB
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.postgres} className='icon-sm' />
              </span>
              PostgreSQL
            </li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm mt-3'>
          <h4>Deployment</h4>
          <ul className='fa-ul'>
            <li>
              <span className='fa-li'>
                <Image src={icons.digitalOcean} className='icon-sm' />
              </span>
              Digital Ocean Droplets (Ubuntu)
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.raspberryPi} className='icon-sm' />
              </span>
              Raspberry Pi
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.heroku} className='icon-sm' />
              </span>
              Heroku
            </li>
          </ul>
        </div>
        <div className='col-sm mt-3'>
          <h4>Other</h4>
          <ul className='fa-ul'>
            <li>
              <span className='fa-li'>
                <Image src={icons.vscode} className='icon-sm' />
              </span>
              Visual Studio Code
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.github} className='icon-md' />
              </span>
              GitHub (Git Flow)
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.python} className='icon-sm' />
              </span>
              Python
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.visualBasic} className='icon-sm' />
              </span>
              Visual Basic.net
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.unity} className='icon-md' />
              </span>
              Unity with C#
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.cpp} className='icon-sm' />
              </span>
              C++
            </li>
            <li>
              <span className='fa-li'>
                <Image src={icons.firebase} className='icon-sm' />
              </span>
              Firebase
            </li>
          </ul>
        </div>
        <div className='col-sm mt-3'>
          <h4>Tech Stack I'm Using Here</h4>
          <ul className='px-2 mb-0'>
            <li>React (front-end)</li>
            <li>Bootstrap & SASS</li>
            <li>Node js with Express (API)</li>
            <li>Notion API (CMS)</li>
            <li>Redis (cache articles)</li>
            <li>Heroku (back-end host)</li>
            <li>Netlify (front-end host)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
