import './App.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <TextField label="Email Address" required fullWidth
        name="email" autoComplete='email'/>
      <TextField label="Password" type="password" required
        fullWidth name="password" autoComplete='current-password'/>
      <Checkbox value="remember" color="primary" />
      <Button type="submit">Sign in</Button>
    </div>
  )
}

export default App;
