import { useState } from "react";
import { IContactCard } from "../interfaces/IContact";
import { useContacts } from "../context/hooks/useContacts";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import { confirmAlert } from "../utils/confirmAlert";

const ContactCard: React.FC<IContactCard> = ({ contact }) => {
    const { updateContact, deleteContact } = useContacts();
    const [isEditing, setIsEditing] = useState(false);
    const [editedDisplayName, setEditedDisplayName] = useState(contact.displayName);

    const handleEditToggle = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        const trimmedDisplayName = editedDisplayName.trim();
        if (trimmedDisplayName && trimmedDisplayName !== contact.displayName) {
        updateContact(contact.id, trimmedDisplayName);
        toast.success("Contato atualizado com sucesso!");
        }
        setIsEditing(false);
    };

    const handleDelete = async () => {
        const isConfirmed = await confirmAlert({
            title: "Confirmar exclusão",
            text: "Tem certeza que deseja excluir este contato?",
        });
        if (isConfirmed) {
            deleteContact(contact.id);
            toast.success("Contato excluído com sucesso!");
        }
    };

    return (
        <li className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 w-full relative">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            {isEditing ? (
                <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={editedDisplayName}
                    onChange={(e) => setEditedDisplayName(e.target.value)}
                    className="text-lg font-semibold text-gray-900 p-1 border border-gray-300 rounded"
                />
                <FaSave
                    onClick={handleSave}
                    className="cursor-pointer text-green-500 hover:text-green-600"
                    size={20}
                />
                </div>
            ) : (
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                {contact.displayName}
                <FaEdit
                    onClick={handleEditToggle}
                    className="cursor-pointer text-blue-500 hover:text-blue-600"
                    size={18}
                />
                </h2>
            )}
            </div>
            <FaTrash
            onClick={handleDelete}
            className="cursor-pointer text-red-500 hover:text-red-600"
            size={18}
            />
        </div>

        <p className="text-gray-600 text-sm">@{contact.username}</p>
        <div className="mt-2 text-xs text-gray-500">
            <p>
            {contact.address.street}, {contact.address.neighborhood}
            </p>
            <p>
            {contact.address.city} - {contact.address.state}
            </p>
            <p>{contact.address.cep}</p>
        </div>
        </li>
    );
};

export default ContactCard;
