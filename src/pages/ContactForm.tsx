import { useState, ChangeEvent } from "react";
import { useContacts } from "../context/hooks/useContacts";
import { FiPlus } from "react-icons/fi";
import HamburgerMenu from "../components/HamburguerMenu";

const ContactForm: React.FC = () => {
    const { addContact } = useContacts();
    const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [cep, setCep] = useState("");

    const handleCepChange = (e: ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\D/g, "");
        if (rawValue.length <= 8) {
            setCep(rawValue);
        }
    };

    const isFormValid = username.trim() !== "" && displayName.trim() !== "" && cep.length === 8;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addContact(username, displayName, cep);
        setUsername("");
        setDisplayName("");
        setCep("");
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow-sm p-4 flex">
                <HamburgerMenu />
            </header>

            <main className="flex-grow flex flex-col items-center p-4">
                <div className="w-full text-center mb-8 mt-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Adicione seus endereços
                    </h1>
                    <p className="text-gray-600">Preencha os campos abaixo para adicionar um novo contato com endereço</p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
                >
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                        Adicionar Contato
                    </h2>
                    
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Nome do Usuário
                            </label>
                            <input
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">
                                Nome de Exibição do Endereço
                            </label>
                            <input
                                id="displayName"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">
                                CEP
                            </label>
                            <input
                                id="cep"
                                value={cep}
                                onChange={handleCepChange}
                                placeholder="Ex: 01010100"
                                required
                                maxLength={8}
                                pattern="\d{8}"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`mt-6 mx-auto flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ${
                            isFormValid 
                                ? "bg-blue-600 hover:bg-blue-700 cursor-pointer" 
                                : "bg-gray-300 cursor-not-allowed"
                        }`}
                    >
                        <FiPlus className={`text-xl ${isFormValid ? "text-white" : "text-gray-500"}`} />
                    </button>
                </form>
            </main>
        </div>
    );
};

export default ContactForm;
