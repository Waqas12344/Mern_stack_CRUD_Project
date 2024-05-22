import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    const getSingleUser = async () => {
        try {
            const response = await fetch(`http://localhost:5000/${id}`);
            const result = await response.json();

            if (!response.ok) {
                setError(result.error);
            } else {
                setError("");
                setName(result.name);
                setEmail(result.email);
                setAge(result.age);
            }
        } catch (error) {
            setError("An error occurred while fetching the user data.");
        }
    };

    useEffect(() => {
        getSingleUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedUser = { name, email, age };

        try {
            const response = await fetch(`http://localhost:5000/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            });
            const result = await response.json();

            if (!response.ok) {
                setError(result.error);
            } else {
                setError("");
                navigate('/all'); // Redirect to the homepage or user list
            }
        } catch (error) {
            setError("An error occurred while updating the user data.");
        }
    };

    return (
        <div className='container my-2'>
            {error && <div className="alert alert-danger">{error}</div>}
            <h2 className='text-center'>Update the data</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Update;
