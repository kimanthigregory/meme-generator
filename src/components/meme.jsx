import React from "react";
import "../meme.css";
import memes from "../memes";

export default function Form() {
  const [allMemesImages, getMemesData] = React.useState(memes);

  const [memeImage, setImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  function getMeme() {
    console.log(allMemesImages);
    const memeArray = allMemesImages.data.memes;
    const randomNum = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNum].url;
    console.log(url);
    setImage((prevmeme) => ({
      ...prevmeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <form action="">
        <div className="input1">
          <label htmlFor=""> Top text</label>
          <input type=" " />
        </div>
        <div className="input2">
          <label htmlFor="">Bottom text</label>
          <input type="text" />
        </div>
      </form>
      <button onClick={getMeme}>Get a new meme image 🖼</button>
      <div className="meme-img">
        <img src={memeImage.randomImage} alt="" />
      </div>
    </main>
  );
}
