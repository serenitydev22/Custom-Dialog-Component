import './App.css';
// Import the Dialog component here
import Dialog from './components/Dialog';
// Import useState
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openDialog() {
    setIsOpen(true);
  }

  function onSubmit() {
    // do actions here
    alert('Submitted');
    setIsOpen(false);
  }

  return (
    <div className="App">
      <button onClick={openDialog}>Open dialog</button>

      {/* Add the dialog component here */}
      { isOpen ?
        <Dialog title="New dialog"
          content="Add your content here"
          actionLabel="Submit" 
          onClose={() => setIsOpen(false)}
          onSubmit={onSubmit}
        /> : null
       }
        
    </div>
  );
}

export default App;
