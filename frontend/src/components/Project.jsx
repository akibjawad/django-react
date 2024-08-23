import React from "react";
import "../styles/Project.css"

function Project({ project, onDelete }) {
    const formattedDate = new Date(project.created_at).toLocaleDateString("en-US")

    return (
        <div className="project-container">
            <p className="project-title">{project.title}</p>
            <p className="project-content">{project.content}</p>
            <p className="project-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(project.id)}>
                Delete
            </button>
        </div>
    );
}

export default Project
