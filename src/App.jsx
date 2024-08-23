import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import './App.css';

function App() {
    let routes = useRoutes([
        {
            path: '/',
            element: <ShowCreators />,
            children: [
                { path: 'add', element: <AddCreator /> },
                { path: 'edit', element: <EditCreator /> },
                { path: 'view', element: <ViewCreator /> },
            ],
        },
    ]);
    return routes;
}

export default App;
