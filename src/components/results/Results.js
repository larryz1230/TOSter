import React from "react";
import { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import Modal from './Modal';
import './res.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

  
//var set = false;

function Results() {

    const location = useLocation();
  // Access the prop passed through the state object
    const c_name = location.state?.c_name || 'Default Value';

    console.log(c_name);

    const [isCollapsed, setCollapsed] = useState(true);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [set, setSet] = useState(false);

    const [comp, setComp] = useState(null);
    const [dataArray, setDataArray] = useState([]);
    const [pScore, setPScore] = useState(null);
    const [opt, setOpt] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if (comp && pScore && dataArray.length === 5 && opt) {
            setSet(true);
            console.log("Data is ready");
        } else {
            console.log(comp);
            console.log(pScore);
            console.log(dataArray);
            console.log(opt);
            console.log("Data is not ready yet.");
        }
    }, [comp, pScore, dataArray, opt])

    const toggleCollapse = () => {
      setCollapsed((prevCollapsed) => !prevCollapsed);
    };

    const fetchData = async () => {
        try {
            const config = {
              headers: {
                "Content-type": "application/json",
              }
            };
      
            setLoading(true);
      
            const { data } = await axios.post(
              "http://localhost:5000/api/companies/results",
              {
                company: c_name,
              },
              config
            );
            console.log("RECEIVED DATA:");
            console.log(data);
            localStorage.setItem("companyName", JSON.stringify(data));

            setComp(data._comp);
            if (data.b1 && data.b2 && data.b3 && data.b3 && data.b4 && data.b5) {
                const newArray = [data.b1, data.b2, data.b3, data.b4, data.b5];
                setDataArray(newArray);
            }
            setPScore(data.pScore);
            setOpt(data.optout);
      
            setLoading(false);
        } catch (error) {
            setError(error.response.data.message);
            setError(error.response?.data?.message || "An unexpected error occurred.");
        }
    };

    if (loading) {
        return (
            <Container><div>Loading ...</div></Container>
        )
    }

    else if (error) {
        return <div>Error: { error }</div>
    }

    else if (set) {
        return (
            <Container fluid className='upload-background'>
                <Container className='res-opacity-background'>
                    <Container>
                        <div>
                        <h1 className = 'heading'>Results For: {comp}</h1>
                        </div>

                        <Modal privrating = { pScore }></Modal>

                        

                        <div className="card">
                        <div className="card-header">
                            <b>TOS Summary</b>
                        </div>
                        <ul className="list-group list-group-flush" id="myList" style = {{borderRadius:24}}>
                            {/* Let React handle the rendering of list items */}
                            {dataArray.map((item, idx) => (
                                <li key={idx} className="list-group-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        </div>
                    </Container>

                    <Container>
                    <div>
                    <button className="res-button" type="button" onClick={toggleCollapse} style = {{position: 'relative', top: 20}}>
                        How Can I Opt Out?
                    </button>

                    <div className={`collapse ${isCollapsed ? '' : 'show'}`} id="collapseExample">
                        <div className="card card-body" style = {{position: 'relative', bottom: 30}}>
                        { opt }
                        </div>
                    </div>
                    </div>
                    </Container>       
                </Container>
            </Container>
        );
    }

}

export default Results;
