import { Box, Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { useAnswer } from '../lib/quiz';
import { AnswerModal } from '../components/Modal';
import { createContext, useRef, useState } from 'react';
import Header from '../components/Header';
import { Quiz } from '../components/Quiz';
import { SelectAnswer } from '../components/SelectAnswer';
import { QuizButton } from '../components/Button';
import { answerList, min, questionList } from '../lib/const';
import { getUniqueRandomNumbers } from '../lib/util';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
type Spin = {
  isSpinning: boolean;
}
export const SpinContext = createContext<Spin>({isSpinning: false});

function Endless() {

  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  // 回答判定カスタムフック
  const { answer } = useAnswer();
  // モーダル状態変数
  const { isOpen, onClose, onOpen } = useDisclosure();

  // 正答数
  const [ correctAnswer, setCorrectAnswer ] = useState(0);
  // 現在の問題の正誤
  const [ isCorrect , setIsCorrect ] = useState(false);
  
  // 問題と選択肢の状態変数
  const [ nazo1, setNazo1 ] = useState<string>(questionList[0]);
  const [ choice1, setChoice1 ] = useState<string>(answerList[0]);
  const [ choice2, setChoice2 ] = useState<string>(answerList[1]);
  const [ choice3, setChoice3 ] = useState<string>(answerList[2]);
  // 同じ問題が出題されないように修正
  const [ quizArray, setQuizArray ] = useState<string[]>(questionList);
  const [ answerArray, setAnswerArray ] = useState<string[]>(answerList);
  
  // ルーレットの回転フラグと回転間隔
  const [ isSpinning, setSpinning ] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (!isSpinning) {
      setSpinning(true);

      const max = quizArray.length - 1;
      // 一定間隔でルーレットを回転させる
      intervalRef.current = setInterval(() => {
        const index1 = Math.floor(Math.random() * (max - min + 1)) + min;
        setNazo1(quizArray[index1]);
      }, 100);
    } else {
      // nazo1を除外した配列を作成
      const index = quizArray.indexOf(nazo1);
      const filteredArray: string[] = answerArray.filter((item) => item !== answerArray[index]);

      // ランダムに２つの要素を取得
      const getRandomElements = (arr: string[], count: number): string[] => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      };

      const result: string[] = getRandomElements(filteredArray, 2);
      result.push(answerArray[index]);
      const randomNumbers = getUniqueRandomNumbers(3);
      setChoice1(result[randomNumbers[0]]);
      setChoice2(result[randomNumbers[1]]);
      setChoice3(result[randomNumbers[2]]);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      clearInterval(intervalRef.current!);
      setSpinning(false);
    }
  };

  const handleAnswer = (no:number) => {
    const max = questionList.length - 1;
    const res = answer(no,nazo1,choice1,choice2,choice3);
    console.log(quizArray.length);
    console.log(answerArray.length);
    if(res.indexOf('正解') !== -1) {
      setCorrectAnswer((prevNum) => {return prevNum + 1});
      setIsCorrect(true);
      start();
    } else {
      setIsCorrect(false);
      onOpen();
    }
    if(correctAnswer === max) {
      onOpen();
    }
    // 同じ問題が出題されないように修正
    const index = quizArray.indexOf(nazo1);
    const filteredAnswerArray: string[] = answerArray.filter((item) => item !== answerArray[index]);
    const filteredQuizArray: string[] = quizArray.filter((item) => item !== nazo1);
    setQuizArray(filteredQuizArray);
    setAnswerArray(filteredAnswerArray);
  };

  const handleOnClose = () => {
    setCorrectAnswer(0);
    onClose();
  };

  return (
    <>
      <Flex direction="column" minH="100vh" bgGradient='linear(to-r, yellow.100, pink.300)'>
      <Box
        w={isSmallerThan600 ? '100%' : '70%'}
        display='flex'
        justifyContent='flex-start'
        marginX='auto'
        onClick={() => {window.location.href = '/'}}
        p={2}
      >
        <IoArrowBackCircleOutline size={isSmallerThan600 ? 32 : 64} color='green' />
      </Box>

      {/* ヘッダー */}
      <Header />
      <Box p={isSmallerThan600 ? 4 : 1} paddingTop={isSmallerThan600 ? '20px' : '80px'}>
      {/* 問題 */}
        <Quiz quiz={nazo1} />
      </Box>
      {/* 選択肢 */}
      <SelectAnswer answer1={choice1} answer2={choice2} answer3={choice3} onClick={handleAnswer} />

      <Flex
        display='flex' 
        direction='row'
        marginX='auto'
      >
        <Box 
          display='flex' 
          justifyContent='center'
          alignItems='center'
          p={4}
        >
          <SpinContext.Provider value={{isSpinning}}>
            {/* スタートボタン*/}
            <QuizButton title='曲名ルーレットスタート' start={start}/> 
          </SpinContext.Provider>
        </Box>

        {correctAnswer === 0 ? (
            <Box
              display='flex'
              justifyContent='center'
              p={isSmallerThan600 ? 4 : 8}
            />
          ):
          (
            <Box
              display='flex'
              justifyContent='center'
              p={isSmallerThan600 ? 4 : 8}
            >
              {isCorrect ? (
                <FaCheckCircle size={30} color='green' />
              ):
              (
                <FaTimesCircle size={30} color='red' />
              )}
            </Box>
          )
        }
      </Flex>

      {/* モーダル */}
      <AnswerModal isOpen={isOpen} onClose={handleOnClose} result={correctAnswer} />
    </Flex>
    </>
  )
}

export default Endless
