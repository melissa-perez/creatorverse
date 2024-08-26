import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { supabase } from './client';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import './App.css';

function App() {
    const [creators, setCreators] = useState(null);
    const handleDelete = (id) => {
        setCreators((prevCreators) =>
            prevCreators.filter((creator) => creator.id !== id)
        );
    };
    useEffect(() => {
        async function fetchCreatorData() {
            let { data: creators, error } = await supabase
                .from('creators')
                .select('*');

            if (error) {
                console.error('Error fetching creators:', error);
                return null;
            }

            return creators;
        }

        fetchCreatorData().then((data) => {
            setCreators(data);
        });
    }, []);

    let routes = useRoutes([
        {
            path: '/',
            element: (
                <ShowCreators creators={creators} onDelete={handleDelete} />
            ),
        },
        { path: 'add', element: <AddCreator /> },
        { path: 'edit', element: <EditCreator /> },
        { path: 'view/:id', element: <ViewCreator creators={creators} /> },
    ]);
    return routes;
}

export default App;
