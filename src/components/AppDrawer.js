import React from 'react'
import {Drawer, Box, List, FormGroup, Toolbar, ButtonGroup, Button, Divider} from '@mui/material'
import AppDrawerCheckboxes from './AppDrawerCheckboxes'

const AppDrawer = ({currentMode, handleStudyMode, studyMode, drawerOpen, changeMode, updateNoteState, noteState, }) => {
    return (
        <div>
            <Drawer anchor="left" open={drawerOpen}>
                <Toolbar/>
                <Box xs={{width: 'auto'}}>
                    <List style={{padding: "2rem 1rem"}}>
                        <FormGroup >
                              <AppDrawerCheckboxes noteState={noteState} updateNoteState={updateNoteState} currentMode={currentMode}/>
                        </FormGroup>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "center",
                        margin: '2rem'
                    }}>
                        <ButtonGroup >
                            <Button  onClick={() => changeMode('tc')} variant={currentMode === "tc" ? "contained" : "outlined"}>Treble</Button>
                            <Button  onClick={() => changeMode("bc")} variant={currentMode === "bc" ?  "contained": "outlined"}>Bass</Button>
                            <Button  onClick={() => changeMode("tb")} variant={currentMode === "tb" ?  "contained": "outlined"}>Tuba</Button>
                            <Button onClick={() => handleStudyMode()} variant={studyMode ? "contained" : "outlined"}>Study</Button>
                        </ButtonGroup>
                    </div>
                    <Divider />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "center",
                        margin: '2rem'
                    }}>
                    </div>
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}

export default AppDrawer
