import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';


function App() {
  const pages = ['Buy', 'Sell', 'Index', 'AboutUs', 'Blog'];

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src='https://images-platform.99static.com//FoLInmjzHdN0tTq7EaOlsJ6LjYY=/0x900:900x1800/fit-in/500x500/99designs-contests-attachments/88/88818/attachment_88818010' height={120}></img>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default App
