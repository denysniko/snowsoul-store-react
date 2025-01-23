import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material'
import 'normalize.css'
import './index.scss'
import App from './App.jsx'

const theme = createTheme({
	palette: {
		common: {
			black: '#111111',
		},
		primary: {
			main: 'hsla(220, 14%, 96%, 0.6)',
		},
	},
	typography: {
		fontFamily: "'Noto Sans', sans-serif",
	},
	components: {
		MuiToolbar: {
			styleOverrides: {
				root: {
					padding: '0 1.25rem',
					'@media (min-width:577px)': {
						padding: '0 2rem',
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					color: '#111111',
				},
			},
		},
	},
})

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>
)
