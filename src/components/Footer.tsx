import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box,Text,Link, Flex, useMediaQuery } from '@chakra-ui/react'


export const Footer = () => {
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <Box bgGradient='linear(to-r, yellow.100, pink.300)' p={1} color="black" mt="auto">
      <Flex direction={isSmallerThan600 ? 'column' : 'row'}>
        <Link href='https://forms.gle/K2XZcDssKRhsYQCR8' isExternal marginLeft={isSmallerThan600 ? 0 : 8} p={1}>
          お問い合わせ／ご要望はこちら <ExternalLinkIcon mx='2px' />
        </Link>
        <Link href='/policy' isExternal marginLeft={isSmallerThan600 ? 0 : 8} p={1}>
          サイトポリシー <ExternalLinkIcon mx='2px' />
        </Link>
        <Text marginLeft={isSmallerThan600 ? 0 : 8} p={1}>
          &copy; copyright 2023 o-ga09
        </Text>
      </Flex>
    </Box>
  )
};