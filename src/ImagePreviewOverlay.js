import React from "react";
import styles from "./styles";

const ImagePreviewOverlay = ({
  previewWidth,
  previewHeight,
  previewPosLeft,
  previewPosRight,
  previewPosTop,
  previewPosBottom,
  imageWidth,
  imageHeight,
  overlayOpacity = 0.5,
  overlayBoxOpacity = 0.8,
  active,
  transitionSpeed = 0.4,
  overlayBackgroundColor = "#000",
  overlayBoxColor = "#fff",
  overlayBoxImage = "",
  overlayBoxImageSize = ""
}) => {
  const opacity = active ? overlayOpacity : 0;
  const boxOpacity = active ? overlayBoxOpacity : 0;

  return (
    <React.Fragment>
      <div
        style={styles.getOverlayCenterStyle(
          previewWidth,
          previewHeight,
          previewPosLeft,
          previewPosTop,
          boxOpacity,
          transitionSpeed,
          overlayBoxColor,
          overlayBoxImage,
          overlayBoxImageSize
        )}
      ></div>
      <div
        style={styles.getOverlayTopStyle(
          imageWidth,
          previewPosTop,
          opacity,
          transitionSpeed,
          overlayBackgroundColor
        )}
      ></div>
      <div
        style={styles.getOverlayLeftStyle(
          previewPosLeft,
          previewHeight,
          previewPosTop,
          opacity,
          transitionSpeed,
          overlayBackgroundColor
        )}
      ></div>
      <div
        style={styles.getOverlayRightStyle(
          imageWidth - previewPosRight,
          previewHeight,
          previewPosTop,
          opacity,
          transitionSpeed,
          overlayBackgroundColor
        )}
      ></div>
      <div
        style={styles.getOverlayBottomStyle(
          imageWidth,
          imageHeight - previewPosBottom,
          previewPosBottom,
          opacity,
          transitionSpeed,
          overlayBackgroundColor
        )}
      ></div>
    </React.Fragment>
  );
};


export default ImagePreviewOverlay;
