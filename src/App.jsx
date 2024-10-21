import audioData from "./data/drumAudio";
import "./style/App.scss";

function App() {
  const audio = new Audio();

  const drumMachine = (event) => {
    try {
      const drumKeyCode = audioData.find(
        (item) => item.key === event.key || item.key === event.target.innerText
      );
      displayCurrentDrum(drumKeyCode.title);
      playNote(drumKeyCode);
    } catch (error) {
      console.log(error);
    }
  };

  const displayCurrentDrum = (item) => {
    const display = document.getElementById("display");
    display.textContent = item ? item : "";
  };

  const playNote = (item) => {
    audio.src = item.src;
    audio.currentTime = 0;
    audio.play();
    console.log(audio);
  };

  const keyDown = (event) => {
    try {
      const currentKey = audioData.find(
        (item) => item.key === event.key.toUpperCase()
      );
      if (currentKey) {
        console.log(
          `key press: ${event.key.toUpperCase()} | key pad: ${currentKey.key}`
        );
        displayCurrentDrum(currentKey.title);
        playNote(currentKey);
      } else {
        console.log(`No matching key found "${event.key.toUpperCase()}"`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  document.addEventListener("keydown", keyDown);

  return (
    <main>
      <div id="drum-machine">
        {audioData.map((item, index) => (
          <div
            key={index}
            className="drum-pad"
            id={item.id}
            onClick={(e) => drumMachine(e)}
          >
            {item.key}
            <audio className="clip" id={item.key} src={item.src}></audio>
          </div>
        ))}
      </div>
      <div className="logo">
        FCC
        <i className="inner-logo fa fa-free-code-camp"></i>
      </div>
      <div id="pad">
        <div id="display">&nbsp;</div>
      </div>
    </main>
  );
}

export default App;
