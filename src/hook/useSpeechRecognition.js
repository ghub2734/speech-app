import React, { useEffect, useState } from "react";

const useSpeechRecognition = () => {
  let [sentence, setSentence] = useState("");

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    var recognition = new SpeechRecognition();
    window.recognition = recognition;

    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
  }, []);

  const handleSpeech = () => {
    const { recognition } = window;

    recognition.start();
    console.log("Ready to receive command.");

    recognition.onresult = (e) => {
      let transcript = e.results[0][0].transcript;
      setSentence(transcript);
    };
  };

  return { handleSpeech, sentence };
};

export default useSpeechRecognition;
