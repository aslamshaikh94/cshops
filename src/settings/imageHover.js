import React from 'react';
import ReactImageMagnify from "react-image-magnify";
const imageHover=(item)=> {
  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          isFluidWidth: true,
          src: item.thumbnail
        },
        largeImage: {
          width: 800,
          height: 800,
          src: item.original
        },
        lensStyle: { backgroundColor: "rgba(0,0,0,.6)" }
      }}
      {...{
        isHintEnabled: false,
        enlargedImageContainerDimensions: { width: "100%", height: "100%" },
        // shouldHideHintAfterFirstActivation: true,
        enlargedImagePosition: "over",
        enlargedImageContainerStyle: { Index: 1000 }
      }}
    />
  );
}	

export default imageHover