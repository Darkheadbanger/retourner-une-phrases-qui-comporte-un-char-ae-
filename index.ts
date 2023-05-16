// Import stylesheets
import './style.css';

// Write TypeScript code!

function recupererLaPhraseAvecLesBonsMot(
  words: string[],
  sentences: string
): string {
  let resultString: string = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].match(sentences)) {
      resultString += words[i] + ' ';
    }
  }

  return resultString.trim();
}

const words: string[] = [
  'Bonjour',
  'Je',
  "m'appelle",
  'David',
  'et',
  'je suis',
  'à',
  "l'aeroport",
  'aeodynamique',
];
const sentences: string = 'ae';

let result = recupererLaPhraseAvecLesBonsMot(words, sentences);
console.log(`result ${result}`);

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
