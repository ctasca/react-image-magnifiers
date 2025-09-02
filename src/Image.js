import React from "react";
import utils from "./utils";

function normalizeSrcValue(value) {
  if (typeof value === "string" || value == null) return value;
  // Support objects like { src: string, width, height } from bundlers (e.g., Next.js/webpack asset modules)
  if (typeof value === "object" && typeof value.src === "string") return value.src;
  return value;
}

const Image = React.forwardRef(function(
  { onImageLoad = utils.noop, onLoadRefresh = utils.noop, src, alt, ...otherProps },
  ref
) {
  const [imageIdx, setImageIdx] = React.useState(0);
  const imageErrorRef = React.useRef(false);

  const srcArray = Array.isArray(src) ? src : [src];
  const imageArr = srcArray.map(normalizeSrcValue);

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
        if (imageIdx < imageArr.length - 1) {
          imageErrorRef.current = true;
          setImageIdx(idx => idx + 1);
        }
      }}
      {...otherProps}
    />
  );
});


export default Image;
