import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import DashboardPage from './pages/dashboard';
import AuthenticationPage from './pages/auth';
import ExpensePage from './pages/expense';
import IncomePage from './pages/income';

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
		<RouterProvider router={router} />
	)
}

export default App
