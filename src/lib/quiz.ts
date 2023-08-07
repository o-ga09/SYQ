import { useRef, useState } from "react";
import { answerList, questionList } from "./const";
import { getUniqueRandomNumbers } from "./util";

export const useStart = (() => {
  const [ nazo1, setNazo1 ] = useState<string>(questionList[0]);
  const [ choice1, setChoice1 ] = useState<string>(answerList[0]);
  const [ choice2, setChoice2 ] = useState<string>(answerList[1]);
  const [ choice3, setChoice3 ] = useState<string>(answerList[2]);
  const [ , setIsSpinning ] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = (isSpinning:boolean) => {
    if (!isSpinning) {
        setIsSpinning(true);
  
        const max = questionList.length - 1;
        const min = 0;
  
        // 一定間隔でルーレットを回転させる
        intervalRef.current = setInterval(() => {
          const index1 = Math.floor(Math.random() * (max - min + 1)) + min;
          setNazo1(questionList[index1]);
        }, 100);
      } else {
        // nazo1を除外した配列を作成
        const index = questionList.indexOf(nazo1);
        const filteredArray: string[] = answerList.filter((item) => item !== answerList[index]);
  
        // ランダムに２つの要素を取得
        const getRandomElements = (arr: string[], count: number): string[] => {
          const shuffled = arr.sort(() => 0.5 - Math.random());
          return shuffled.slice(0, count);
        };
  
        const result: string[] = getRandomElements(filteredArray, 2);
        result.push(answerList[index]);
        const randomNumbers = getUniqueRandomNumbers(3);
        setChoice1(result[randomNumbers[0]]);
        setChoice2(result[randomNumbers[1]]);
        setChoice3(result[randomNumbers[2]]);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        clearInterval(intervalRef.current!);
        setIsSpinning(false);
      }
    };
    return { nazo1, choice1, choice2, choice3,start }
});

export const useAnswer = (() => {
  const { start } =  useStart();

  const answer = (no: number,nazo1:string,choice1:string,choice2:string,choice3:string) : string => {
    switch(no){
      case 1:
        if(choice1 === answerList[questionList.indexOf(nazo1)]){
          return '🎉🎉🎉！！！正解！！！🎉🎉🎉';

        }else {
          start(true);
          return '😭😭😭　残念　😭😭😭';
        }

      case 2:
        if(choice2 === answerList[questionList.indexOf(nazo1)]){
          return '🎉🎉🎉！！！正解！！！🎉🎉🎉';
        }else {
          start(true);
          return '😭😭😭　残念　😭😭😭';
        }

      case 3:
        if(choice3 === answerList[questionList.indexOf(nazo1)]){
          return'🎉🎉🎉！！！正解！！！🎉🎉🎉';
        }else {
          start(true);
          return '😭😭😭　残念　😭😭😭';
        }
    }
    return ''
  }
    return {answer}
});