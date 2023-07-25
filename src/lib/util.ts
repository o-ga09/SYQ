const shuffleArray = (array: number[]): number[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const getUniqueRandomNumbers = (count: number): number[] => {
  const numbers = [0, 1, 2];
  let shuffledNumbers = shuffleArray(numbers);
  
  // 要素数がcountより少ない場合はシャッフルし直す
  while (shuffledNumbers.length < count) {
    shuffledNumbers = shuffleArray(numbers);
  }
  
  return shuffledNumbers.slice(0, count);
};