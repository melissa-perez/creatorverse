import Card from '../components/Card';
import Hero from '../components/Hero';

function ShowCreators({ creators }) {
    if (!creators || creators.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Hero />
            <div className="creators-container">
                <div className="cards-container">
                    {creators.map((creator) => {
                        return <Card key={creator.id} creator={creator} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default ShowCreators;
