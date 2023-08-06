import { Box, Flex, Grid, GridItem, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { useAnswer, useStart } from './lib/quiz';
import { AnswerModal } from './components/Modal';
import { useState } from 'react';


function App() {

  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  const { nazo1, choice1, choice2, choice3 } = useStart();
  const { answer } = useAnswer();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [ result, setResult ] = useState('');

  const handleAnswer = (no:number) => {
    const res = answer(no,nazo1,choice1,choice2,choice3);
    setResult(res);
    onOpen();
  };

  return (
    <>
      <Flex direction="column" minH="100vh">
      {/* ヘッダー */}
      <Box p='16px' paddingTop={isSmallerThan600 ? '40px' : '80px'}>
        <Box
          display='flex'
          w={isSmallerThan600 ? '100%' : '700px'}
          h={isSmallerThan600 ? '200px' : '300px'}
          bg='yellow.200'
          fontSize={isSmallerThan600 ? '20px' : '40px'}
          fontWeight='bold'
          textAlign='center'
          borderRadius='3xl'
          alignItems='center'
          justifyContent='center'
          marginX='auto'
        >
          {nazo1}
        </Box>
      </Box>

      <Grid
        w='70%'
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={5}
        marginTop='20px'
        marginX='auto'
        p={4}
      >
        <GridItem
          w='100%'
          h='50px'
          bg='yellow.200'
          fontSize='20px'
          fontWeight='bold'
          textAlign='center'
          borderRadius='full'
          _hover={{ bg: 'yellow.400', cursor: 'pointer' }}
          onClick={() => handleAnswer(1)}
        >
          {choice1}
        </GridItem>
        <GridItem
          w='100%'
          h='50px'
          bg='yellow.200'
          fontSize='20px'
          fontWeight='bold'
          textAlign='center'
          borderRadius='full'
          _hover={{ bg: 'yellow.400', cursor: 'pointer' }}
          onClick={() => handleAnswer(2)}
        >
          {choice2}
        </GridItem>
        <GridItem
          w='100%'
          h='50px'
          bg='yellow.200'
          fontSize='20px'
          fontWeight='bold'
          textAlign='center'
          borderRadius='full'
          _hover={{ bg: 'yellow.400', cursor: 'pointer' }}
          onClick={() => handleAnswer(3)}
        >
          {choice3}
        </GridItem>
      </Grid>

      <Box 
        display='flex' 
        marginTop={isSmallerThan600 ? '20px' : '45px'} 
        justifyContent='center'
        p={4}
      >
        {/* スタートボタン */}
      </Box>

      {/* フッター */}

      {/* モーダル */}
      <AnswerModal isOpen={isOpen} onClose={onClose} result={result} />
    </Flex>
    </>
  )
}

export default App
