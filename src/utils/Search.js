export const searchWords = (arr, sentence) => {
  return arr.some((substring) => sentence.includes(substring));
};
