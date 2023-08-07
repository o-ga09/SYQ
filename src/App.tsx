import { Box, Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { useAnswer, useStart } from './lib/quiz';
import { AnswerModal } from './components/Modal';
import { useState } from 'react';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Quiz } from './components/Quiz';
import { SelectAnswer } from './components/SelectAnswer';
import { QuizButton } from './components/Button';


function App() {

  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const { nazo1, choice1, choice2, choice3 } = useStart();
  const { answer } = useAnswer();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [ result, setResult ] = useState('');
  const [ isSpinning, setSpinning ] = useState(false);



  const handleAnswer = (no:number) => {
    const res = answer(no,nazo1,choice1,choice2,choice3);
    setResult(res);
    onOpen();
  };

  return (
    <>
      <Flex direction="column" minH="100vh">
      {/* ヘッダー */}
      <Header />
      <Box p='16px' paddingTop={isSmallerThan600 ? '40px' : '80px'}>
      {/* 問題 */}
        <Quiz quiz={nazo1} />
      </Box>
      {/* 選択肢 */}
      <SelectAnswer answer1={choice1} answer2={choice2} answer3={choice3} onClick={handleAnswer} />

      <Box 
        display='flex' 
        marginTop={isSmallerThan600 ? '20px' : '45px'} 
        justifyContent='center'
        p={4}
      >
        {/* スタートボタン*/}
        {/* <QuizButton isSpinning={}/>  */}
      </Box>

      {/* フッター */}
      <Footer />

      {/* モーダル */}
      <AnswerModal isOpen={isOpen} onClose={onClose} result={result} />
    </Flex>
    </>
  )
}

export default App
