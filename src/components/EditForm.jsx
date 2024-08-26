import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function EditForm({ onEdit }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [creator, setCreator] = useState({
        name: '',
        imageURL: '',
        description: '',
        url: '',
    });

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching creator:', error);
            } else {
                setCreator(data);
            }
        };

        fetchCreator();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreator((prevCreator) => ({
            ...prevCreator,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = await supabase
            .from('creators')
            .update({
                name: creator.name,
                imageURL: creator.imageURL,
                description: creator.description,
                url: creator.url,
            })
            .eq('id', id);

        if (error) {
            console.error('Error updating creator:', error);
        } else {
            console.log('Creator successfully updated.');
            onEdit(creator);
            navigate('/');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <fieldset>
                <legend>Edit creator:</legend>
                <label htmlFor="name">Name</label>
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={creator.name}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="imageURL">Image URL</label>
                <br />
                <input
                    type="text"
                    id="imageURL"
                    name="imageURL"
                    value={creator.imageURL}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="description">Description</label>
                <br />
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    cols="33"
                    value={creator.description}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="url">URL</label>
                <br />
                <input
                    type="text"
                    id="url"
                    name="url"
                    value={creator.url}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Update" className="button" />
            </fieldset>
        </form>
    );
}

export default EditForm;
