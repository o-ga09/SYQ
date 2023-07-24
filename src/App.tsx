import { Box, Button, Flex, Grid, GridItem } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { firstList } from './lib/const';


function App() {
  const title = '山本彩の曲名当てクイズ';

  const [ nazo1, setNazo1 ] = useState('');
  const [ isSpinning, setIsSpinning ] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = (() => {
    
    if (!isSpinning) {
      setIsSpinning(true);

      const max = firstList.length;
      const min = 0;

      // 一定間隔でルーレットを回転させる
      intervalRef.current = setInterval(() => {
        const index1 = Math.floor(Math.random() * (max - min + 1)) + min;
        setNazo1(firstList[index1]);
      }, 100);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      clearInterval(intervalRef.current!);
      setIsSpinning(false);
    }
  });

  return (
    <>
      <Flex direction="column" minH="100vh">
        <Box 
          h='150px' 
          bg="teal.200" 
          color="black" 
          fontWeight='bold' 
          fontSize='60px'
          textAlign='center'
        >
          {title}
        </Box>
        <Box flex="1">
          <Box 
            p={4}
          >
            <Box 
              w='500px' 
              h='300px' 
              bg='pink.200' 
              fontSize='100px' 
              textAlign='center' 
              borderRadius='3xl' 
              marginX='auto'
            >
              {nazo1}
            </Box>
          </Box>

          <Grid w='50%' templateColumns='repeat(3, 1fr)' gap={5} marginTop='80px' marginX='auto'>
            <GridItem w='100%' h='50px' bg='yellow.200' fontSize='10px' textAlign='center' borderRadius='full'>選択肢１</GridItem>
            <GridItem w='100%' h='50px' bg='yellow.200' fontSize='10px' textAlign='center' borderRadius='full'>選択肢２</GridItem>
            <GridItem w='100%' h='50px' bg='yellow.200' fontSize='10px' textAlign='center' borderRadius='full'>選択肢３</GridItem>
          </Grid>

          <Box
            display='flex'
            marginTop='90px'
            justifyContent='center'
          >
              <Button 
                bg='teal.200' 
                onClick={() => start()} 
                disabled={isSpinning}
                borderRadius='3xl'
              >    
                曲名ルーレットスタート</Button>
          </Box>
        </Box>

        <Box bg="teal.200" p={4} color="black" mt="auto">
          copyright 2023 o-ga09
        </Box>
    </Flex>
    </>
  )
}

export default App
