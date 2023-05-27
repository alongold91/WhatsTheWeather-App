import { makeStyles } from "tss-react/mui";
import React from 'react'
import { Typography } from "@mui/material";
interface SimpleListProps {
listTexts: string[]
}


const useStyles = makeStyles()((theme) => {
  return {
  };
});

const SimpleList = ({listTexts}: SimpleListProps) => {
  const { classes } = useStyles();
  return (
    <ul>
      {listTexts.map((text, index) => {
        return <li key={index}><Typography variant="body1">{text}</Typography></li>
      })}
    </ul>
  )
}

export default SimpleList;