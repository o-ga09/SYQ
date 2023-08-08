import { Button } from "@chakra-ui/react"
import { SpinContext } from "../App";
import { useContext } from "react";

type Props = {
  start: () => void;
}
export const QuizButton= (props: Props) => {
  const start = props.start;
  const { isSpinning } = useContext(SpinContext);

  return (
    <Button
    bgGradient='linear(to-r, yellow.200, pink.400)'
    onClick={() => start()}
    disabled={isSpinning}
    borderRadius='3xl'
    _hover={{ bg: 'pink.400', cursor: 'pointer' }}
  >
    曲名ルーレットスタート
  </Button>
  )
}
