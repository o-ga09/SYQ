import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {  useCallback, useEffect, useState } from 'react'
import { answerList, max, questionList } from '../lib/const';
import { getUniqueRandomNumbers } from '../lib/util';
import { SelectAnswer } from '../components/SelectAnswer';
import { useAnswer } from '../lib/quiz';
import { useTimer } from 'react-timer-hook';
import { QuizButton } from '../components/Button';
import { AnswerModal } from '../components/Modal';

function QuickAnswer() {
  // 回答判定カスタムフック
  const { answer } = useAnswer();
  // タイマーフック
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds()+5);
  const {seconds,start, pause, restart } = useTimer({ autoStart:false, expiryTimestamp });
  // モーダル状態変数
  const { isOpen, onClose, onOpen } = useDisclosure();
  
  // 現在の問題数
  const [ QuizNum, setQuizNum ] = useState(0);
  // 正答数
  const [ correctAnswer, setCorrectAnswer ] = useState(0);
  // 回答のトータル秒数
  const [ totaltime, setTotaltime ] = useState(0);
  // 現在の問題の正誤
  const [ isCorrect , setIsCorrect ] = useState(false);
  
  // 問題と選択肢の状態変数
  const [ nazo1, setNazo1 ] = useState<string>('スタートボタンを押してね！');
  const [ choice1, setChoice1 ] = useState<string>('---');
  const [ choice2, setChoice2 ] = useState<string>('---');
  const [ choice3, setChoice3 ] = useState<string>('---');

  // 問題と設定する
  const setQuestion = useCallback(() => {
    const question = questionList[Math.floor(Math.random() * max)];
    // お題を除外した配列を作成
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
  }, [setNazo1,setChoice1,setChoice2,setChoice3]);

  const TimerStart = () => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 5);
    setQuestion();
    setQuizNum(0);
    start();
  };

  const TimerRestart = useCallback(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 5);
    setQuestion();
    restart(time);
  }, [setQuestion, restart]);
  
  const handleAnswer = (no:number) => {
    const res = answer(no,nazo1,choice1,choice2,choice3);
    if(res.indexOf('正解') === -1) {
      setIsCorrect(false);
      setTotaltime((prevTime) => {return prevTime + 5});
    } else {
      setCorrectAnswer((prevNum) => {return prevNum + 1});
      setTotaltime((prevTime) => {return prevTime + seconds});
      setIsCorrect(true);
    }
    setQuizNum((prevNum) => {return prevNum + 1;});
    TimerRestart();
  };

  useEffect(() => {
    if (seconds === 0) {
      setTotaltime((prevTime) => {return prevTime + 5});
      setQuizNum((prevNum) => {return prevNum + 1;});
      TimerRestart();
    }
    if(QuizNum === 10) {
      pause();
      setQuizNum(0);
      setCorrectAnswer(0);
      setTotaltime(0);
      setNazo1('スタートボタンを押してね！');
      setChoice1('');
      setChoice2('');
      setChoice3('');
      onOpen();
    }
  }, [QuizNum, TimerRestart, onOpen, pause, seconds]);

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
        <Text>正解数：{QuizNum}</Text>
        <Text>回答秒数：{totaltime}</Text>
        <Text>正答数：{correctAnswer}</Text>

        <QuizButton title='早押しスタート' start={TimerStart} />

        <AnswerModal isOpen={isOpen} onClose={onClose} result='' />
      </Flex>
  );
}

export default QuickAnswer