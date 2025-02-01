import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import DashboardPage from './pages/dashboard';
import AuthenticationPage from './pages/auth';
import ExpensePage from './pages/expense';
import IncomePage from './pages/income';
import UrlProvider from './context';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <LandingPage /> 
			},
			{
				path: '/dashboard',
				element: <DashboardPage />
			},
			{
				path: '/expense',
				element: <ExpensePage />
			},
			{
				path: '/income',
				element: <IncomePage />
			},
			{
				path: '/auth',
				element: <AuthenticationPage />
			}
		]
	}
])

function App() {

	return (
		// By wrapping this whole app in UrlProvider, it allows to access 
		// all the values that it provides to be accessible everywhere
		<UrlProvider>
			<RouterProvider router={router} />
		</UrlProvider>
	)
}

export default App
