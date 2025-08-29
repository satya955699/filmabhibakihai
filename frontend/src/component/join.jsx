import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";

const roles = [
  { value: 'ScriptWriter', label: 'Script Writer' },
  { value: 'Editor', label: 'Video Editor' },
  { value: 'VoiceArtist', label: 'Voice Artist' },
  { value: 'GraphicDesigner', label: 'Graphic Designer' },
];

// Custom dark theme
const darkTheme = createTheme({

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#FE6B8B',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#FE6B8B',
            },
          },
        },
      },
    },
}
});

function Join() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(to right bottom, #111827, #374151)', 
        p: 2 
      }}
    >
      <Paper 
        elevation={12} 
        sx={{ 
          p: { xs: 3, sm: 5 }, 
          borderRadius: 4, 
          maxWidth: '800px', 
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
          Join Our Creative Team
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: 'grey.400', mb: 5 }}>
          Fill out the form below to apply for a position.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        
            <TextField
              label="First Name"
              variant="outlined"
              {...register("firstName", { required: "First name is required" })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon sx={{ color: 'grey.500' }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Last Name */}
            <TextField
              label="Last Name"
              variant="outlined"
              {...register("lastName", { required: "Last name is required" })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon sx={{ color: 'grey.500' }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Phone */}
            <TextField
              label="Phone Number"
              variant="outlined"
              type="tel"
              {...register("phone", { 
                required: "Phone number is required",
                pattern: {
                  value: /^[+]?[\d\s\-\(\)]+$/,
                  message: "Please enter a valid phone number"
                }
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon sx={{ color: 'grey.500' }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Email */}
            <TextField
              label="Email Address"
              variant="outlined"
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address"
                }
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: 'grey.500' }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Role Selection */}
            <TextField
              variant="outlined"
              select
              label="Select Your Role"
              {...register("role", { required: "Please select a role" })}
              error={!!errors.role}
              helperText={errors.role?.message || "Please select your desired role"}
            >
              {roles.map((option) => (
                <MenuItem sx={{ backgroundColor:"gray"}} key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            {/* Address */}
            <TextField
              label="Address"
              variant="outlined"
              {...register("address", { required: "Address is required" })}
              error={!!errors.address}
              helperText={errors.address?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon sx={{ color: 'grey.500' }} />
                  </InputAdornment>
                ),
              }}
            />
           
          </Box>
          
      
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            sx={{ 
              mt: 4, 
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor:"orange",
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          >
            Submit Application
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
export default function ThemedJoin() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Join />
    </ThemeProvider>
  );
}
