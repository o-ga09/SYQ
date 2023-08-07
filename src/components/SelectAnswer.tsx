import { Grid, GridItem } from '@chakra-ui/react';

type Props = {
    answer1: string,
    answer2: string,
    answer3: string,
    onClick: (no:number) => void
}
export const SelectAnswer = (props:Props) => {
    const choice1 = props.answer1;
    const choice2 = props.answer2;
    const choice3 = props.answer3;
    const handleAnswer = props.onClick;
  return (
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
  )
};