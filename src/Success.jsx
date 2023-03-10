import React from 'react'
import { Box, Typography, Button } from '@mui/material'


export const Success = () => {
  return (
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

        }}
      >
        
            <img src='./Success.svg' alt='success' width={100} /> 

        
    </Box>
  )
}
