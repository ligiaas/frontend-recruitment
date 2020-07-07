import React, { useState } from 'react';
import Bag from '../src/container/Bag'
import BagButton from '../src/components/BagButton'
import Grid from '../src/container/Grid'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Grid setOpen={setOpen} />
      <BagButton open={open} onClick={setOpen} />
      <Bag open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
