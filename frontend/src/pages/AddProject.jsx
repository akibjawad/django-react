import React from 'react';
import { useState} from "react";
import api from "../api";
import { useNavigate } from 'react-router-dom';
import "../styles/AddProject.css"
import Navbar from '../components/Navbar';

function AddProject() {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const navigate = useNavigate();

    const createProject = (e) => {
        // e.preventDefault();
        api
            .post("/api/projects/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Project created!");
                else alert("Failed to make project.");
                navigate("/")
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="project-container">
            <h1 className='heading' >Create a Project</h1>
            <form onSubmit={createProject}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default AddProject