import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "../App/App.module.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import fetchImages from "../images-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(999);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [loadMore, setLoadMore] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleSearch = async (newQuery) => {
    setImages([]);
    setPage(1);
    if (!newQuery) {
      toast("Please, add search query!", { position: "top-right" });
      setLoadMore(false);
      return;
    }
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImageModal = (modalDataFromImageCard) => {
    setImageModal(!imageModal);
    setModalData(modalDataFromImageCard);
  };

  const handleModalClose = () => {
    setImageModal(!imageModal);
  };

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function getImages() {
      try {
        setLoader(true);
        setLoadMore(false);
        setError(false);
        const data = await fetchImages(query, page);
        setTotalPages(data.total_pages);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setLoadMore(totalPages && totalPages !== page);
        if (page >= totalPages) {
          toast("There is no more images to show!", { position: "top-right" });
        }
      } catch (error) {
        setError(true);
        toast.error(error.message, { position: "top-right" });
      } finally {
        setLoader(false);
      }
    }
    getImages(query);
  }, [page, query]);

  return (
    <div className={css.imageSearchApp}>
      <div className={css.container}>
        <h1 className={css.mainTitle}>Images Gallery</h1>
        <SearchBar onSearch={handleSearch} />
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={handleImageModal} />
        )}
        {error && (
          <ErrorMessage message="Oops! There is something wrong, please reload the page." />
        )}
        <div className={css.imageSearchApp__loaderWrap}>
          {loader && <Loader />}
        </div>
        <div className={css.imageSearchApp__buttonLoadMoreWrap}>
          {loadMore && <LoadMoreButton onClick={handleLoadMore} />}
        </div>
        <ImageModal
          modalData={modalData}
          isModalOpen={imageModal}
          onModalClose={handleModalClose}
        />
        <Toaster />
      </div>
    </div>
  );
}
