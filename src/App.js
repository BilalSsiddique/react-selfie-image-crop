
import './App.css';
import CaptureCard from './CaptureScreen';
import { useState } from 'react';
import { Success } from './Success';
function App() {
  const [verify, setVerify] = useState(false);
  const [enroll, setenroll] = useState(false);
  const [check, setCheck] = useState(true);
  return (
    <main className="App" >
      {/* {check &&
      <CaptureCard check= {check} setCheck={setCheck}/>}
      {enroll &&
      <CaptureCard enroll= {enroll} setEnroll={setenroll}/>}
      {verify &&
      <CaptureCard verify= {verify} setVerify={setVerify}/>} */}
      <Success />
    </main>
  );
}

export default App;
