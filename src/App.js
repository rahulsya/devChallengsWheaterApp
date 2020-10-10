import React from 'react';

function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/12 bg-liteBlue h-screen">
        location
      </div>
      <div className="w-full bg-darkBlue h-screen">
        details
      </div>
    </div>
  );
}

export default App;
