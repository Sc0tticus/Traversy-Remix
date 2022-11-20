import { Outlet, LiveReload } from '@remix-run/react'; // Route Outle

export default function App() {
	return (
		<html lang="en">
			<head>
				<title>My Remix Blog</title>
			</head>
			<body>
				<Outlet />
				{process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
			</body>
		</html>
	);
}
