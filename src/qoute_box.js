import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'; 

export default function QouteBox() {
    const api_url = 'https://thesimpsonsquoteapi.glitch.me/quotes';

    const [qouteData, setData] = useState(null);

    const getapi = async () => {
        const response = await fetch(api_url);
        const data = await response.json();
        setData(data[0]);
    }
    
    useEffect(() => {
        getapi()
    },[])

    console.log(qouteData,'qoute data')

    if (!qouteData) {
        return <div>Loading ..</div>
    }
    const { quote,character,image } = qouteData;

    return (
        <div id="quote-box">
            <h3 id="text">{quote}</h3>
            <h4 id="author">- {character}</h4> 
            <div>
                <a id="tweet-qoute" target="_top" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(quote)}`}>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a id="tumblr-qoute">
                    <FontAwesomeIcon icon={faTumblr} />
                </a>
                <button id='new-qoute' onClick={getapi}>New qoute</button>
            </div>
            <img id='image' src={image} />
        </div>
    )
};


// https://x.com/intent/post?hashtags=quotes&related=freecodecamp&text=%22When%20I%20stand%20before%20God%20at%20the%20end%20of%20my%20life%2C%20I%20would%20hope%20that%20I%20would%20not%20have%20a%20single%20bit%20of%20talent%20left%20and%20could%20say%2C%20I%20used%20everything%20you%20gave%20me.%22%20Erma%20Bombeck

// https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Our%20lives%20begin%20to%20end%20the%20day%20we%20become%20silent%20about%20things%20that%20matter.%22%20Martin%20Luther%20King%20Jr.