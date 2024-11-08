import React, { useState, useEffect } from 'react';
import { ExternalLink, AlertCircle, Loader2 } from 'lucide-react';

const MessageDisplay = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/messages')
            .then(response => response.json())
            .then(data => {
                setMessages(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching messages:', error);
                setError('Failed to load messages');
                setLoading(false);
            });
    }, []);

    const handleClick = (lien) => {
        if (lien) {
            window.open(lien, '_blank', 'noopener noreferrer');
        }
    };

    if (loading) {
        return (
            <div className="loading-container">
                <Loader2 className="loading-icon" />
                <span>Loading messages from backend...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <AlertCircle className="error-icon" />
                <span>{error}</span>
            </div>
        );
    }

    return (
        <div className="messages-container">
            {messages.map((message, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(message.lien)}
                    className="message-button"
                >
                    <p className="message-text">
                        {message.message}
                    </p>
                    <ExternalLink className="external-icon"/>
                </button>
            ))}
            {messages.length === 0 && (
                <div className="empty-container">
                    <AlertCircle className="error-icon" />
                    <span>Aucun message disponible</span>
                </div>
            )}
        </div>
    );
};

export default MessageDisplay;