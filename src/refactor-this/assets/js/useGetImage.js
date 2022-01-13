import { useEffect, useState } from "react";

const useGetImage = (category, page) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = () => {
      setLoading(true);
      const firstPromise = fetch(`http://localhost:8888/images?category=${category}&page=${page}`);
      const secondPromise = fetch(`http://localhost:8888/images?category=${category}&page=${page+1}`);
      const thirdPromise = fetch(`http://localhost:8888/images?category=${category}&page=${page+2}`);
      const promises = [firstPromise, secondPromise, thirdPromise];

      Promise.all(promises)
      .then((values) => {
        setLoading(false);
          setImages([])
          values.map((res) => {
          return res.json().then((response) => {
            setImages((images) => [...images, ...response]);
            return response;
        })
        })
      })
        
    };
    fetchImages();
  }, [category, page])
  
  return {images, loading};
};

export default useGetImage;
