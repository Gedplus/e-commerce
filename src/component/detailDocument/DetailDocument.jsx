import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";

import { Link,  useParams } from 'react-router-dom';
import { getDocument } from "../../state/api";
import { pdfjs } from "react-pdf";
import Categories from "../document/categorie";
pdfjs.GlobalWorkerOptions.workerSrc =  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function DetailDoc() {
  const { id } = useParams();
  const [Documents, setDocument] = useState("");
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
const [file, setfile] = useState("");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  useEffect(() => {
    const loadPackDetails = async() => {
        const response = await getDocument(id);
        setDocument(response.data);
      setfile(`https://api.bibintunisie.com/public/files/${response.data.document}`)
    }
    loadPackDetails();
  }, []);
  console.log("file" ,file)

  return (
    <><section className='shop-items ' >
    <div className='container '> 


     
      
       
      
    <div className='container' >
    <div className='shop-details ' style={{paddingTop:"30px"}}>
    <div className="pdf-div">
      
      {file== "" ?(<></>):(<>      <Document       file={`https://api.bibintunisie.com/public/files/${Documents.document}`} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <Page
             
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className	="pdf-page"
              />
            );
          })}
      </Document></>)}

   
    </div>

        </div>
     
    </div>

    </div>
</section>

</>
   
  );
}
export default DetailDoc;