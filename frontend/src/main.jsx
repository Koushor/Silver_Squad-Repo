import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='99828627950-unh0gmtpi4vf02ukqfp90lki1kfueva5.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>,
)
