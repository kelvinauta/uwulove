const insertVars = (text) => {
  console.log(text);
  if (text && typeof text == "string") {
    let newText = text.replace("${name}", "Lucifer");
    return newText;
  } else {
    return text;
  }
};
export default insertVars;
