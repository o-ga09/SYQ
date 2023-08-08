import { Button, Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,Text } from '@chakra-ui/react'

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