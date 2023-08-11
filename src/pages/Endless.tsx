import { Box, Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { useAnswer } from '../lib/quiz';
import { AnswerModal } from '../components/Modal';
import { createContext, useRef, useState } from 'react';
import Header from '../components/Header';
import { Quiz } from '../components/Quiz';
import { SelectAnswer } from '../components/SelectAnswer';
import { QuizButton } from '../components/Button';
import { answerList, max, min, questionList } from '../lib/const';
import { getUniqueRandomNumbers } from '../lib/util';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
type Spin = {
  isSpinning: boolean;
}
export const SpinContext = createContext<Spin>({isSpinning: false});

function Endless() {

  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const { answer } = useAnswer();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [ result, setResult ] = useState('');
  
  const [ nazo1, setNazo1 ] = useState<string>(questionList[0]);
  const [ choice1, setChoice1 ] = useState<string>(answerList[0]);
  const [ choice2, setChoice2 ] = useState<string>(answerList[1]);
  const [ choice3, setChoice3 ] = useState<string>(answerList[2]);
  const [ isSpinning, setSpinning ] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


  const start = () => {
    if (!isSpinning) {
      setSpinning(true);

      // 一定間隔でルーレットを回転させる
      intervalRef.current = setInterval(() => {
        const index1 = Math.floor(Math.random() * (max - min + 1)) + min;
        setNazo1(questionList[index1]);
      }, 100);
    } else {
      // nazo1を除外した配列を作成
      const index = questionList.indexOf(nazo1);
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      clearInterval(intervalRef.current!);
      setSpinning(false);
    }
  };

  const handleAnswer = (no:number) => {
    const res = answer(no,nazo1,choice1,choice2,choice3);
    setResult(res);
    onOpen();
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

      <Box 
        display='flex' 
        marginTop={isSmallerThan600 ? '10px' : '45px'} 
        justifyContent='center'
        p={1}
      >
        <SpinContext.Provider value={{isSpinning}}>
          {/* スタートボタン*/}
          <QuizButton title='曲名ルーレットスタート' start={start}/> 
        </SpinContext.Provider>
      </Box>

      {/* モーダル */}
      <AnswerModal isOpen={isOpen} onClose={onClose} result={result} />
    </Flex>
    </>
  )
}

export default Endless
