import { useState, useEffect } from "react";
import api from "../api";
import "../styles/Home.css"
import Project from "../components/Project";
import Navbar from "../components/Navbar";

function Home() {
    const [projects, setProjects] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = () => {
        api
            .get("/api/projects/")
            .then((res) => res.data)
            .then((data) => {
                setProjects(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteProject = (id) => {
        api
            .delete(`/api/projects/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Project deleted!");
                else alert("Failed to delete Project.");
                getProjects();
            })
            .catch((error) => alert(error));
    };

    const createProject = (e) => {
        e.preventDefault();
        api
            .post("/api/projects/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Project created!");
                else alert("Failed to make project.");
                getProjects();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Navbar />
            <div>
                <h2>Projects</h2>
                {projects.map((project) => (
                    <Project project={project} onDelete={deleteProject} key={project.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
