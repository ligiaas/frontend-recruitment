import React, { useState } from 'react';
import Bag from '../src/components/container/Bag'
import BagButton from '../src/components/BagButton'
import Grid from '../src/components/container/Grid'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Grid>
        <h1 style={{color: '#000'}}>HOME</h1>
      </Grid>
      <BagButton open={open} setOpen={setOpen} />
      <Bag open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
