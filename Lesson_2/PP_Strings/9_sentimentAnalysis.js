function sentiment(arr) {
  let positibu = namida(positiveWords);
  let negatibu = namida(negativeWords);
  let posWords = positibu[1];
  let pos = positibu[0];
  let negWords = negatibu[1];
  let neg = negatibu[0];
  let difference = pos - neg;
  let msg1 = `There are ${pos} positive words in the text.\nPositive sentiment(s): ${posWords}`;
  let msg2 = `Ther are ${neg} negative words in the text.\nNegative sentiment(s): ${negWords}`;
  let sent = difference > 0 ? 'Positive' : difference < 0 ? 'Negative' : 'Neutral';
  let msg3 = `The sentiment of the text is ${sent}.`;
  let finalMessage = `${msg1}\n\n${msg2}\n\n${msg3}`;

  console.log(finalMessage);
}

function namida(wordsArr) {
   let words = [];
   let result =  wordsArr.reduce((acc, word) => {
    let regex = new RegExp(word, 'g');
    let matches = textExcerpt.toLowerCase().match(regex) || [];
    if (matches.length) words.push(word);
    return acc + matches.length;
 }, 0);

   return [result, words.join(', ')];
}

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

sentiment(textExcerpt);