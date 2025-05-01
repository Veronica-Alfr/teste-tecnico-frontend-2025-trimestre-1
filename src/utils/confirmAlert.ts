import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { IConfirmAlert } from "../interfaces/IConfirmAlert";

const MySwal = withReactContent(Swal);

export const confirmAlert = async (options: IConfirmAlert): Promise<boolean> => {
  const { title, text, confirmButtonText = "Sim", cancelButtonText = "Não", icon = "warning" } = options;

  const result = await MySwal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText,
    cancelButtonText,
  });

  return result.isConfirmed;
};
