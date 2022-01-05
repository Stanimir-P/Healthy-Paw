import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import './MedicalRecord.css';

import AuthContext from '../../contexts/AuthContext';
import { database } from '../../utils/firebase';
import { calculateAge } from '../../services/common';
import { deleteDbRecord, onAttachChange, onEdit, onEditConfirm } from '../../services/petServices';

const MedicalRecord = () => {
    const defaultProfilePic = 'https://thumbs.dreamstime.com/b/pet-medical-record-line-icon-animal-health-examination-form-vector-illustration-isolated-white-pet-examination-pet-medical-133025942.jpg';
    const { userId } = useContext(AuthContext);
    const [medicalRecordInfo, setMedicalRecordInfo] = useState({});

    useEffect(() => {
        const ref = database.ref(userId);

        ref.on('value', (snapshot) => {
            setMedicalRecordInfo(snapshot.val());
        }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
        });
    }, [userId]);

    const [currentRecord, setCurrentRecord] = useState({});
    const [currentPetAge, setCurrentPetAge] = useState(null);

    const getRecordId = document.querySelector(".recordsDropdown");
    const uploadPicBtn = document.querySelector('.attach-image');
    const editBtns = document.querySelectorAll('.edit-btn');

    const loadRecordData = () => {
        const petPicture = document.querySelector('#pet-profile-pic');

        if (getRecordId.value === 'not-assigned') {
            editBtns.forEach((btn) => btn.style.display = 'none');
            petPicture.src = defaultProfilePic;
            uploadPicBtn.style.display = 'none';
            setCurrentPetAge(null);
            return setCurrentRecord({});
        }

        if (medicalRecordInfo[getRecordId.value].imageUrl) {
            petPicture.src = medicalRecordInfo[getRecordId.value].imageUrl;
        } else {
            petPicture.src = defaultProfilePic;
        }

        editBtns.forEach((btn) => btn.style.display = 'block');
        uploadPicBtn.style.display = 'block';
        setCurrentPetAge(calculateAge(medicalRecordInfo[getRecordId.value].birthDate));
        setCurrentRecord(medicalRecordInfo[getRecordId.value]);
    }

    return (
        <div className="medical-record-wrapper background-cover">
            <div className="medical-record-container">
                <div className="medical-record">
                    <div className="pet-info-section">
                        <div className="pet-info-header">
                            <h3>Pet Information</h3>

                            <span className="input">
                                <select type="text" name="recordId" className="recordsDropdown" onChange={loadRecordData}>
                                    <option value="not-assigned">Select Pet</option>
                                    {medicalRecordInfo
                                        ? Object.keys(medicalRecordInfo).map((recordId) => {
                                            return <option value={recordId} key={recordId}>{medicalRecordInfo[recordId].petName}</option>
                                        })
                                        : ''
                                    }
                                </select>
                            </span>
                        </div>

                        <div className="pet-info-wrapper">
                            <div className="pet-picture-wrapper">
                                <div className="pet-picture">
                                    <img src={
                                        'https://thumbs.dreamstime.com/b/pet-medical-record-line-icon-animal-health-examination-form-vector-illustration-isolated-white-pet-examination-pet-medical-133025942.jpg'
                                    } id="pet-profile-pic" alt="Pet Profile Pic" />
                                </div>

                                <label htmlFor="attach-image" className="attach-image" onChange={(e) => {
                                    onAttachChange(e, userId, getRecordId.value)
                                }}>

                                    <input type="file" name="attach-image" id="attach-image" />
                                    Upload Picture
                                </label>
                            </div>

                            <div className="pet-info-container">
                                <div className="pet-info">
                                    <div className="info-container">
                                        <p>Name: <span>{currentRecord.petName}</span></p>
                                    </div>

                                    <div className="info-container">
                                        <p>Age: <span>{currentPetAge}</span></p>
                                    </div>

                                    <div className="info-container">
                                        <p>Birth Date: <span>{currentRecord.birthDate}</span></p>
                                    </div>

                                    <div className="info-container">
                                        <p>Breed: <span>{currentRecord.breed}</span></p>
                                    </div>

                                    <div className="info-container">
                                        <p>Gender: <span>{currentRecord.petGender}</span></p>
                                    </div>

                                    <div className="info-container">
                                        {currentRecord.weight
                                            ? <p>Weight: <span id="weight-value">{currentRecord.weight} kgs</span></p>
                                            : <p>Weight: <span id="weight-value"></span></p>
                                        }

                                        <button type="button" value="weight-edit" className="edit-btn" onClick={onEdit}>Edit</button>
                                    </div>

                                    <div className="edit-wrapper">
                                        <input type="number" name="weight" id="weight-edit" />
                                        <button type="button" onClick={(e) => {
                                            onEditConfirm(e, userId, getRecordId.value);
                                            currentRecord.weight = onEditConfirm(e, userId, getRecordId.value);
                                        }}>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="health-concerns-section">
                        <div className="health-concerns-header">
                            <h3>Health Concerns</h3>

                            <i className="fa fa-paw logo-paw" id="header-logo"></i>
                        </div>

                        <div className="health-concerns">
                            <div className="health-concerns-wrapper">
                                <div className="health-concerns-container">
                                    <p>Allergies: <span>{currentRecord.allergies}</span></p>
                                    <button type="button" value="allergies-edit" className="edit-btn" onClick={onEdit}>Edit</button>
                                </div>

                                <div className="edit-wrapper">
                                    <input type="text" name="allergies" id="allergies-edit" />
                                    <button type="button" onClick={(e) => {
                                        onEditConfirm(e, userId, getRecordId.value);
                                        currentRecord.allergies = onEditConfirm(e, userId, getRecordId.value);
                                    }}>Confirm</button>
                                </div>

                                <div className="health-concerns-container">
                                    <p>Existing Conditions: <span>{currentRecord.existingConditions}</span></p>
                                    <button type="button" value="existingConditions-edit" className="edit-btn" onClick={onEdit}>Edit</button>
                                </div>

                                <div className="edit-wrapper">
                                    <input type="text" name="existingConditions" id="existingConditions-edit" />
                                    <button type="button" onClick={(e) => {
                                        onEditConfirm(e, userId, getRecordId.value);
                                        currentRecord.existingConditions = onEditConfirm(e, userId, getRecordId.value);
                                    }}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="medical-record-btns">
                    <div className="delete-btn section-btn">
                        <Link to="#" onClick={(e) => {
                            deleteDbRecord(e, userId, getRecordId.value);
                            delete medicalRecordInfo[getRecordId.value];
                            setCurrentRecord({});
                            setCurrentPetAge(null);
                            uploadPicBtn.style.display = 'none';
                            editBtns.forEach((btn) => btn.style.display = 'none');
                        }}>Delete Record</Link>
                    </div>

                    <i className="fa fa-paw logo-paw" id="header-logo"></i>
                </div>

                <div className="create-record-wrapper">
                    <div className="create-record-btn section-btn">
                        <Link to="/Healthy-Paw/medical-record/create-pet-record">Create New Record</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MedicalRecord;
