import { searchWords } from "./Search";
import { grammer } from "../data/grammer";

export const answer = async (sentence) => {
  let messages = ["hey whats up.", "hi lalo", "hey lalo", "hello babe"];

  const fetchInfo = async (query) => {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${query}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
  };

  var speechHello = new SpeechSynthesisUtterance();

  if (searchWords(grammer.sayhello, sentence)) {
    speechHello.text = messages[Math.floor(Math.random() * messages.length)];
  } else if (searchWords(grammer.positive, sentence)) {
    speechHello.text = "oh god thanks";
  } else if (searchWords(grammer.negative, sentence)) {
    speechHello.text = "oh its so bad !";
  } else if (searchWords(grammer.wiki, sentence)) {
    const data = await fetchInfo(sentence);
    var body = data.query.search[0].snippet;
    var temp = document.createElement("div");
    temp.innerHTML = body;
    var sanitized = temp.textContent || temp.innerText;
    speechHello.text = sanitized;
  } else {
    speechHello.text = "I don't understand what you mean";
  }

  window.speechSynthesis.speak(speechHello);
};
