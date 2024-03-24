// import video from '../../public/image/videotest.mp4';

export default function Home() {
  return (
    <div className="relative w-full">
      <video
        width="100%"
        height="240"
        controls
        preload="none"
        autoPlay
        loop
        muted
        className="blur-sm"
      >
        <source src="/image/videotest.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-textClr text-4xl font-bold">Your Text Here</h1>

        <img
          src="your-image.jpg"
          alt="Your Image"
          className="w-32 h-32 rounded-full mt-4"
        />
      </div>
    </div>
  );
}
