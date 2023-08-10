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
            direction='row'
            display='flex'
            justifyContent='center'
            paddingTop={32}
        >
            <Box
                display='flex'
                w='300px'
                h='150px'
                fontWeight='bold'
                fontSize={isSmallerThan600 ? '10px' : '20px'}
                alignItems='center'
                justifyContent='center'
            >
                早押しモードはこちら！
            </Box>
            <Box
                display='flex'
                w='300px'
                h='150px'
                fontWeight='bold'
                fontSize={isSmallerThan600 ? '10px' : '20px'}
                alignItems='center'
                justifyContent='center'
            >
                エンドレスモードはこちら！
            </Box>
        </Flex>

        <Flex 
            direction='row'
            display='flex'
            justifyContent='center'
        >
            <Box
                display='flex'
                w='300px' 
                p={4}
                justifyContent='center'
            >
                <GameStartButton title='早押しへ' uri='/quickanswer' />
            </Box>
            <Box 
                display='300px'
                w='300px'
                p={4}
                justifyContent='center'
            >
                <GameStartButton title='エンドレスモードへ！' uri='/endless' />
            </Box>
        </Flex>

        <Box
            display='flex'
            justifyContent='center'
            paddingTop={16}
        >
            <HelpButton onClick={handleHelpButton} />
        </Box>

        <HelpModal isOpen={isOpen} onClose={onClose} result='' />

        <Footer />
    </Flex>
  )
}

export default Top