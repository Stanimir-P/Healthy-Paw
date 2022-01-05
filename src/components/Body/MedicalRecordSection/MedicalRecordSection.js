import { Link } from 'react-router-dom';

import PetCard from '../../Gallery/PetCard/PetCard';

import './MedicalRecordSection.css';

const MedicalRecordSection = () => {
    return (
        <section className="body-section-wrapper medical-record-section">
            <div className="medical-record-section-wrapper">
                <div className="myPetsInfo">
                    <div className="section-text">
                        <p>Keep Your Pet Healthy. <span className='heart-icon'>&#10084;</span><br />Create Medical Record to your pet and track your buddy's Health Status.</p>
                    </div>

                    <div className="medical-btn-wrapper">
                        <Link to="/Healthy-Paw/medical-record" className="medical-btn section-btn">
                            <div className="visit-record-btn">Visit Record</div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card-title">
                    <h2>Meet Bruno!</h2>
                </div>

                <PetCard />
            </div>
        </section>
    );
}

export default MedicalRecordSection;
