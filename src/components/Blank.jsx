import React from 'react';
import './dashboard.css';

function Blank() {
  const wordList = ['apple', 'orange', 'tomato'];
  const [word, setWord] = React.useState('');
  const [blank, setBlank] = React.useState([]);
  const [inputWord, setInputWord] = React.useState();

  const setInput = (e, index) => {
    const newInput = inputWord;
    newInput[index] = e.target.value;
    setInputWord(newInput);
    if(inputWord.join('') === word) {
      alert('Correct!')
    }
  }

  const getRandomWord = () => {
    const newWord = wordList[ Math.floor(Math.random() * wordList.length)];

    const blanklist = [];
    let i = 0;
    while(blanklist.length < 3){
      i= Math.floor(Math.random() * 5);
      if (!blanklist.includes(i) && newWord[i] !== ' '){
        blanklist.push(i);
      }
    }
    
    const newInput = newWord.split('');
    for (let i=0; i< newInput.length; i++){
      if (blanklist.includes(i)){
        newInput[i]=' ';
      }
    }
    setWord(newWord);
    setBlank(blanklist);
    setInputWord(newInput);
  }

  React.useEffect(() => {
    getRandomWord();
  }, []);

  return (
    <div className='container'>
      <h1>Blank</h1>
      <div style={{ display:"flex", flexDirection:"row" }}>
        {word.split('').map((character, index) => (
        <div style={{ border:"1px solid", width:"50px", height:"50px", textAlign:"center", alignItems:"center" }}>
          {blank.includes(index) ? <input type='text' onChange={e => setInput(e, index)} maxLength={1} style={{ width:"50px", height:"50px"}}></input> : character}
        </div>
      ))}
      </div>
      <button onClick = {getRandomWord}>Reset</button>
    </div>
  )
}

export default Blank