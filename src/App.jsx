import  { useReducer } from 'react'
import { initialState } from './components/State'
import { reducer } from './components/reducer'

export default function App() {
  const [state , dispatch] = useReducer(reducer, initialState)
  const {red,green,blue} = state;
  console.log(red,green,blue);
  return (
    <>
      <div className="main">
        <div className="center">
          <div className="h-32 w-32" style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></div>
          <div className="mt-5 flex gap-5">
            {red}
            <div>
              <button className='border bg-red-500 p-2' onClick={() => dispatch({type: "INCREMENT_RED"})}>+</button>
              <button className='border bg-red-500 p-2' onClick={() => dispatch({type: "DECREMENT_RED"})}>-</button>
            </div>
            {green}
            <div>
              <button className='border bg-green-500 p-2' onClick={() => dispatch({type: "INCREMENT_GREEN"})}>+</button>
              <button className='border bg-green-500 p-2' onClick={() => dispatch({type: "DECREMENT_GREEN"})}>-</button>
            </div>
            {blue}
            <div>
              <button className='border bg-blue-500 p-2' onClick={() => dispatch({type: "INCREMENT_BLUE"})}>+</button>
              <button className='border bg-blue-500 p-2' onClick={() => dispatch({type: "DECREMENT_BLUE"})}>-</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
