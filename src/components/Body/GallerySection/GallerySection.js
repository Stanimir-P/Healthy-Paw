import { Link } from 'react-router-dom';

import PawsIcons from './PawsIcons/PawsIcons';
import GalleryContainer from './GalleryContainer/GalleryContainer';

import './GallerySection.css';

const GallerySection = () => {
    return (
        <section className="body-section-wrapper gallery-section">
            <div className="gallery-section-container">
                <div className="gallery-title-wrapper">
                    <div className="paw-left-container paw-container">
                        <PawsIcons />
                    </div>

                    <Link to="/Healthy-Paw/gallery" className="gallery-section-title section-btn">
                        <div className="visit-gallery-btn">VISIT GALLERY</div>
                    </Link>

                    <div className="paw-right-container paw-container">
                        <PawsIcons />
                    </div>
                </div>

                <GalleryContainer />
            </div>
        </section>

    );
}

export default GallerySection;
