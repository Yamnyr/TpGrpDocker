import React, { useState, useEffect } from 'react';

function MessageDisplay() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/messages/1')
            .then(response => response.json())
            .then(data => {
                setMessage(data.message);
            })
            .catch(error => {
                console.error('Error fetching the message:', error);
            });
    }, []);

    return (
        <p>{message ? message : 'Loading message from backend...'}</p>
    );
}

export default MessageDisplay;
