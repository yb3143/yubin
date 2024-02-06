import Dice from './Dice'

function Board({ name, color, num, sum, gameHistory }) {

    return (
        <div>
            <h2>{name}</h2>
            <Dice color={color} num={num}/>
            <h2>total</h2>
            <p>{sum}</p>
            <h2>history</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>
    );
}

export default Board;