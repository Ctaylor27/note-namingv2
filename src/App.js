import {useState} from 'react'
import './App.css';
import AppHeader from './components/AppHeader'
import AppDrawer from './components/AppDrawer'
import {Container, Box, Button} from '@mui/material'



function App() {
  const [mode, setMode] = useState('treble')
  const [drawerState, setDrawerState] = useState(false)
  const [noteState, setNoteState] = useState({
    'bass':  [{"C4": true}, {"D4": true}, {"E4": true}, {"F4": true}, {"G4": true}, {"A4": true}, {"B4": true}, {"C5": true}, {"D5": true}, {"E5": true}, {"F5": true}],
    'treble': [{"C4": true}, {"D4": true}, {"E4": true}, {"F4": true}, {"G4": true}, {"A4": true}, {"B4": true}, {"C5": true}, {"D5": true}, {"E5": true}, {"F5": true},]
})

  const handleModeClick = (previousMode) => {
    if (mode !== previousMode) {
        if(mode === "bass") setMode('treble')
        else setMode('bass')
    }    
  }

  const handleDrawer = () => {
    setDrawerState(!drawerState)
    console.log(noteState)
  }

  const updateNoteState = (label) => {
    const newState = {...noteState}
    newState[mode][label] = !noteState[mode][label]
    setNoteState(...noteState)
  }
  

  return (
    <div className="App">
      
      <AppHeader drawerOpen={drawerState} openDrawer={() => handleDrawer}/>
      <AppDrawer 
      noteState={noteState}
      changeMode={handleModeClick} 
      drawerOpen={drawerState} 
      currentMode={mode} 
      getNoteState={updateNoteState}/>
      <Container maxWidth="xs" style={{marginTop: '1rem'}}>
        <Box sx={{
          height: '50',
        }}>
          <img src='/assets/bcimgs/A3bc.png' loading="lazy" alt="Note Naming Flashcard" style={{
            maxWidth: '100%',
          }}/> 
          <Button size="large" variant="contained" style={{marginTop: "1rem"}}
                onClick={() => {
                    console.log(noteState)
                }}
            >Random</Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
