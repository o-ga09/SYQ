import { Button } from "@chakra-ui/react"
import { useStart } from "../lib/quiz"
import { useState } from "react";

export const QuizButton= () => {
  const { start } = useStart();
  const [ isSpinning, setSpinning ] = useState(false);

  const handleStart = () => {
    setSpinning(!isSpinning);
    start(isSpinning);
  };

  return (
    <Button
    bgGradient='linear(to-r, yellow.200, pink.400)'
    onClick={() => handleStart()}
    disabled={isSpinning}
    borderRadius='3xl'
    _hover={{ bg: 'pink.400', cursor: 'pointer' }}
  >
    曲名ルーレットスタート
  </Button>
  )
}
