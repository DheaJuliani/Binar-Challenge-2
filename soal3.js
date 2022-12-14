function checkEmail(email) {
    if (typeof (email) === "undefined") return "Error: parameter undefined.";
    if (typeof (email) !== "string") return "Error: Invalid data type.";
  
    const EMAIL_REGEX = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
  
    if (EMAIL_REGEX.test(email)) {
      return "VALID";
    } else {
      return "INVALID";
    }
  }
  
  // TESTING
  console.log(checkEmail("dheajuliani@binar.co.id"));
  console.log(checkEmail("dheajuliani@binar.com"));
  console.log(checkEmail("dheajuliani@binar"));
  console.log(checkEmail(33));
  console.log(checkEmail());