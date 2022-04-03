import {useState} from 'react'
import './App.css';
import AppHeader from './components/AppHeader'
import AppDrawer from './components/AppDrawer'
import {Container, Box, Button, Typography} from '@mui/material'

const defaultNoteState = {
  'bc':  {"G2": false, "A2": false, "B2": false, "C3": true, "D3": true, "E3": true, "F3": false, "G3": false, "A3": false, "B3": false, "C4": false},
  'tc': {"C4": true, "D4": true, "E4": true, "F4": false, "G4": false, "A4": false, "B4": false, "C5": false, "D5": false, "E5": false, "F5": false}
}

function App() {
  const [mode, setMode] = useState('tc')
  const [drawerState, setDrawerState] = useState(false)
  const [noteState, setNoteState] = useState(defaultNoteState)
  const [note, setNote] = useState("C4")
  const [studyMode, setStudyMode] = useState(false)

  const handleStudyMode = () => {
    setStudyMode(!studyMode)
  }

  const handleModeClick = (previousMode) => {
    if (mode !== previousMode) {
        if(mode === "bc") {
          setMode('tc')
        } 
        else setMode('bc')
    } else return    
  }

  const handleDrawer = () => {
    setDrawerState(!drawerState)
  }

  const updateNoteState = (name) => {
    const newState = {...noteState}
    newState[mode][name] = !noteState[mode][name]
    setNoteState(newState)
  }

  const displayImage = () => {
    const target = Math.floor(Math.random() * Object.keys(noteState[mode]).length)
    if (Object.keys(noteState[mode])[target] !== note && noteState[mode][Object.keys(noteState[mode])[target]]) {
      setNote(Object.keys(noteState[mode])[target])
      
      return
    }
    else {
      return displayImage()
    }
  }
  
  document.body.onkeyup = (event) => {
    event.preventDefault()
    if (event.keyCode === 32) displayImage()
  }

  return (
    <div className="App">
      
      <AppHeader drawerOpen={drawerState} openDrawer={() => handleDrawer}/>
      <AppDrawer 
        noteState={noteState}
        changeMode={handleModeClick}
        drawerOpen={drawerState} 
        currentMode={mode} 
        handleStudyMode={handleStudyMode}
        studyMode={studyMode}
        updateNoteState={updateNoteState}/>
      <Container maxWidth="xs" style={{marginTop: '1rem'}}>
        <Box className='boxContainer'  sx={{
          height: '50',
        }}>
          <img src={`/assets/${mode}imgs/${note}${mode}.png`} loading="lazy" alt="Note Naming Flashcard" className='mainImage'/> 
          <Typography style={studyMode ? {display : 'block'} : {display: 'none'}} variant="h3">{`${note}`}</Typography>
          <Button size="large" variant="contained" style={{marginTop: "1rem", backgroundColor: "#005e02"}}
                onClick={() => {
                  displayImage()
                }} 
            >Random</Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
