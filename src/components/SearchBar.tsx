import { ISearchBar } from "../interfaces/ISearchBar";

const SearchBar: React.FC<ISearchBar> = ({ value, onChange, placeholder }) => {
    return (
        <div className="flex-1">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-6 py-3 text-md border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
        </div>
    );
};

export default SearchBar;