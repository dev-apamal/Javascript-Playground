export default function Meme(props) {
  const defaultImage = "./src/assets/image.png";

  return (
    <div className="meme relative text-center my-4 px-1.5">
      <img
        src={props.src ? props.src : defaultImage}
        alt="Meme"
        className="w-full rounded"
      />
      <span
        className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 px-1.5 font-impact text-2xl uppercase text-white tracking-wide"
        style={{
          textShadow:
            "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000",
        }}
      >
        {props.topText ? props.topText : "Shut up"}
      </span>
      <span
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 px-1.5 font-impact text-2xl uppercase text-white tracking-wide"
        style={{
          textShadow:
            "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000",
        }}
      >
        {props.bottomText ? props.bottomText : "And Take The Money"}
      </span>
    </div>
  );
}
