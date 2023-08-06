import { Button } from "@chakra-ui/react"
import { Start } from "../lib/quiz"

type Props =  {
  isSpinning: boolean
}
export const QuizButton= (props:Props) => {
  const isSpinning = props.isSpinning;
  return (
    <Button
    bgGradient='linear(to-r, yellow.200, pink.400)'
    onClick={() => Start()}
    disabled={isSpinning}
    borderRadius='3xl'
    _hover={{ bg: 'pink.400', cursor: 'pointer' }}
  >
    曲名ルーレットスタート
  </Button>
  )
}
