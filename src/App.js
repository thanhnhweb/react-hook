import { useRef, useEffect } from "react";
import Video from "./Video";
function App() {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef.current);
  });
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };

  /* ref truyen thang vao video vi co forward */

  return (
    <div>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
