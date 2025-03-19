import React, { useReducer } from "react";
import GlobalContext from './context/globalContext';
import reducer from './context/reducer';
import { Avatar } from 'primereact/avatar';
import { PGEMenubar, PGETag } from '@pge-fe-monorepo/pge-design-system/src/lib';
import { MainPage } from './components/MainPage';
import initialState from './context/initialState';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const start = (<div className="flex align-items-center "><img src="./pge logo square.png" alt="pge logo" height="40px" width="40px" />
    <p className="text-2xl text-center font-bold p-2 justify-center">2025 Distribution Planning</p>
  </div>);

  const end = (
    <div className="flex align-items-center gap-2">
      <PGETag value="Planning Deadline 9/9/2024" style={{ background: "rgba(255, 136, 132)", fontSize: "14px", padding: "0px 16px" }} />
      <i className="pi pi-question-circle p-2"><span className="px-2">Help</span></i>
      <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
    </div>
  );
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <PGEMenubar classes="bg-pge-blue text-white" start={start} end={end} />
        <MainPage />

      </div>
    </GlobalContext.Provider>
  );

}

export default App;
