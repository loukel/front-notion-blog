const Books = () => {
  return (
    <div className='p-3'>
      <h3>Favourite Books</h3>
      <div className='books'>
        <div className='d-flex flex-wrap flex-row'>
          <img
            src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876l/10127019.jpg'
            alt='Lean Startup'
            className='book-cover m-1 rounded'
          />
          <img
            src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1414347376l/18050143.jpg'
            alt='Zero to One'
            className='book-cover m-1 rounded'
          />
          <img
            src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454296875l/25666050.jpg'
            alt='Algorithms to Live By'
            className='book-cover m-1 rounded'
          />
          <img
            src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512705866l/30257963.jpg'
            alt='12 Rules for Life'
            className='book-cover m-1 rounded'
          />
        </div>
      </div>
    </div>
  );
};

export default Books;
