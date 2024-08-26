import { supabase } from '../client';
import { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        twitchName: '',
        imageURL: '',
        description: '',
        URL: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.from('creators').insert([
            {
                name: formData.twitchName,
                imageURL: formData.imageURL,
                description: formData.description,
                url: formData.URL,
            },
        ]);

        if (error) {
            console.error('Error inserting data: ', error);
        } else {
            console.log('Data successfully inserted: ', data);
            setFormData({
                twitchName: '',
                imageURL: '',
                description: '',
                URL: '',
            });
        }
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add a creator:</legend>
                <label htmlFor="twitchName">Name</label>
                <br />
                <input
                    type="text"
                    id="twitchName"
                    name="twitchName"
                    value={formData.twitchName}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="imageURL">Image URL</label>
                <br />
                <input
                    type="text"
                    id="imageURL"
                    name="imageURL"
                    value={formData.imageURL}
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
                    value={formData.description}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="URL">URL</label>
                <br />
                <input
                    type="text"
                    id="URL"
                    name="URL"
                    value={formData.URL}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Submit" className="button" />
            </fieldset>
        </form>
    );
}

export default Form;
