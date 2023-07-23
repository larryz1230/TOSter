import React, { useState, useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { Container, Row, Col } from "react-bootstrap";
import "./upload.css";
import TypeTwo from "./TypeTwo.js";

//TODO: send to db

const { Configuration, OpenAIApi } = require("openai");
const Upload = ({ onResponseArrayChange }) => {
  const [input, setInput] = useState("");
  const [c_input, setC] = useState("");
  const [responseArray, setResponseArray] = useState([]);

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPEN_API_KEY,
  });
  delete configuration.baseOptions.headers["User-Agent"];
  const openai = new OpenAIApi(configuration);

  const getSummary = async () => {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `summarize the most concerning points of this contract into 5 hyphenated bullet points: ${input}`,
        },
      ],
    });

    console.log(res.data.choices[0].message.content);

    const text = res.data.choices[0].message.content;

    const sentences = text.split("- ");

    // // Create a new array where each index corresponds to a step
    const stepsArray = sentences.map(
      (sentence, index) => `${index}. ${sentence}`
    );
    stepsArray.shift();

    // // Output the array
    console.log(stepsArray);

    optOut();
  };

  const optOut = async () => {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `how can delete: ${c_input} account in less than 5 steps`,
        },
      ],
    });

    console.log(res.data.choices[0].message.content);
    rateSafety();
  };

  const rateSafety = async () => {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Based on historical information and general perception, rate ${c_input}'s privacy safety on a scale from 1 to 10, giving only a numerical response`,
        },
      ],
    });

    console.log(res.data.choices[0].message.content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getSummary();
    // console.log(c_input);
    // optOut();
    // document.getElementById('rec').style.display = "block";
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleCin = (event) => {
    setC(event.target.value);
  };

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
          const numpages = pdf.numPages;
          console.log(numpages);
          // Read the text content of the first page

          var firstPage = await pdf.getPage(1);
          var textContent = await firstPage.getTextContent();
          var pdfText = "";

          for (let i = 1; i <= 6 && i <= numpages; i++) {
            console.log(i);
            firstPage = await pdf.getPage(i);
            textContent = await firstPage.getTextContent();
            pdfText += textContent.items.map((item) => item.str).join(" ");
          }

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
    <Container
      fluid
      className="upload-background">
      <div>
        <Row>
          <Col>
            <div className="white-bg">
              <Container className="upload-content">
                <TypeTwo />
                <div className="choose-file-container">
                  {" "}
                  {/*was originally mb-3*/}
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    style={{ maxWidth: "250px", borderRadius: "10px" }}
                    ref={fileInputRef}
                  />
                </div>
                <button
                  type="button"
                  className="upload-upload-button"
                  onClick={handleUpload}>
                  Upload
                </button>
              </Container>
            </div>
          </Col>

          <Col>
            <div className="white-bg">
              <Container className="upload-form-container">
                <form onSubmit={handleSubmit}>
                  <label>
                    <input
                      className="upload-company-container"
                      type="text"
                      placeholder="Company Name"
                      value={c_input}
                      onChange={handleCin}></input>
                  </label>

                  <label>
                    <textarea
                      className="upload-textform-container"
                      placeholder="Enter a prompt"
                      type="text"
                      class="text-break"
                      cols="50"
                      rows="15"
                      value={input}
                      onChange={handleInputChange}
                      style={{
                        borderRadius: "10px",
                        resize: "none",
                        padding: "12px",
                        position: "relative",
                        right: "35px",
                      }}></textarea>
                  </label>

                  <button
                    className="upload-submit-button"
                    type="submit">
                    Submit
                  </button>
                </form>
              </Container>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Upload;
