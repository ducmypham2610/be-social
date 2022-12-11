import React from "react";
import useImage from "../hook/useImage";

function PostImage({ imageSource }) {
  const { loading, error, image } = useImage(imageSource)
  return (
    <img
      className="postImages"
      src={image}
      alt="Post image"
    />
  );
}

export default PostImage;
