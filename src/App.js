import "./styles.css";
import { useState } from "react";
export default function App() {
  var [userInput, setUserInput] = useState("The translation will appear here.");
  var emojiValue;
  function inputHandler(event) {
    if (emojis[event.target.value]) {
      emojiValue = emojis[event.target.value];
      setUserInput(emojiValue);
    } else {
      setUserInput("Emoji not found");
    }
  }

  const emojis = {
    "🤣": '"Laughing hysterically"',
    "😍": '"Loving this"',
    "😂": '"Laughing with tears"',
    "😅": '"Laughing Embarassed"',
    "😊": "Sinister smile",
    "👍": "Good job",
    "😁": "Grinning"
  };
  function printEmojiMeaning(event) {
    if (emojis[event.target.innerText]) {
      emojiValue = emojis[event.target.innerText];
      setUserInput(emojiValue);
    } else {
      setUserInput("Emoji not found");
    }
  }

  return (
    <div className="App">
      <h1>Emojipreter</h1>
      <input
        onChange={inputHandler}
        placeholder="Type an emoji to get it's meaning."
      />
      <p>{userInput}</p>
      <ul>
        {Object.keys(emojis).map((item, index) => {
          return (
            <li key={item} onClick={printEmojiMeaning}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
