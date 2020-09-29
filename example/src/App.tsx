import React from 'react';

import { Avatar, Buttons, Typography } from 'camara';
// import 'camara/dist/index.css';

const App = () => {
  return (
    <div>
      <Buttons />
      <Avatar />
      <Typography variant='display'>CupertinoScoop</Typography>
      <Typography variant='display' size='small'>
        CupertinoScoop
      </Typography>
      <Typography variant='heading' size='small'>
        CupertinoScoop
      </Typography>
      <Typography variant='heading' size='large'>
        CupertinoScoop
      </Typography>
      <Typography variant='body' size='tiny'>
        CupertinoScoop
      </Typography>
      <Typography variant='body' size='small'>
        CupertinoScoop
      </Typography>
      <Typography variant='body' size='large'>
        CupertinoScoop
      </Typography>
      <Typography>No variant</Typography>
    </div>
  );
};

export default App;
