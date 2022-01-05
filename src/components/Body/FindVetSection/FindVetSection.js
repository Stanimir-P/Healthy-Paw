import { Link } from 'react-router-dom';

import './FindVetSection.css';

const FindVetSection = () => {
    return (
        <section className="vet-section">
            <div className="vet-section-container">
                <div className="vet-section-content">
                    <div className="vet-section-title">
                        <h1>Your Pet Care Provider</h1>
                    </div>

                    <div className="vet-section-description">
                        <p>
                            The best way to ensure your pet's healthy life is to take a proactive approach to their health and wellness. <b>E</b>very dog and cat has unique needs, and Healthy Paw offers you a wide range of vets to keep your pet healthy and happy.
                        </p>
                    </div>

                    <div className="vet-section-button">
                        <Link to="/Healthy-Paw/find-vet">Find Vet</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindVetSection;