import { Box, Button, Heading, ListItem, Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,Text, UnorderedList } from '@chakra-ui/react'

type Props = {
    isOpen:boolean,
    onClose: () => void,
    result:string
}
export const AnswerModal = (props:Props) => {
    const isOpen = props.isOpen;
    const onClose = props.onClose;
    const result = props.result;
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgGradient='linear(to-r, yellow.200, pink.300)'>
          <ModalHeader>結果</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {result}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button bg='white' borderColor='black' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export const HelpModal = (props:Props) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
return (
  <>
  <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgGradient='linear(to-r, yellow.200, pink.300)'>
        <ModalHeader>遊び方</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Heading fontSize={16} as='h3' textDecoration='underline'>早押しモード</Heading>
          <Text p={4}>
            <UnorderedList mt={4}>
              <ListItem>5秒以内に回答してください。</ListItem>
              <ListItem>１回あたりの出題数は１０問です。</ListItem>
              <ListItem>１０問の合計タイムで競います。</ListItem>
            </UnorderedList>
          </Text>
          <Heading fontSize={16} as='h3' textDecoration='underline'>エンドレスモード</Heading>
          <Text p={4}>
            <UnorderedList mt={4}>
              <ListItem>ルーレットで出た歌詞を間違えずに当てるモードです。</ListItem>
              <ListItem>間違えた時点で終了です。</ListItem>
              <ListItem>４８問全て間違えずに回答できればクリアです。</ListItem>
            </UnorderedList>
          </Text>

          <Box fontSize={32} fontWeight='bold'>Let's try</Box>
        </ModalBody>

        <ModalFooter>
          <Button bg='white' borderColor='black' mr={3} onClick={onClose}>
            閉じる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
)
}