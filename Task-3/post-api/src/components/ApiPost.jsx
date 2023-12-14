import React, { useState } from 'react';

const ApiPost = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [responseData, setResponseData] = useState(null);

    const handlePostData = async () => {
        try {
            const res = await fetch('https://chimpu.xyz/api/post.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phonenumber: phoneNumber,
                }),
            });

            const headers = res.headers;
            // console.log('headers:', headers);
            setResponseData(headers);
        } catch (error) {
            console.log('error:', error);
        }
    };

    return React.createElement('div', null,
    
        React.createElement('label', null,
            'Phone Number:',
            React.createElement('input', {
                type: 'text',
                value: phoneNumber,
                onChange: (e) => setPhoneNumber(e.target.value),
            })
        ),

        React.createElement('button', { onClick: handlePostData }, 'Post Data'),
        responseData && React.createElement('div', null,
            React.createElement('h2', null, 'Data received in headers:'),
            React.createElement('pre', null, JSON.stringify(responseData, null, 2))
        )
    );
};

export default ApiPost;
