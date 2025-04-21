import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Appointment = () => {
  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Book an Appointment
      </Typography>
      <TextField
        label="Full Name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Email Address"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Phone Number"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Preferred Date"
        variant="outlined"
        type="date"
        fullWidth
        sx={{ marginBottom: 2 }}
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Submit Appointment
      </Button>
    </Box>
  );
};

export default Appointment;
