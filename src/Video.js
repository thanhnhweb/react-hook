import video1 from "./videos/video1.mp4";
import { useRef, forwardRef, useImperativeHandle } from "react";
function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },

    pause() {
      videoRef.current.pause();
    },
  }));
  return (
    <video ref={videoRef} src={video1} width={500} height={500} controls />
  );
}
export default forwardRef(Video);
