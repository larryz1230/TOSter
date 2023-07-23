import React from 'react'
import { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import Modal from './Modal';
import './res.css'
import { useLocation } from 'react-router-dom';

  
var set = false;

function Results() {

    const location = useLocation();

  // Access the prop passed through the state object
    const c_name = location.state?.c_name || 'Default Value';

    console.log(c_name);

    const [isCollapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
      setCollapsed((prevCollapsed) => !prevCollapsed);
    };

    useEffect(() => {
        // Your JavaScript code for populating the list goes here
    
        // Your array with values

        console.log("called useeffect");
        if (!set){

            //insert here????
            const myArray = [
            "qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq",
            "qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq",
            "qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq",
            "qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq",
            "Frank Wang"
            ];
        
            // Get a reference to the ul element
            const ul = document.getElementById("myList");
        
            // Loop through the array and create <li> elements with the array values
            for (let i = 0; i < myArray.length; i++) {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            li.textContent = (i + 1) + ". " + myArray[i];
            ul.appendChild(li);
            }
            set = true;
            
        }
      }, []); 

    return (

        

        <Container fluid className='upload-background'>
            <Container className='res-opacity-background'>
                <Container>
                    <div>
                    <h1 className = 'heading'>Results For: Company Name</h1>
                    </div>

                    <Modal></Modal>

                    

                    <div class="card">
                    <div class="card-header">
                        <b>TOS Summary</b>
                    </div>
                    <ul class="list-group list-group-flush" id="myList" style = {{borderradius:24}}>

                    </ul>
                    </div>
                </Container>

                <Container>
                <div>
                <button className="res-button" type="button" onClick={toggleCollapse} style = {{position: 'relative', 
                top: 20}}>
                    How Can I Opt Out?
                </button>

                <div className={`collapse ${isCollapsed ? '' : 'show'}`} id="collapseExample">
                    <div className="card card-body" style = {{position: 'relative', bottom: 30}}>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>
                </div>
                </Container>


                
            </Container>
        </Container>

    );
}

export default Results;