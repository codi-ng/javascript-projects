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

 //* Check for any phonetic text property in data
  if (data[0].phonetic) {
    return (soundsLike.textContent = `It sounds like: ${data[0].phonetic}`);
  } else if (Array.isArray(data[0].phonetics)) {

    //* Find the text phonetic if the data response contains an array of phonetic information
    const phonetic = data[0].phonetics.find((p) => p.text);

    //* If the phonetic text is found
    if (phonetic) {
      return (soundsLike.textContent = `It sounds like: ${phonetic.text}`);
    }
}

//* If the phonetic text is not found
  return (soundsLike.textContent = `No phonetics found!`);
}

//* Fetch for the data and prepare to display the data.
async function getDefinition(word) {
  meaningParagraph.textContent = "";
  soundsLike.textContent = "";
  wordHeader.textContent = "GETTING WORD";

  try {
    //*Fetch for the definition and parse the JSON response
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      {
        mode: "cors",
      },
    );
    const data = await response.json();

    //* Check for bad request
    const { title } = data;
    if (title) {
      //* If bad request, send to catch block.
      throw Error(`${title}, please try again. Word you entered: ${word}`);
    }

    //*Refresh and reset headers for new information and send data to be displayed to display function
    wordHeader.textContent = "";
    soundsLike.textContent = "";
    console.log(data);
    displayMeaning(data);

  } catch (error) {
    //* Log the error to the console for debugging purposes and update the word header with the error message for the user.
    console.log(error);
    wordHeader.textContent = error;
    inputVal.value = null; //* clears the text field for ease of use in entering several values
  }
}

//* Checks for button click. If so, it will send the user input to the API caller function
submitBtn.addEventListener("click", () => {
  //* Send user input to API
  getDefinition(inputVal.value);
});

//* Checks for the user pressing the "Enter" key when the text input is on focus
inputVal.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getDefinition(inputVal.value);
  }
  return;
});
