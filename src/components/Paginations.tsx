import React from "react";
import ReactPaginate from "react-paginate";
import { IPagination } from "../interfaces/IPagination";

const Pagination: React.FC<IPagination> = ({ pageCount, onPageChange }) => {
    return (
        <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Próximo"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={"pagination flex justify-center gap-2 mt-6"}
        pageClassName={"px-3 py-1 border rounded"}
        activeClassName={"bg-blue-600 text-white"}
        previousClassName={"px-3 py-1 border rounded"}
        nextClassName={"px-3 py-1 border rounded"}
        disabledClassName={"opacity-50 cursor-not-allowed"}
        />
    );
};

export default Pagination;
