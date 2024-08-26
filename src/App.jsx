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

    const handleAdd= (newCreator) => {
        setCreators((prevCreators) => [...prevCreators, newCreator]);
    };
    const handleDelete = (id) => {
        setCreators((prevCreators) =>
            prevCreators.filter((creator) => creator.id !== id)
        );
    };

    const handleEdit = (updatedCreator) => {
        setCreators((prevCreators) =>
            prevCreators.map((creator) =>
                creator.id === updatedCreator.id ? updatedCreator : creator
            )
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
        { path: 'add', element: <AddCreator onAdd={handleAdd} /> },
        { path: 'edit/:id', element: <EditCreator onEdit={handleEdit} /> },
        { path: 'view/:id', element: <ViewCreator creators={creators} /> },
    ]);
    return routes;
}

export default App;
