import React, { useContext, useCallback, useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

export default function Dropdown(props) {
  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.departLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.departValue}
          defaultValue={props.departmentDropdown[0]?.value}
          label={props.departLabel}
          onChange={props.handleDepartment}
        >
        {props.departmentDropdown?.map((x,ind)=>{
            return (
                <MenuItem value={x.value} key={ind}>{x.text}</MenuItem>
            )
        })}
        </Select>
      </FormControl>
    </Box>
    
    {props.showArea && <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.areaLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.areaValue}
          defaultValue={props.areaDropdown[0]?.value}
          label={props.areaLabel}
          onChange={props.handleArea}
        >
        {props.areaDropdown?.map((x,ind)=>{
            return (
                <MenuItem value={x.value} key={ind}>{x.text}</MenuItem>
            )
        })}
        </Select>
      </FormControl>
    </Box>}
    </>
  );
}
