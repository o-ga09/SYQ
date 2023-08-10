import { Box, useMediaQuery } from '@chakra-ui/react'
import '../style.css';

function Header() {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
    const title = 'SYQ';
    
  return (
    <Box
    className='header'
    display='flex'
    h='150px'
    bg="teal.200"
    color="black"
    fontWeight='bold'
    fontSize={isSmallerThan600 ? '70px' : '100px'}
    alignItems='center'
    justifyContent='center'
    bgGradient='linear(to-r, yellow.100, pink.300)'
  >
    {title}
  </Box>
  )
}

export default Header