import React from 'react'
import {Drawer, Box, List, FormGroup, Toolbar, ButtonGroup, Button} from '@mui/material'
import AppDrawerCheckboxes from './AppDrawerCheckboxes'

const AppDrawer = ({currentMode, drawerOpen, changeMode, getNoteState, noteState}) => {
    return (
        <div>
            <Drawer anchor="left" open={drawerOpen}>
                <Toolbar/>
                <Box xs={{width: 'auto'}}>
                    <List style={{padding: "2rem 1rem"}}>
                        <FormGroup >
                              <AppDrawerCheckboxes noteState={noteState} getNoteState={getNoteState} currentMode={currentMode}/>
                        </FormGroup>
                    </List>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "center",
                    }}>
                        <ButtonGroup >
                            <Button  onClick={() => changeMode('treble')} variant={currentMode === "treble" ? "contained" : "outlined"}>Treble</Button>
                            <Button  onClick={() => changeMode("bass")} variant={currentMode === "bass" ?  "contained": "outlined"}>Bass</Button>
                            <Button >Study</Button>
                        </ButtonGroup>
                    </div>
                </Box>
            </Drawer>
        </div>
    )
}

export default AppDrawer
