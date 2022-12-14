import { useEffect, useState } from "react";

const useImage = ({imageSource}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../Assets/Images/Cloud/${imageSource}`); // change relative path to suit your needs
        setImage(response.default);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [imageSource]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;