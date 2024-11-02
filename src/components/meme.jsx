import React from "react";
import "../meme.css";

export default function Form() {
  const [allMemesImages, setMemesData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMemesData(data));
  }, []);
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
  function handleChange(event) {
    const { name, value } = event.target;
    setImage((prevmeme) => ({
      ...prevmeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <form action="">
        <div className="input1">
          <label htmlFor=""> Top text</label>
          <input
            type="text "
            name="topText"
            value={memeImage.topText}
            onChange={handleChange}
          />
        </div>
        <div className="input2">
          <label htmlFor="">Bottom text</label>
          <input
            type="text"
            name="bottomText"
            value={memeImage.bottomText}
            onChange={handleChange}
          />
        </div>
      </form>
      <button onClick={getMeme}>Get a new meme image 🖼</button>
      <div className="meme-img">
        <img src={memeImage.randomImage} className="meme--image" />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </main>
  );
}
