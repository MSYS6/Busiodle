import GuessRow from "./GuessRow"
import GuessInput from "./GuessInput"
//import Wordlist from "./Wordlist"
import React from "react";
import {Guess} from "../models/Guess";
import {wordList} from "./Wordlist";

const Game: React.VFC = () => { //VFCはFunction Componentの型
    const answer = "hello"//正解の文字配列
    const [guesses, setGuesses] = React.useState<Guess[]>([]);
    const [isCleared, setIsCleared] = React.useState(false);

    const maxTrialCount = 6;
    const trialsLeft = () => {
        return maxTrialCount - guesses.length
    }

    const onGuess = (input: string) => {
        if (trialsLeft() <= 0) return;
        if (input.length !== 5){
			alert("Please Input 5 Words.");
		return
		}else if(wordList.includes(input) === false){
			alert("This Word does not exist.");
			return
		}

        if (isCleared) return;

        if (input === answer) {
            setIsCleared(true)
        }

        setGuesses([...guesses, new Guess(input)]);
    };

    return (
        <div id="game">
            {guesses.map((guess, i) => {
                console.log(guess)
                return <GuessRow
                    key={i}
                    guess={guess}
                    answer={answer}
                />
            })}
            {[...Array(maxTrialCount-guesses.length)].map((_,i) => {
                return <GuessRow
                    key={i}
                    guess={new Guess("     ")}
                    answer={answer}
                />
            })
            }
            <GuessInput onGuess={onGuess} />{/* 入力部分 */}
        </div>
    );
}

export default Game;
