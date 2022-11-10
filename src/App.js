import {useState} from 'react'
import './App.css';
import AppHeader from './components/AppHeader'
import AppDrawer from './components/AppDrawer'
import {Container, Box, Button, Typography} from '@mui/material'

import { createTheme, ThemeProvider } from '@mui/material/styles';

// Used to change the primary color provided by MUI to match Van Buren Public Schools Green
const outerTheme = createTheme({
  mode: 'light',
  palette: {
    primary: {
      main: "#005e02",
    },
  },
});


// This is the configuration that will be used when the app is loaded
const defaultNoteState = {
  'bc':  {"G2": false, "A2": false, "B2": false, "C3": true, "D3": true, "E3": true, "F3": false, "G3": false, "A3": false, "B3": false, "C4": false},
  'tc': {"C4": true, "D4": true, "E4": true, "F4": false, "G4": false, "A4": false, "B4": false, "C5": false, "D5": false, "E5": false, "F5": false}
}

function App() {
  // Used to set which clef will be presented. (Treble or Bass clefs).
  const [mode, setMode] = useState('tc')

  // Manages the state of the MUI Drawer
  const [drawerState, setDrawerState] = useState(false)

  // Manges the state of the selected notes availible to be displayed
  const [noteState, setNoteState] = useState(defaultNoteState)

  // Manages the currently displayed note
  const [note, setNote] = useState("C4")

  // Manages study mode state
  const [studyMode, setStudyMode] = useState(false)

  // Changes the state of Study Mode
  const handleStudyMode = () => {
    setStudyMode(!studyMode)
  }

  // Changes the mode state to display the alternate clef.
  const handleModeClick = (previousMode) => {
    if (mode !== previousMode) {
        if(mode === "bc") {
          setMode('tc')
        } 
        else {
          setMode('bc')
        }
    } else return    
  }

  // Displays or Hides the MUI Drawer
  const handleDrawer = () => {
    setDrawerState(!drawerState)
  }

  // Updates the note state when the user changes their desired notes.
  // BUG if a note is selected and the MODE is changed the app won't display anything.
  // When you change the mode the app must reset the Note State.
  const updateNoteState = (name) => {
    // copy the previous state
    const newState = {...noteState}
    // change the configuration of a given note withen the settings
    newState[mode][name] = !noteState[mode][name]
    // Apply the new state
    setNoteState(newState)
  }

  // Recursive function that selects a random note and displays it.
  // It will continue to call itself until it finds a working note.
  const displayImage = () => {
    // Determines a random note based on the amount of possible notes
    const target = Math.floor(Math.random() * Object.keys(noteState[mode]).length)
    // checks if the selected note has already is NOT the same as the previously selected note
    // ALSO checks if the selected note is set to true in the noteState configuration for the app
    if (Object.keys(noteState[mode])[target] !== note && noteState[mode][Object.keys(noteState[mode])[target]]) {
      setNote(Object.keys(noteState[mode])[target])            
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
    <ThemeProvider theme={outerTheme}>
      <main className="App">
      
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
            <Button size="large" variant="contained" style={{marginTop: "1rem", }}
                  onClick={() => {
                    displayImage()
                  }}
              >Random</Button>
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
