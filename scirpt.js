const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    window.open("https://www.google.com/search?tbm=isch&q=" + text);
  }

});

function stop() {
  recognition.stop()
}
function abort() {
  recognition.abort()
}

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
