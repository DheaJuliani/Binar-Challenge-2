function changeWord(selectedText, changedText, text) {
    if (typeof (text) !== "string") return;
  
    return text.replace(selectedText, changedText);
  }
  
  // TESTING
  let Kalimat = "Dhea membenci buah Manggis";
  console.log(changeWord("membenci", "menyukai", Kalimat));