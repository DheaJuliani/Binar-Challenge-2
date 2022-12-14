function isValidPassword(pass) {
    if (typeof (pass) === "undefined") return "Error: parameter undefined.";
    if (typeof (pass) !== "string") return "Error: Invalid data type.";
  
    const LOWER_REGEX = /[a-z]/g;
    const UPPER_REGEX = /[A-Z]/g;
    const DIGIT_REGEX = /\d/g;
  
    return (
      pass.length > 8 &&
      LOWER_REGEX.test(pass) &&
      UPPER_REGEX.test(pass) &&
      DIGIT_REGEX.test(pass)
    );
  }
  
  // TESTING
  console.log(isValidPassword("Dheaa2022"));
  console.log(isValidPassword("dhea2022"));
  console.log(isValidPassword("@dhea"));
  console.log(isValidPassword("dhea22"));
  console.log(isValidPassword(0));
  console.log(isValidPassword());