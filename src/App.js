import React, { useState } from 'react';
import NavBar from './Components/NavigationBar/NavigationBar';
import MusicTable from './Components/MusicTable/MusicTable';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <MusicTable />
        </div>
    </div>
  );
}

export default App;
