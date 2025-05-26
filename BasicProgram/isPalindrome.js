function isPalindrome(orgString) {
    return orgString === orgString.split("").reverse().join("");
  }