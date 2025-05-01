export interface IPagination {
    pageCount: number;
    onPageChange: ({ selected }: { selected: number }) => void;
};
