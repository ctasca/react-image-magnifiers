import React from "react";
import utils from "./utils";

const Image = React.forwardRef(function(
  { onImageLoad = utils.noop, onLoadRefresh = utils.noop, src, alt, ...otherProps },
  ref
) {
  const [imageIdx, setImageIdx] = React.useState(0);
  const imageErrorRef = React.useRef(false);
  const imageArr = src && src.constructor === Array ? src : [src];

  return (
    <img
      ref={ref}
      src={imageArr[imageIdx]}
      alt={alt}
      onLoad={e => {
        onImageLoad(e);

        if (imageErrorRef.current) {
          onLoadRefresh();
        }
      }}
      onError={e => {
        if (imageIdx < imageArr.length) {
          imageErrorRef.current = true;
          setImageIdx(idx => idx + 1);
        }
      }}
      {...otherProps}
    />
  );
});


export default Image;
