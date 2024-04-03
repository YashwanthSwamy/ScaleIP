import { Calender, MyList, Dashboard, Portfolio } from '../pages';

const privatePaths = [
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/myList',
        element: <MyList />,
    },
    {
        path: '/profile',
        element: <Portfolio />,
    },
    {
        path: '/calender',
        element: <Calender />,
    },
];

export default privatePaths;