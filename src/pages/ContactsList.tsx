import { useState, ChangeEvent, useEffect } from "react";
import { useFilteredContacts } from "../hooks/useFilteredContacts";
import SearchBar from "../components/SearchBar";
import { IContact } from "../interfaces/IContact";
import { toast } from "react-toastify";
import HamburgerMenu from "../components/HamburguerMenu";
import ContactCard from "../components/ContactCard";
import Pagination from "../components/Paginations";

const ContactsList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedTerm, setSearchedTerm] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    const [currentPage, setCurrentPage] = useState(0);
    const contactsPerPage = 8;

    const filteredContacts = useFilteredContacts(searchedTerm);

    useEffect(() => {
        if (hasSearched && searchedTerm.trim()) {
        if (filteredContacts.length > 0) {
            toast.success(
            `${filteredContacts.length} contato(s) encontrado(s) para "${searchedTerm}"`
            );
        } else {
            toast.error(`Nenhum contato encontrado para "${searchedTerm}"`);
        }
        setHasSearched(false);
        setCurrentPage(0);
        }
    }, [filteredContacts, hasSearched, searchedTerm]);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchTerm.trim()) {
        toast.info("Digite um termo para busca!");
        setSearchedTerm("");
        return;
        }
        setSearchedTerm(searchTerm.trim());
        setHasSearched(true);
    };

    const pagesVisited = currentPage * contactsPerPage;
    const displayContacts = filteredContacts.slice(
        pagesVisited,
        pagesVisited + contactsPerPage
    );
    const pageCount = Math.ceil(filteredContacts.length / contactsPerPage);

    const changePage = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };

    return (
        <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow-sm p-4 flex">
            <HamburgerMenu />
        </header>

        <main className="flex-grow container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 mt-4">
            Lista de Contatos
            </h1>

            <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-3xl flex gap-4 mb-8">
                <SearchBar
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Buscar por usuário, cidade, estado ou nome de exibição do endereço"
                />
                <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-md"
                >
                Buscar
                </button>
            </form>
            </div>

            {displayContacts.length > 0 ? (
            <>
                <ul className="space-y-4 max-w-2xl mx-auto">
                {displayContacts.map((contact: IContact) => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
                </ul>
                <Pagination pageCount={pageCount} onPageChange={changePage} />
            </>
            ) : (
            <p className="text-center text-gray-600">Não há nenhum contado adicionado no momento.</p>
            )}
        </main>
        </div>
    );
};

export default ContactsList;
