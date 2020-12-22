import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import fetchImagesAPI from './services/imagesServices';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';

function App() {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages();
  }, [imageName, currentPage]);

  function onChangeQuery(imageName) {
    setImageName(imageName);
    setCurrentPage(1);
    setImages([]);
    setError(null);
  }

  function fetchImages() {
    if (imageName === '') {
      return;
    }

    setIsLoading(true);

    fetchImagesAPI({ imageName, currentPage })
      .then(newImages => {
        setImages(images => [...images, ...newImages]);
        scrollPage();
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }

  const onLoadMoreBtnClick = () => {
    setCurrentPage(prevState => prevState + 1);
    scrollPage();
  };

  const scrollPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <Searchbar onSubmit={onChangeQuery} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}

      {!isLoading && images.length >= 12 && !error && (
        <Button onClick={onLoadMoreBtnClick} />
      )}

      <ToastContainer autoClose={3000} />
    </>
  );
}
export default App;

// class App extends Component {
//   state = {
//     imageName: '',
//     images: [],
//     currentPage: 1,
//     isLoading: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.imageName !== this.state.imageName) {
//       this.fetchImages();
//     }
//   }

//   onChangeQuery = imageName => {
//     this.setState({
//       imageName,
//       currentPage: 1,
//       images: [],
//       error: null,
//     });
//   };

//   fetchImages = () => {
//     const { imageName, currentPage } = this.state;
//     const options = { imageName, currentPage };

//     this.setState({ isLoading: true });

//     fetchImagesAPI(options)
//       .then(images => {
//         this.setState(prevState => ({
//           images: [...prevState.images, ...images],
//           currentPage: prevState.currentPage + 1,
//         }));
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         });
//       })
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   render() {
//     const { images, isLoading, error } = this.state;
//     const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

//     return (
//       <>
//         {error && <p>Whoops, something went wrong: {error.message}</p>}

//         <Searchbar onSubmit={this.onChangeQuery} />

//         <ImageGallery images={this.state.images} />

//         {isLoading && <Loader />}

//         {shouldRenderLoadMoreButton && (
//           <Button fetchImages={this.fetchImages} />
//         )}

//         <ToastContainer autoClose={3000} />
//       </>
//     );
//   }
// }
// export default App;
