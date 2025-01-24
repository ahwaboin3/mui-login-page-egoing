import { 
  FormControlLabel, TextField, Checkbox, Button
 } from '@mui/material';

function App() {
  return (
    <div>
      <TextField 
        label="Email Address" 
        required 
        fullWidth
        name="email" 
        autoComplete='email'
        autoFocus
      />
      <TextField 
        label="Password" 
        type="password" 
        required
        fullWidth 
        name="password" 
        autoComplete='current-password'
      />
      <FormControlLabel control={
          <Checkbox value="remember" color="primary" />
        }
        label="Remember me"
      />
      <Button 
        type="submit"
        fullWidth
        variant='contained'
        color="secondary"
      >Sign in</Button>
    </div>
  )
}

export default App;
