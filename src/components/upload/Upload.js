import React, { useState, useEffect, useRef  } from 'react';
import { Container } from 'react-bootstrap';

import * as pdfjsLib from "pdfjs-dist";

//todo: add loading, parse response, send to db

const { Configuration, OpenAIApi } = require("openai");
const Upload = ({ onResponseArrayChange }) => {


  const [input, setInput] = useState('');
  const [response, setResponse] = useState("");
  const [responseArray, setResponseArray] = useState([]);

  const configuration = new Configuration({

    apiKey: "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",

  });
  delete configuration.baseOptions.headers['User-Agent'];
  const openai = new OpenAIApi(configuration);

  const handleSubmit  = async (e) => {
    e.preventDefault();
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: `summarize the most concerning points of this contract into 5 bullet points: ${input}`}]
    });

    console.log(res.data.choices[0].message.content);
    setResponse(res.data.choices[0].message.content);


    document.getElementById('rec').style.display = "block";
  }
  
  const handleInputChange = (event) => {
    setInput(event.target.value);
  }


  const fileInputRef = useRef(null);

  const handleUpload = async () => {
    const file = fileInputRef.current.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        const pdfData = event.target.result;

        try {
          // Initialize the PDFJS library
            pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;
          const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;

          // Read the text content of the first page
          const firstPage = await pdf.getPage(1);
          const textContent = await firstPage.getTextContent();
          const pdfText = textContent.items.map((item) => item.str).join(" ");

          // Now you have the PDF content as a string
          console.log(pdfText);
          setInput(pdfText);
        } catch (error) {
          console.error("Error reading PDF:", error);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };





  return (

    <Container>
      <div className="mb-3">
      <label htmlFor="formFile" className="form-label">
        Default file input example
      </label>
      <input
        className="form-control"
        type="file"
        id="formFile"
        style={{ maxWidth: "250px" }}
        ref={fileInputRef}
      />
      <button type="button" className="btn btn-primary" onClick={handleUpload}>
        Upload
      </button>
    </div>

      <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input placeholder='Enter a prompt' type="text" value= {input} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p id="rec"> {response}</p>
    </div>
    </Container>

    
  );
}

export default Upload;