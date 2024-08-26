import Card from '../components/Card';
import Hero from '../components/Hero';

function ShowCreators({ creators, onDelete }) {
    if (!creators || creators.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Hero />
            <div className="creators-container">
                <div className="cards-container">
                    {creators.map((creator) => {
                        return (
                            <Card
                                key={creator.id}
                                creator={creator}
                                onDelete={onDelete}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ShowCreators;
