// a function that will add a sepertor after every 3 digit that are not decimal
function formatThousand(number) {
    // Convert the digits to a string
    const numString = number.toLocaleString('en-US');
  
    // Split the string into integer
    const [integerPart = ""] = numString.split(".");
  
    // Reverse the integer part for easier processing
    const reversedInteger = integerPart.split("").reverse().join("");
  
    // Add commas every 3 digits using slice and join
    const formattedInteger = reversedInteger.replace( "$1,");
  
    // Reverse the formatted integer back to normal order
    const finalInteger = formattedInteger.split("").reverse().join("");
  
    // Combine formatted integer and decimal part (if any)
    return finalInteger ;
  }
  
  console.log(formatThousand(100000)); 
  
  