import React, { useReducer } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

import GlobalContext, {
  initialState, reducer
} from "./context/GlobalContext";
import GridLayout from './GridLayout/GridLayout';

export type StepperProps = {
  children?: JSX.Element | JSX.Element[]
};
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <DndProvider backend={HTML5Backend}>
        <GridLayout domElements={[]} />
      </DndProvider>
    </GlobalContext.Provider>
  )
}

export default App
