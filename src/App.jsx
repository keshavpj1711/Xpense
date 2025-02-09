import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import DashboardPage from './pages/dashboard';
import AuthenticationPage from './pages/auth';
import TransactionPage from './pages/transaction';
import UrlProvider from './context';
import RequireAuth from './components/require-auth';
import CreateTransactionPage from './pages/createTransaction';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <LandingPage /> 
			},
			// Password protected pages using the code in the Require Auth function in the require-auth.jsx
			{
				path: '/dashboard',
				element: <RequireAuth><DashboardPage /></RequireAuth>
			},
			{
				path: '/transaction',
				element: <RequireAuth><TransactionPage /></RequireAuth>
			},
			{
				path: '/transaction/create',
				element: <RequireAuth><CreateTransactionPage /></RequireAuth>
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
