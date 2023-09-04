export function shortenProductName(fullName) {
  const words = fullName.split(" ");

  const shortenedWords = words.map((word, index) => {
    if (index === 0) {
      return word;
    } else if (index === 1 && word === "Mark") {
      return "MK";
    } else if (
      (index === 2 && word === "I") ||
      (index === 2 && word === "II")
    ) {
      return word;
    } else {
      return;
    }
  });

  return shortenedWords.join(" ");
}
