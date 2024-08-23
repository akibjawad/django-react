import React from "react";
import "../styles/Project.css"

function Project({ project, onDelete }) {
    const formattedDate = new Date(project.created_at).toLocaleDateString("en-US")

    const handleClick = (url) => {
        if (url!='#') {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="project-container">
            <p className="project-title">{project.title}</p>
            <p className="project-content">{project.content}</p>

            <p className="project-date">{formattedDate}</p>
            {/* <p>{project.giturl} </p> */}
            <button className="github-button" onClick={() => handleClick(project.giturl)}>
                View on GitHub
            </button>
            <button className="delete-button" onClick={() => onDelete(project.id)}>
                Delete
            </button>
        </div>
    );
}

export default Project
