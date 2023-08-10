import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box,Text,Link, Flex } from '@chakra-ui/react'


export const Footer = () => {
  return (
    <Box bgGradient='linear(to-r, yellow.100, pink.300)' p={4} color="black" mt="auto">
      <Flex direction='row'>
        <Text>
          &copy; copyright 2023 o-ga09
        </Text>
        <Link href='https://forms.gle/K2XZcDssKRhsYQCR8' isExternal marginLeft={16}>
          お問い合わせ／ご要望はこちら <ExternalLinkIcon mx='2px' />
        </Link>
        <Link href='/policy' isExternal marginLeft={16}>
          サイトポリシー <ExternalLinkIcon mx='2px' />
        </Link>
      </Flex>
    </Box>
  )
};