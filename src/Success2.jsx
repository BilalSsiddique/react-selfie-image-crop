import React from 'react'
import { Box, Typography, Button, IconButton } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import { Link } from 'react-router-dom'

export const Success2 = ({ inputt }) => {
  return (
    <>
      <Box
        sx={{
          width: { xs: '290px', sm: '440px', md: '470px' },
          height: { xs: '490px', sm: '540px', md: '620px' },
          backgroundColor: 'white',
          //   marginTop: '10px',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Link to="/">
          <IconButton style={{ position: 'absolute', top: '20px', left: '5%' }}>
            <ArrowBackOutlinedIcon />
          </IconButton>
        </Link>
        <img src="./Success.svg" alt="success" width={100} />
        <p style={{ color: 'gray', fontSize: '30px', fontWeight: 'bold' }}>
          Successful
        </p>
        <p style={{ width: '50%', textAlign: 'center', color: 'grey' }}>
          {' '}
          Hello , <span style={{ color: 'black' }}>{inputt}</span> your are
          successfully verified{' '}
        </p>
        <button
          style={{
            marginTop: '50px',
            background: '#F7B428',
            border: 'none',
            color: 'white',
            padding: '10px 25px',
            fontWeight: 'bold',
            fontSize: '18px',
            borderRadius: '3px',
          }}
        >
          Results
        </button>
      </Box>
    </>
  )
}
