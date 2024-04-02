import { Login, Register } from '../auth';


const publicPaths = [
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'register',
        element: <Register />,
    },
    {
        path: '/*',
        element: <Login />,
    },
];

export default publicPaths;