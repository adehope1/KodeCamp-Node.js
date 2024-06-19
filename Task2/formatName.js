// A function that trim spaces and also change name of the first initials that are small case to upper case
function formatName(str) {
    // Trim the words to remove space from it
    const trimmedStr = str.trim("");

//   create a variable and spilt the words for easily capitalization
    const words = trimmedStr.split('  ');
        // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    // Join the capitalized words back into a string
    return capitalizedWords.join(' ');
  }
  console.log(formatName (" victor  red "));
  