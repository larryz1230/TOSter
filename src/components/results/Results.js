import React from 'react'
import { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import Modal from './Modal';
import './res.css'

  
var set = false;

function Results() {

    const [isCollapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
      setCollapsed((prevCollapsed) => !prevCollapsed);
    };

    useEffect(() => {
        // Your JavaScript code for populating the list goes here
    
        // Your array with values

        console.log("called useeffect");
        if (!set){
            const myArray = [
            "qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq",
            "qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq",
            "qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq",
            "qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq",
            "qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq"
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
                    <h1 className = 'heading'>Results For: Company Name</h1>

                    <Modal></Modal>

                    

                    <div class="card" >
                    <div class="card-header">
                        TOS Summary
                    </div>
                    <ul class="list-group list-group-flush" id="myList">

                    </ul>
                    </div>
                </Container>

                <Container>
                <div>
                <button className="btn btn-primary" type="button" onClick={toggleCollapse}>
                    How Can I Opt Out?
                </button>

                <div className={`collapse ${isCollapsed ? '' : 'show'}`} id="collapseExample">
                    <div className="card card-body">
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