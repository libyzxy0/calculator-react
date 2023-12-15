import { useState } from 'react';
import Screen from './components/Screen.tsx';
import SpecialButton from './components/SpecialButtons.tsx';
import Numbers from './components/Numbers.tsx';
interface CalculatorState {
  input: string;
  result: string;
}

export default function App() {
  const [state, setState] = useState<CalculatorState>({
    input: '',
    result: '',
  });
const handleInput = (value: string): void => {
  setState((prevState) => ({
    ...prevState,
    input: prevState.result ? prevState.result + value : prevState.input + value,
    result: '',
  }));
};


  const handleClear = (): void => {
    setState({ input: '', result: '' });
  };

  const handleDelete = (): void => {
    setState((prevState) => ({
      ...prevState,
      input: prevState.input.slice(0, -1),
    }));
    setState((prevState) => ({
      ...prevState,
      result: prevState.result.slice(0, -1),
    }));
  };
const handleCalculate = (): void => {
  try {
    const calculatedResult = eval(state.input).toString();
    setState({
      input: calculatedResult,
      result: calculatedResult,
    });
  } catch (error) {
    setState({
      input: '',
      result: 'Error',
    });
  }
};

  

  
  return (
    <div className="h-[100vh] w-full bg-gray-800 flex justify-center md:grid md:place-items-center">
      <div className="w-[24rem] h-[40rem] bg-slate-600 shadow-lg rounded-lg mt-14 md:mt-0 md:w-[28rem] flex flex-col items-center">
        <Screen data={ state.result ? state.result : state.input } />
        
        <div className="w-full flex flex-col mt-5">
           <div className="w-full flex flex-row justify-center">
           
              <SpecialButton onClick={() => handleClear()} value="C" />
              <SpecialButton onClick={() => handleInput('/')} value="÷" />
              <SpecialButton onClick={() => handleInput('*')} value="×" />
              <SpecialButton onClick={() => handleDelete()} value="DEL" />
           </div>
           <div className="w-full flex flex-row justify-center mt-3">
              <Numbers onClick={() => handleInput('7')} value="7" />
              <Numbers onClick={() => handleInput('8')} value="8" />
              <Numbers onClick={() => handleInput('9')} value="9" />
              <SpecialButton onClick={() => handleInput('-')} value="-" />
           </div>
           <div className="w-full flex flex-row justify-center mt-3">
              <Numbers onClick={() => handleInput('4')} value="4" />
              <Numbers onClick={() => handleInput('5')} value="5" />
              <Numbers onClick={() => handleInput('6')} value="6" />
              <SpecialButton onClick={() => handleInput('+')} value="+" />
           </div>
           
           <div className="flex flex-row">
           <div className="flex flex-col">
           <div className="w-full flex flex-row justify-start ml-5 mt-3">
              <Numbers onClick={() => handleInput('1')} value="1" />
              <Numbers onClick={() => handleInput('2')} value="2" />
              <Numbers onClick={() => handleInput('3')} value="3" />
           </div>
           <div className="w-full flex flex-row justify-start mt-3 ml-5">
              <SpecialButton onClick={() => handleInput('%')} value="%" />
              <Numbers onClick={() => handleInput('0')} value="0" />
              <Numbers onClick={() => handleInput('.')} value="." />
           </div>
           </div>
           <button onClick={() => handleCalculate()} className="bg-emerald-400 rounded-xl h-[10rem] w-20 text-[3rem] text-gray-300 shadow-lg mx-1 top-[-3rem] mr-5 mt-5 md:mx-3">=</button>
          </div>
        </div>
      </div>
    </div>
  )
}