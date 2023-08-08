import { answerList, questionList } from "./const";

export const useAnswer = (() => {

  const answer = (no: number,nazo1:string,choice1:string,choice2:string,choice3:string) : string => {
    switch(no){
      case 1:
        if(choice1 === answerList[questionList.indexOf(nazo1)]){
          return '🎉🎉🎉！！！正解！！！🎉🎉🎉';

        }else {
          return '😭😭😭　残念　😭😭😭';
        }

      case 2:
        if(choice2 === answerList[questionList.indexOf(nazo1)]){
          return '🎉🎉🎉！！！正解！！！🎉🎉🎉';
        }else {
          return '😭😭😭　残念　😭😭😭';
        }

      case 3:
        if(choice3 === answerList[questionList.indexOf(nazo1)]){
          return'🎉🎉🎉！！！正解！！！🎉🎉🎉';
        }else {
          return '😭😭😭　残念　😭😭😭';
        }
    }
    return ''
  }
    return {answer}
});