import Board from "./Board";
import {useState} from 'react';
import Button from './Button';

function random(n) {
    return Math.ceil(Math.random() * n);
} // => 랜덤 숫자

function App() {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);
    const [otherNum, setOtherNum] = useState(1);
    const [otherSum, setOtherSum] = useState(0);
    const [otherGameHistory, setOtherGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextNum = random(6);
        const nextOtherNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum); // => 주사위를 던질 때 마다 값을 더함
        setGameHistory([
            ...gameHistory,
            nextNum
        ]); // => 나온 숫자 기록
        setOtherNum(nextOtherNum);
        setOtherSum(otherSum + nextOtherNum); // => 주사위를 던질 때 마다 값을 더함
        setOtherGameHistory([
            ...otherGameHistory,
            nextOtherNum
        ]);
    };
    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
        setOtherNum(1);
        setOtherSum(0);
        setOtherGameHistory([]);
    }

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="me" color="blue" num={num} sum={sum} gameHistory={gameHistory}/>
                <Board name="other" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory}/>
            </div>
        </div>
    );
}

export default App;