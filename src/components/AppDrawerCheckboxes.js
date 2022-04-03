import React from 'react'
import {Grid, FormControlLabel, Switch} from '@mui/material'

const AppDrawerCheckboxes = ({currentMode, updateNoteState, noteState, subMode}) => {
    
    const labels = {
        "bc": [
            "G2",
            "A2",
            "B2",
            "C3",
            "D3",
            "E3",
            "F3",
            "G3",
            'A3',
            "B3",
            "C4"
        ]
    , 
        "tc": [
            "C4",
            "D4",
            "E4",
            "F4",
            "G4",
            "A4",
            "B4",
            "C5",
            'D5',
            "E5",
            "F5"
        ],
        "tc-lines": [
            "E4",
            "G4",
            "B4",
            "D5",
            "F5"
        ],
        "tc-spaces": [
            "F4",
            "A4",
            "C5",
            "E5",
        ],
        "bc-lines": [
            "G2",
            "B2",
            "D3",
            "F3",
            "A3",
        ],
        "bc-spaces": [
            "A2",
            "C3",
            "E3",
            "G3"
        ]
    }
    return (
        <div>
            <Grid container columns={3} style={{maxWidth: '25rem'}}>
                {
                    labels[currentMode].map((label, index) => <Grid key={index} item xs={1}>
                        <FormControlLabel label={label} control={<Switch name={label} checked={noteState[currentMode][label]} 
                        onChange={(e) => {
                            updateNoteState(e.target.name)
                            
                        }}/>} /></Grid>)
                }
            </Grid>  
        </div>
    )
}

export default AppDrawerCheckboxes
