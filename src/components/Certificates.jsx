const Certificates = () => {
  return (
    <div className='p-3'>
      <h3 className='text-center mt-3'>Certificates</h3>
      <div className='certificates text-center'>
        <a
          href='https://courses.edx.org/certificates/9f192cb0af55478b83e7786e8904c060'
          target='_blank'
          rel='noreferrer'
          className='p-2'
        >
          <img
            src='/img/UsingPythonForResearchCourse.JPG'
            className='certificate mb-3'
            alt='Using Python For Research Course'
          />
        </a>
        <a
          href='https://www.sololearn.com/Certificate/1059-7797310/jpg'
          target='_blank'
          rel='noreferrer'
          className='p-2'
        >
          <img
            src='/img/PHPCourse.jpg'
            className='certificate mb-3'
            alt='PHP Course Certificate'
          />
        </a>
        <a
          href='https://courses.edx.org/certificates/976eff4cc7f941698d3417258c35ffb6'
          target='_blank'
          rel='noreferrer'
          className='p-2'
        >
          <img
            src='/img/BlockchainTechnology.jpg'
            className='certificate'
            alt='Blockchain Technology Certificate'
          />
        </a>
      </div>
    </div>
  );
};

export default Certificates;
