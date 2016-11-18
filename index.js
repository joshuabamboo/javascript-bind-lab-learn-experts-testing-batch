const app = "I don't do much.";

const digitalClock = {
  time: Math.round((Date.now())/1000),
  startTicking: function () {
    setInterval(()=>this.time = this.time + 1, 1000);
  }
}

const censor = (word,sentence) => {
  let regex = new RegExp(word, 'g');
  return sentence.replace(regex, 'BLEEP');
}

const drugsCensor = censor.bind(null, 'drugs');
const violenceCensor = censor.bind(null, 'violence');