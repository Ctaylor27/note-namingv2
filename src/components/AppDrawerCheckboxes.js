import React, {useState} from 'react'
import {Grid, FormControlLabel, Switch} from '@mui/material'

const AppDrawerCheckboxes = ({currentMode, getNoteState, noteState}) => {
    
    const labels = {
        "bass": [
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
        "treble": [
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
        ]
    }

    return (
        <div>
            <Grid container columns={3} style={{maxWidth: '25rem'}}>
                {
                    labels[currentMode].map((label, index) => <Grid key={index} item xs={1}>
                        <FormControlLabel label={label} control={<Switch className={label} checked={noteState[currentMode][label]} 
                        onChange={() => {
                            console.log(label)
                            getNoteState(label)
                            
                        }}/>} /></Grid>)
                }
            </Grid>  
        </div>
    )
}

export default AppDrawerCheckboxes
