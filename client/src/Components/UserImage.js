import React from 'react'
import useImage from "../hook/useImage";
function UserImage({imageSource}) {
  const { loading, error, image } = useImage(imageSource)
  return (
    <img
      src={image}
      alt="User image"
    />
  )
}

export default UserImage