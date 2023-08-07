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
    {nazo}
  </Box>
  )
};