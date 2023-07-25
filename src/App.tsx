import { Text,Box, Button, Flex, Grid, GridItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { answerList, questionList } from './lib/const';
import { getUniqueRandomNumbers } from './lib/util';


function App() {
  const title = '山本彩の曲名当てクイズ';

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  const [ nazo1, setNazo1 ] = useState('');
  const [ choice1, setChoice1 ] = useState('');
  const [ choice2, setChoice2 ] = useState('');
  const [ choice3, setChoice3 ] = useState('');
  const [ result, setResult ] = useState('');
  const [ isSpinning, setIsSpinning ] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = (() => {
    
    if (!isSpinning) {
      setIsSpinning(true);

      const max = questionList.length;
      const min = 0;

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
      setIsSpinning(false);
    }
  });

  const answer = ((no: number) => {
    switch(no){
      case 1:
        if(choice1 === answerList[questionList.indexOf(nazo1)]){
          setResult('🎉🎉🎉！！！正解！！！🎉🎉🎉');
          onOpen();

        }else {
          setResult('😭😭😭　残念　😭😭😭');
          onOpen();
          start();
        }
        break;
      case 2:
        if(choice2 === answerList[questionList.indexOf(nazo1)]){
          setResult('🎉🎉🎉！！！正解！！！🎉🎉🎉');
          onOpen();
        }else {
          setResult('😭😭😭　残念　😭😭😭');
          onOpen();
          start();
        }
        break;
      case 3:
        if(choice3 === answerList[questionList.indexOf(nazo1)]){
          setResult('🎉🎉🎉！！！正解！！！🎉🎉🎉');
          onOpen();
        }else {
          setResult('😭😭😭　残念　😭😭😭');
          onOpen();
          start();
        }
        break;
    }
  });

  return (
    <>
      <Flex direction="column" minH="100vh">
      <Box
        display='flex'
        h='150px'
        bg="teal.200"
        color="black"
        fontWeight='bold'
        fontSize={isSmallerThan600 ? '30px' : '40px'}
        alignItems='center'
        justifyContent='center'
        bgGradient='linear(to-r, yellow.200, pink.500)'
      >
        {title}
      </Box>
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
          onClick={() => answer(1)}
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
          onClick={() => answer(2)}
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
          onClick={() => answer(3)}
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
        <Button
          bgGradient='linear(to-r, yellow.200, pink.400)'
          onClick={() => start()}
          disabled={isSpinning}
          borderRadius='3xl'
          _hover={{ bg: 'pink.400', cursor: 'pointer' }}
        >
          曲名ルーレットスタート
        </Button>
      </Box>

      <Box bgGradient='linear(to-r, pink.500, yellow.200)' p={4} color="black" mt="auto">
        copyright 2023 o-ga09
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgGradient='linear(to-r, yellow.200, pink.300)'>
          <ModalHeader>結果</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {result}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button bg='white' borderColor='black' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
    </>
  )
}

export default App
