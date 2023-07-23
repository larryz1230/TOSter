import React, { useState, useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { Container, Row, Col } from "react-bootstrap";
import "./upload.css";
import TypeTwo from "./TypeTwo.js";
import axios from "axios";
import ErrorMessage from "../ErrorMessage";
import errorUtils from "../errorUtils";

//TODO: send to db

const { Configuration, OpenAIApi } = require("openai");
const Upload = ({ onResponseArrayChange }) => {
  const [input, setInput] = useState("");
  const [c_input, setC] = useState("");
  const [responseArray, setResponseArray] = useState([]);
  const [error, setError] = useState(false);

  const [company, setCompany] = useState("");
  const [steps, setSteps] = useState([]);
  var bullet1, bullet2, bullet3, bullet4, bullet5;

  const [privacyNumber, setPrivacyNumber] = useState("");
  const [opt, setOpt] = useState("");

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
    //console.log(stepsArray);
    setSteps(stepsArray);

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
    setCompany(c_input);

    console.log(res.data.choices[0].message.content);
    setOpt(res.data.choices[0].message.content);
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
    setPrivacyNumber(res.data.choices[0].message.content);
  };

  useEffect(() => {
    const uploadData = async () => {
      if (steps.length > 0 && company && privacyNumber && opt) {
        const bullet1 = steps[0];
        const bullet2 = steps[1];
        const bullet3 = steps[2];
        const bullet4 = steps[3];
        const bullet5 = steps[4];

        console.log(bullet1);
        console.log(bullet2);
        console.log(bullet3);
        console.log(bullet4);
        console.log(bullet5);

        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };

          console.log("DATA PRE UPLOAD");
          console.log(company);
          console.log(steps);
          console.log(privacyNumber);
          console.log(opt);
          const { data } = await axios.post(
            "http://localhost:5000/api/companies",
            {
              company,
              b1: bullet1,
              b2: bullet2,
              b3: bullet3,
              b4: bullet4,
              b5: bullet5,
              pScore: privacyNumber,
              optout: opt,
            },
            config
          );

          localStorage.setItem("companyName", JSON.stringify(data));

          console.log("Done with upload.");
        } catch (error) {
          setError(error.response.data.message);
        }
      }
    };

    uploadData();
  }, [steps, company, privacyNumber, opt]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getSummary();
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
            <Container className="upload-content">
              <div className="white-bg d-flex flex-column justify-content-center align-items-center">
                <TypeTwo />
                <div className="choose-file-container">
                  {error && (
                    <ErrorMessage
                      variant="danger"
                      message="Error with Upload!">
                      {error}
                    </ErrorMessage>
                  )}{" "}
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
                  className="upload-upload-button button-container-upload"
                  onClick={handleUpload}>
                  Upload
                </button>
              </div>
            </Container>
          </Col>

          <Col>
            <Container className="upload-form-container">
              <form onSubmit={handleSubmit}>
                <div className="white-bg d-flex flex-column justify-content-center align-items-center">
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
                      }}></textarea>
                  </label>

                  <button
                    className="upload-submit-button button-container-upload"
                    type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </Container>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Upload;
