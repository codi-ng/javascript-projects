const wordHeader = document.getElementById("word-header");
const meaningParagraph = document.getElementById("word-meaning");
const soundsLike = document.getElementById("sounds-like");
const submitBtn = document.getElementById("submit-wrd");
const inputVal = document.getElementById("definition-input");


//* When information is received and validated. it will be displayed
function displayMeaning(data) {
  wordHeader.textContent = `The word you entered: ${data[0].word.toUpperCase()}`;
  meaningParagraph.textContent = `Meaning: ${data[0].meanings[0].definitions[0].definition}`;
  inputVal.value = null;

  if (data[0].phonetic)
    soundsLike.textContent = `It sounds like: ${data[0].phonetic}`;
  else if (!data.phonetic || !Array.isArray(data[0].phonetics)) {
    soundsLike.textContent = "No phonetics found!";
  } else if (Array.isArray(data[0].phonetics)) {
    const phonetic = data[0].phonetics.find((p) => p.text);
    soundsLike.textContent = `It sounds like: ${phonetic.text}`;
  }
}


//* Checks for button click. If so, it will fetch for the data
submitBtn.addEventListener("click", () => {
  meaningParagraph.textContent = "";
  soundsLike.textContent = "";
  wordHeader.textContent = "GETTING WORD";

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputVal.value}`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((response) => {
      if (Array.isArray(response)) {
        wordHeader.textContent = "";
        soundsLike.textContent = "";
        console.log(response);
        displayMeaning(response);
      } else {
        const { title } = response;
        wordHeader.textContent = `${title}. Please try again. Word you entered: ${inputVal.value}`;
        inputVal.value = null; //* clears the text field for ease of use in entering several values
      }
    });
});


//* Checks for the user pressing the "Enter" key when the text input is on focus
inputVal.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    meaningParagraph.textContent = "";
    soundsLike.textContent = "";
    wordHeader.textContent = "GETTING WORD";

    //* Get the word definition
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputVal.value}`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => {
        if (Array.isArray(response)) {
          wordHeader.textContent = ""; //* Reset both word header and soundslike text holders for new information
          soundsLike.textContent = ""; 
          console.log(response);
          displayMeaning(response);
        } else { //* check whether the user's word returned a a 404 (bad request) which means the word they inputted is invalid
          const { title } = response;
          wordHeader.textContent = `${title}. Please try again, the word you entered is invalid. Word you entered: ${inputVal.value}`;
          inputVal.value = null; //* clears the text field for ease of use in entering several values
        }
      });
  }
  return;
});
