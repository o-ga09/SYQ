import { Box, Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import '../style.css';
import { GameStartButton, HelpButton } from '../components/Button';
import { Footer } from '../components/Footer';
import { HelpModal } from '../components/Modal';

function Top() {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
    const { isOpen, onClose, onOpen } = useDisclosure();
    const title = 'SYQ';

    const handleHelpButton = () => {
        onOpen();
    };

  return (
    <Flex direction='column' minH='100vh' bgGradient='linear(to-r, yellow.100, pink.300)'>
        <Box
            className='header'
            display='flex'
            h='150px'
            color="black"
            fontWeight='bold'
            fontSize={isSmallerThan600 ? '70px' : '100px'}
            alignItems='center'
            justifyContent='center'
            bgGradient='linear(to-r, yellow.100, pink.300)'
        >
            {title}
        </Box>

        <Flex 
            direction={isSmallerThan600 ? 'column' : 'row'}
            display='flex'
            justifyContent='center'
            pt={isSmallerThan600 ? 16 : 64}
        >
            <Box
                display='flex'
                w='300px' 
                p={4}
                justifyContent='center'
                marginX={isSmallerThan600 ? 'auto' : ''}
            >
                <GameStartButton title='早押しモードへ！' uri='/quickanswer' />
            </Box>
            <Box 
                display='flex'
                w='300px'
                p={4}
                justifyContent='center'
                marginX={isSmallerThan600 ? 'auto' : ''}
            >
                <GameStartButton title='エンドレスモードへ！' uri='/endless' />
            </Box>
        </Flex>

        <Box
            display='flex'
            justifyContent='center'
            paddingTop={isSmallerThan600 ? 8 : 32}
        >
            <HelpButton onClick={handleHelpButton} />
        </Box>

        <HelpModal isOpen={isOpen} onClose={onClose} result='' />

        <Footer />
    </Flex>
  )
}

export default Top