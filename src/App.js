import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserReg from './components/UserReg/UserReg';
import UserLog from './components/UserLog/UserLog';

import Body from './components/Body/Body';
import FindVet from './components/FindVet/FindVet';
import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import MedicalRecord from './components/MedicalRecord/MedicalRecord';
import CreatePetRecord from './components/MedicalRecord/CreatePetRecord/CreatePetRecord';

import './App.css';

import { auth, logout } from './utils/firebase';
import AuthContext from './contexts/AuthContext';
import { scrollToTop } from './services/common';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setUser)
    }, []);

    const authInfo = {
        isAuthenticated: Boolean(user),
        userId: user?.uid,
        email: user?.email,
    }

    return (
        <div className="App" onLoad={scrollToTop}>
            <AuthContext.Provider value={authInfo}>
                <Header />

                <Switch>
                    <Route path="/Healthy-Paw" exact component={Body} />
                    <Route path="/Healthy-Paw/register" component={UserReg} />
                    <Route path="/Healthy-Paw/login" component={UserLog} />
                    <Route path="/Healthy-Paw/logout" render={logout} />

                    <Route path="/Healthy-Paw/find-vet" component={FindVet} />
                    <Route path="/Healthy-Paw/medical-record" exact component={
                        authInfo.isAuthenticated
                            ? () => <MedicalRecord />
                            : () => <UserLog />
                    } />
                    <Route path="/Healthy-Paw/medical-record/create-pet-record" component={CreatePetRecord} />
                    <Route path="/Healthy-Paw/gallery" component={Gallery} />
                    <Route path="/Healthy-Paw/blog" component={Blog} />
                </Switch>

                <Footer />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
