import { FormControl, FormGroup, InputLabel, Input } from '@mui/material'
import React from 'react';
import './addjobform.scss'

const Addjobfom = () => {
  return (
    <div className='form-component'>
        <FormGroup className='form'>
        <div style={{fontWeight: "bold",fontSize: "22px"}}>Add a new job</div>
        <br />
            <FormControl>
                <InputLabel>Job Name :</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Job Catergory :</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Job Description :</InputLabel>
                <Input/>
            </FormControl>
            <br />
            <button className='btn'> Confirm </button>
        </FormGroup>
       
    </div>
  )
}

export default Addjobfom
