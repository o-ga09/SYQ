import { Box, useMediaQuery } from '@chakra-ui/react';

type Props = {
    quiz: string
}
export const Quiz = (props:Props) => {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
    const nazo = props.quiz;
  return (
    <Box
    display='flex'
    w={isSmallerThan600 ? '100%' : '700px'}
    h={isSmallerThan600 ? '150px' : '300px'}
    bg='yellow.100'
    fontSize={isSmallerThan600 ? '20px' : '40px'}
    fontWeight='bold'
    textAlign='center'
    borderRadius='3xl'
    alignItems='center'
    justifyContent='center'
    marginX='auto'
    boxShadow='0px 5px 15px 0px rgba(98, 75, 64, 1)' 
  >
    {nazo}
  </Box>
  )
};