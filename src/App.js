import { useState } from 'react';
import Button from './Button';
import Dice from './Dice'

function random(n) {
    return Math.ceil(Math.random() * n);
} // => 랜덤 숫자

function App() {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum); // => 주사위를 던질 때 마다 값을 더함
        setGameHistory([...gameHistory, nextNum]); // => 나온 숫자 기록
    };

    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
    }

    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <Dice color="blue" num={num}/>
            <h2>total</h2>
            <p>{sum}</p>
            <h2>history</h2>
            <p>{gameHistory.join(', ')}</p> 
            {/* join 메소드: 아규먼트로 전달한 값을 배열의 각 요소들 사이사이에 넣어서 결과적으로 하나의 문자열로 만들어주는 메소드 */}
        </div>
    );
}

export default App;