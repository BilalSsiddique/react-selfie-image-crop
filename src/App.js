
import './App.css';
import CaptureCard from './CaptureScreen';
import { useState } from 'react';
function App() {
  const [verify, setVerify] = useState(false);
  const [enroll, setenroll] = useState(false);
  const [check, setCheck] = useState(true);
  return (
    <main className="App" >
      {check &&
      <CaptureCard check= {check} setCheck={setCheck}/>}
      {enroll &&
      <CaptureCard enroll= {enroll} setEnroll={setenroll}/>}
      {verify &&
      <CaptureCard verify= {verify} setVerify={setVerify}/>}
    </main>
  );
}

export default App;
