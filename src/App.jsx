import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { supabase } from './client';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import './App.css';

function App() {
    useEffect(() => {
        async function fetchCreatorData() {
            let { data: creators, error } = await supabase
                .from('creators')
                .select('*');
        }
        fetchCreatorData();
    }, []);
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
