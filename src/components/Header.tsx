import { Box, useMediaQuery } from '@chakra-ui/react'

function Header() {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
    const title = '山本彩の曲名当てクイズ';
    
  return (
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
  )
}

export default Header