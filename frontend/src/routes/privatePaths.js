import { Calender, Companies, Dashboard, Portfolio } from '../pages';

const privatePaths = [
    {
        path: 'dashboard',
        element: <Dashboard />,
    },
    {
        path: 'companies',
        element: <Companies />,
    },
    {
        path: 'portfolio',
        element: <Portfolio />,
    },
    {
        path: 'calender',
        element: <Calender />,
    },
];

export default privatePaths;