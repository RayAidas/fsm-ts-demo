import FsmControl from "./fsmControl";

let fsmTest = new FsmControl();
fsmTest.start();
setInterval(() => {
  fsmTest.update();
}, 1000)