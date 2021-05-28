/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function excuseGenerator() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    const maxAB = 3;
    const maxC = 2;
    const maxD = 4;
    const minAll = 0;

    const a = Math.floor(Math.random() * (maxAB - minAll + 1) + minAll);
    const b = Math.floor(Math.random() * (maxAB - minAll + 1) + minAll);
    const c = Math.floor(Math.random() * (maxC - minAll + 1) + minAll);
    const d = Math.floor(Math.random() * (maxD - minAll + 1) + minAll);

    document.getElementById(
      "excuse"
    ).innerHTML = `${who[a]} ${action[b]} ${what[c]} ${when[d]}`;
    //   who[a] + " " + action[b] + " " + what[c] + " " + when[d];
  }
  return excuseGenerator();
};
