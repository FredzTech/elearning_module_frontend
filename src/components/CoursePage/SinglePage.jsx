import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const SinglePage = ({ pdf }) => {
  // USING AN EXTERNAL WORKER FILE
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  // NECESSARY FOR SPINNING UP THE LIBRARY
  //======================================
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  // CONTROLS FOR NAVIGATING BACK AND FORTH
  //=======================+++++============
  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document
        file={pdf}
        // options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="debug flex flex-row items-center mx-auto">
        <button
          type="button"
          className="button w-32"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <p className=" mx-4">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>

        <button
          type="button"
          className="button w-32"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SinglePage;
