import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'
import { answerList, questionList } from '../lib/const';
import { getUniqueRandomNumbers } from '../lib/util';
import { SelectAnswer } from '../components/SelectAnswer';
import { useAnswer } from '../lib/quiz';

function QuickAnswer() {
  const [countdown, setCountdown] = useState(5);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const { answer } = useAnswer();

  const [ choice1, setChoice1 ] = useState<string>(answerList[0]);
  const [ choice2, setChoice2 ] = useState<string>(answerList[1]);
  const [ choice3, setChoice3 ] = useState<string>(answerList[2]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 1 ? prevCountdown - 1 : 5));
    }, 1000);

    const nextProblemTimeout = setTimeout(() => {
      setCurrentProblemIndex(() => (Math.floor(Math.random() * questionList.length)));
      // nazo1を除外した配列を作成
      const index = questionList.indexOf(questionList[currentProblemIndex]);
      const filteredArray: string[] = answerList.filter((item) => item !== answerList[index]);
    
      // ランダムに２つの要素を取得
      const getRandomElements = (arr: string[], count: number): string[] => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      };
    
      const result: string[] = getRandomElements(filteredArray, 2);
      result.push(answerList[index]);
      const randomNumbers = getUniqueRandomNumbers(3);
      setChoice1(result[randomNumbers[0]]);
      setChoice2(result[randomNumbers[1]]);
      setChoice3(result[randomNumbers[2]]);
      setCountdown(5);
    }, 5000);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(nextProblemTimeout);
    };
  }, [currentProblemIndex]);

  const currentProblem = questionList[currentProblemIndex];
  const handleAnswer = (no:number) => {
    const res = answer(no,currentProblem,choice1,choice2,choice3);
    console.log(res);
  };

  return (
      <Flex direction='column' minH='100vh' bgGradient='linear(to-r, yellow.100, pink.300)'>
        <Box textAlign="center" pt={20}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Text fontSize="xl">次の問題まで: {countdown}秒</Text>
            <Text mt={4} fontSize="xl" fontWeight="bold">
              {currentProblem}
            </Text>
          </motion.div>
        </Box>

        <SelectAnswer answer1={choice1} answer2={choice2} answer3={choice3} onClick={handleAnswer} />
      </Flex>
  );
}

export default QuickAnswer