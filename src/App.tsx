import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ContactsList from './pages/ContactsList';
import { ContactsProvider } from './context/providers/ContactsProvider';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './pages/ContactForm';

function App() {
    return (
        <Router>
        <ContactsProvider>
            <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            />
            
            <Routes>
                <Route path="/" element={<ContactForm />} />
                <Route path="/contacts" element={<ContactsList />} />
            </Routes>
        </ContactsProvider>
        </Router>
    );
}

export default App;