import React, { useEffect, useState } from 'react'
import "../styles/NotesContainer.css"
import { MdDelete } from "react-icons/md";

const NotesContainer = () => {

    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newObj = {
            title,
            body
        };

        setBody("");
        setTitle("");

        fetch("https://indoreators-backend.onrender.com/notes/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObj)
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log('res:', res);
                alert("Notes Will be added");
            })
            .catch((err) => {
                console.log('err:', err)
            });
    };


    const handleDelete = (id) => {
        fetch(`https://indoreators-backend.onrender.com/notes/delete/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((res) => console.log('res:', res))
            .catch((err) => console.log(err))
    }
    
    useEffect(() => {
        fetch("https://indoreators-backend.onrender.com/notes")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log('res:', res);
                setData(res);
            })
            .catch((err) => {
                console.log('err:', err);
            })
    }, [data]);


    return (
        <div className='notes-wrapper'>

            <div className='add-notes'>
                <form onSubmit={handleSubmit} type="submit">
                    <input type="text" value={title} placeholder='Write title of the Note' onChange={(e) => { setTitle(e.target.value) }} />
                    <input type="text" value={body} placeholder='Take a Note...' onChange={(e) => { setBody(e.target.value) }} />
                    <input type="submit" />
                </form>
            </div>


            <div className='notes-cards'>
                {

                    data && data.map((el) => {
                        return <div className='notes-card'>
                            <h1>{el.title}</h1>
                            <p>{el.body}</p>
                            <div className='delete-icon'>
                                <MdDelete onClick={() => handleDelete(el._id)} />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default NotesContainer