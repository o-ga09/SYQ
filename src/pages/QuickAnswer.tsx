import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {  useState } from 'react'
import { answerList, max, questionList } from '../lib/const';
import { getUniqueRandomNumbers } from '../lib/util';
import { SelectAnswer } from '../components/SelectAnswer';
import { useAnswer } from '../lib/quiz';
import { useTimer } from 'react-timer-hook';
import { QuizButton } from '../components/Button';

function QuickAnswer() {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds()+5);
  const { answer } = useAnswer();
  const {seconds,start,restart } = useTimer({ autoStart:false, expiryTimestamp });
  const [ isCorrect , setIsCorrect ] = useState(false);
 
  const [ nazo1, setNazo1 ] = useState<string>('---');
  const [ choice1, setChoice1 ] = useState<string>('---');
  const [ choice2, setChoice2 ] = useState<string>('---');
  const [ choice3, setChoice3 ] = useState<string>('---');

  const setQuestion = () => {
    const question = questionList[Math.floor(Math.random() * max)];
    // nazo1を除外した配列を作成
    const index = questionList.indexOf(question);
    const filteredArray: string[] = answerList.filter((item) => item !== answerList[index]);
  
    // ランダムに２つの要素を取得
    const getRandomElements = (arr: string[], count: number): string[] => {
      const shuffled = arr.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
  
    const result: string[] = getRandomElements(filteredArray, 2);
    result.push(answerList[index]);
    const randomNumbers = getUniqueRandomNumbers(3);
    setNazo1(question);
    setChoice1(result[randomNumbers[0]]);
    setChoice2(result[randomNumbers[1]]);
    setChoice3(result[randomNumbers[2]]);
  };

  const TimerStart = () => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 5);
    setQuestion();
    start();
  };

  const TimerRestart = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 5);
    setQuestion();
    restart(time);
  };
  const handleAnswer = (no:number) => {
    const res = answer(no,nazo1,choice1,choice2,choice3);
    if(res.indexOf('正解') === -1) {
      setIsCorrect(false);
    } else {
      setIsCorrect(true);
    }
    TimerRestart();
  };

  return (
      <Flex direction='column' minH='100vh' bgGradient='linear(to-r, yellow.100, pink.300)'>
        <Box textAlign="center" pt={20}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Text fontSize="xl">次の問題まで: {seconds}秒</Text>
            <Text mt={4} fontSize="xl" fontWeight="bold">
              {nazo1}
            </Text>
          </motion.div>
        </Box>

        <SelectAnswer answer1={choice1} answer2={choice2} answer3={choice3} onClick={handleAnswer} />

        <Text>{isCorrect ? '正解' : '不正解'}</Text>

        <QuizButton title='早押しスタート' start={TimerStart} />
      </Flex>
  );
}

export default QuickAnswer