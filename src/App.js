import React, { useEffect } from "react";
import useSpeechRecognition from "./hook/useSpeechRecognition";
import { answer } from "./utils/answer";

const App = () => {
  const { handleSpeech, sentence } = useSpeechRecognition();
  useEffect(() => {
    answer(sentence);
  }, [sentence]);
  return (
    <div className="ui container">
      <div className="section">
        <div className="ui message main">
          <div className="header">Lalo's Website Features</div>
          <ul className="list">
            <li>You can now have cover images on blog pages</li>
            <li>Drafts will now auto-save while writing</li>
          </ul>
        </div>
        <button className="ui button primary" onClick={handleSpeech}>
          Speech recognition
        </button>
        <p>Your Speech : {sentence}</p>
      </div>
    </div>
  );
};

export default App;
