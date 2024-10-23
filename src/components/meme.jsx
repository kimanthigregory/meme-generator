import "../meme.css";
import memes from "../memes";
export default function Form() {
  function getMeme() {
    const memeArray = memes.data.memes;
    const randomNum = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNum].url;
    console.log(url);
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
    </main>
  );
}
