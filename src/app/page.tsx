// import video from '../../public/image/videotest.mp4';
import './globals.css';
export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <video
        controls
        preload="none"
        autoPlay
        loop
        muted
        className="blur-sm w-full"
      >
        <source src="/image/videotest.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      </video>

      <div className="w-full absolute inset-0 text-basetextClr bottom-0 left-44 top-32 ml-52 flex flex-col">
        <span className="text-6xl">Htet Htet Wai</span>

        <span className="mt-20 text-boxBClr">{`<h1>`}</span>

        <span className="mt-5 text-4xl">This is me also known as grace.</span>
        <span className="text-boxBClr text-4xl mt-5">
          I have <span className="text-basetextClr">BackEnd and</span>
        </span>

        <span className="text-basetextClr text-4xl mt-5">
          FrontEnd<span className="text-boxBClr">Experiences</span>
        </span>

        <span className="mt-6 text-boxBClr">{`<h1>`}</span>

        <span className="mt-8 text-boxBClr">{`<p>`}</span>

        <span className="mt-7 text-xl">
          I help business grow by crafting amazing web experiences. If
        </span>
        <span className="text-xl">
          you’re looking for a developer that likes to get stuff done,
        </span>
        <div className="mt-5 bg-textClr w-36 flex justify-center rounded-full p-3">
          <button className="text-buttontxtClr">View my CV</button>
        </div>
      </div>

      <div>
        <div className="absolute bottom-0 right-60 top-24 mr-80 z-0">
          <div className="bg-boxAClr w-96 h-[50%] flex justify-center"></div>
        </div>
        <div className="absolute bottom-0 right-20 top-64 mr-56 mt-40 z-0">
          <div className="bg-boxBClr w-96 h-[51%] flex justify-center"></div>
        </div>

        <div className="w-full absolute z-10 inset-0 bottom-0 left-80 ml-72 pl-96">
          <img
            src="/image/me.jpg"
            alt="Your Image"
            className="lg:w-[40%] lg:h-[60%] w-32 h-32 mt-8 lg:mt-24 p-2 m-5 "
          />
        </div>
      </div>

      {/* <div className="absolute lg:inset-52 inset-0 flex justify-end"> */}
      {/* <img
          src="/image/me.jpg"
          alt="Your Image"
          className="lg:w-[30%] lg:h-[70%] w-32 h-32 mt-8 lg:mt-0 p-2 m-5"
        /> */}
      {/* </div> */}
      <div>Hello</div>
    </div>
  );
}
