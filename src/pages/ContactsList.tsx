import { useState, ChangeEvent, useEffect } from "react";
import { useFilteredContacts } from "../hooks/useFilteredContacts";
import SearchBar from "../components/SearchBar";
import { IContact } from "../interfaces/IContact";
import { toast } from "react-toastify";
import HamburgerMenu from "../components/HamburguerMenu";

const ContactsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  
  const filteredContacts = useFilteredContacts(searchedTerm);

  useEffect(() => {
    if (hasSearched && searchedTerm.trim()) {
      if (filteredContacts.length > 0) {
        toast.success(`${filteredContacts.length} contato(s) encontrado(s) para "${searchedTerm}"`);
      } else {
        toast.error(`Nenhum contato encontrado para "${searchedTerm}"`);
      }
      setHasSearched(false);
    }
  }, [filteredContacts, hasSearched, searchedTerm]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      toast.info("Digite um termo para busca!");
      return;
    }
    setSearchedTerm(searchTerm.trim());
    setHasSearched(true);
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

        {filteredContacts.length > 0 && (
          <ul className="space-y-4 max-w-2xl mx-auto">
            {filteredContacts.map((contact: IContact) => (
              <li
                key={contact.id}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 w-full"
              >
                <h2 className="text-lg font-semibold text-gray-900">
                  {contact.displayName}
                </h2>
                <p className="text-gray-600 text-sm">@{contact.username}</p>
                <div className="mt-2 text-xs text-gray-500">
                  <p>{contact.address.street}, {contact.address.neighborhood}</p>
                  <p>{contact.address.city} - {contact.address.state}</p>
                  <p>{contact.address.cep}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default ContactsList;