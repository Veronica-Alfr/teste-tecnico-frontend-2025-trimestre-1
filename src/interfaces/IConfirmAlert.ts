export interface IConfirmAlert {
    title: string;
    text: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    icon?: "warning" | "info" | "error" | "success" | "question";
};
