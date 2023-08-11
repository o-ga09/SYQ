import { Button, Text } from "@chakra-ui/react"
import { SpinContext } from "../pages/Endless";
import { useContext } from "react";
import { FaQuestionCircle } from 'react-icons/fa';

type Props = {
  title:string;
  start: () => void;
}
export const QuizButton= (props: Props) => {
  const title = props.title;
  const start = props.start;
  const { isSpinning } = useContext(SpinContext);

  return (
    <Button
    bgGradient='linear(to-r, yellow.200, pink.400)'
    onClick={() => start()}
    disabled={isSpinning}
    borderRadius='3xl'
    _hover={{ bg: 'pink.400', cursor: 'pointer' }}
    boxShadow='0px 5px 15px 0px rgba(98, 75, 64, 1)' 
  >
    {title}
  </Button>
  )
}

type StartProps = {
  title: string;
  uri: string;
}
export const GameStartButton = (props: StartProps) => {
  const title = props.title;
  const uri = props.uri;
  return (
    <Button
      w='200px'
      bgGradient='linear(to-r, yellow.200, pink.400)'
      onClick={() => {window.location.href = uri;}}
      borderRadius='3xl'
      _hover={{ bg: 'pink.400', cursor: 'pointer' }}
      boxShadow='0px 5px 15px 0px rgba(98, 75, 64, 1)'
    >
      {title}
    </Button>
  )
}

type HelpProps = {
  onClick: () => void;
}

export const HelpButton = (props: HelpProps) => {
  const title = '遊び方';
  const onClick = props.onClick;

  return (
    <Button
      w='200px'
      bg='green.300'
      onClick={onClick}
      borderRadius='3xl'
      _hover={{ bg: 'green.500', cursor: 'pointer' }}
      boxShadow='0px 5px 15px 0px rgba(98, 75, 64, 1)'
    >
      <FaQuestionCircle size={24} color='gray'/>
      <Text paddingLeft={4}>
        {title}
      </Text>
    </Button>
  )
}

type ReleaseProps = {
  title: string;
  uri:string;
};
export const ReleaseButton = (props: ReleaseProps) => {
  const title = props.title;
  const uri = props.uri;

  return (
    <Button
    bgGradient='linear(to-r, yellow.200, pink.400)'
    onClick={() => {window.location.href = uri}}
    borderRadius='3xl'
    _hover={{ bg: 'pink.400', cursor: 'pointer' }}
    boxShadow='0px 5px 15px 0px rgba(98, 75, 64, 1)' 
  >
    {title}
  </Button>
  )
}