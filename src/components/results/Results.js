import React from 'react'
import { Container } from 'react-bootstrap';
import './res.css'

const privrating = "5";

function Results() {
    return (
        <Container>
            <h1>Results</h1>

            <label for="customRange3" class="form-label">Privacy Rating: {privrating}/10</label>
            <input disabled="true" type="range" class="form-range" min="0" max="10" step="1" id="customRange3" value={privrating}></input>

            

            <div class="card" >
            <div class="card-header">
                TOS Summary
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">1. qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq</li>
                <li class="list-group-item">2. qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq</li>
                <li class="list-group-item">3. qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq</li>
                <li class="list-group-item">4. qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq</li>
                <li class="list-group-item">5. qwdkqw qwdjkwqjd qwjkdjwq q djwd qwd kqwdhjqwkh djkqhkdqdjwhq</li>
            </ul>
            </div>
        </Container>

    );
}

export default Results;