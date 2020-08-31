import React from 'react';

import { Avatar, Buttons } from 'camara';
import 'camara/dist/index.css';

const App = () => {
  return (
    <div>
      <Buttons />
      <Avatar src='https://avatars0.githubusercontent.com/u/19210093?s=48&v=4' />
      {/* <ExampleComponent text='Create React Library Example 😄' /> */}
    </div>
  );
};

export default App;
