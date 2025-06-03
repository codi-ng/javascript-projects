import readlineSync from "readline-sync";
import chalk from "chalk";

const language = {
  languages: [],
  set addLang(lang) {
    this.languages.push(lang);
  },
  get outputLangs() {
    return `${this.languages}`;
  },
  get removedLang() {
    return this.languages.pop();
  },
};

let usrLang;
while (usrLang != "-1") {
  usrLang = readlineSync.question(
    chalk.greenBright.bold(
      "Hey, cornball! Add a language to flex! (enter -1 to exit this menu) -> ",
    ),
  );
  if (usrLang === "-1") break;
  language.addLang = usrLang;
  console.log(language.outputLangs);
}

let moreOpts;

while (moreOpts != "-1") {
  moreOpts = readlineSync.question(
    chalk.yellowBright.bold("Remove a language? (enter -1 for 'no') -> "),
  );
  if (moreOpts) {
    language.languages[language.languages.length - 1] === undefined
      ? console.log(`No more languages to remove!`)
      : console.log(
          `Removed ${language.languages[language.languages.length - 1]}`,
        );
    language.removedLang;
  }
}
