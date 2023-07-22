import { Box, Button, Grid, GridItem, Heading } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { firstList, secondList } from './lib/const';


function App() {

  const [ nazo1, setNazo1 ] = useState('');
  const [ nazo2, setNazo2 ] = useState('');
  const [ isSpinning, setIsSpinning ] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = (() => {
    
    if (!isSpinning) {
      setIsSpinning(true);

      const max = 99;
      const min = 0;

      // 一定間隔でルーレットを回転させる
      intervalRef.current = setInterval(() => {
        const index1 = Math.floor(Math.random() * (max - min + 1)) + min;
        const index2 = Math.floor(Math.random() * (max - min + 1)) + min
        setNazo1(firstList[index1]);
        setNazo2(secondList[index2]);
      }, 100);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      clearInterval(intervalRef.current!);
      setIsSpinning(false);
    }
  });

  return (
    <Box
      h='100vh'
      w='100%'
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>⭐️なぞなぞジェネレータ⭐️</Heading>
      <Box
        w='700px'
        h='500px'
      >
        <Grid templateColumns='repeat(2, 1fr)' gap={10}>
          <GridItem w='300px' h='500px' bg='pink.200' fontSize='100px' textAlign='center'>{nazo1}</GridItem>
          <GridItem w='300px' h='500px' bg='cyan.200' fontSize='100px' textAlign='center'>{nazo2}</GridItem>
        </Grid>
      </Box>

      <Box>
      <Button bg='orange.200' onClick={() => start()} disabled={isSpinning}>謎ジェネスタート</Button>
      </Box>
    </Box>
  )
}

export default App
