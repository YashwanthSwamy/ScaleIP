import { Calender, MyList, Dashboard, Portfolio } from '../pages';

const privatePaths = [
    {
        path: 'dashboard',
        element: <Dashboard />,
    },
    {
        path: 'MyList',
        element: <MyList />,
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