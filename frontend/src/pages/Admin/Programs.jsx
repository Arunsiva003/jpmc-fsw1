import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiPlus, FiX } from 'react-icons/fi'; // Importing icons from React Icons

const ProgramsDashboard = () => {
    const [programs, setPrograms] = useState([]);
    const [newProgramName, setNewProgramName] = useState('');
    const [newProgramDescription, setNewProgramDescription] = useState('');
    const [showIcon, setShowIcon] = useState(false); // State to toggle icon visibility

    useEffect(() => {
        const fetchPrograms = async () => {
            const { data } = await axios.get('https://jpmc-fsw1.onrender.com/programs');
            setPrograms(data);
            if (data.length === 0) {
                setShowIcon(true); // Show icon if no data is found
            } else {
                setShowIcon(false);
            }
        };
        fetchPrograms();
    }, []);

    const handleAddProgram = async () => {
        try {
            setPrograms([...programs, { name: newProgramName, description: newProgramDescription }]);
            const { data } = await axios.post('https://jpmc-fsw1.onrender.com/programs', { name: newProgramName, description: newProgramDescription });
            setNewProgramName('');
            setNewProgramDescription('');
            // window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteProgram = async (id) => {
        try {
            await axios.delete(`https://jpmc-fsw1.onrender.com/programs/${id}`);
            setPrograms(programs.filter(program => program.id!== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ padding: '20px', borderRadius: '8px', marginTop:'10%' }}>
            <h2 style={{ marginBottom: '20px' }}>Programs Dashboard</h2>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={newProgramName}
                    onChange={(e) => setNewProgramName(e.target.value)}
                    placeholder="Program Name"
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <textarea
                    value={newProgramDescription}
                    onChange={(e) => setNewProgramDescription(e.target.value)}
                    placeholder="Program Description"
                    style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '10px' }}
                />
                <button onClick={handleAddProgram} style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer', marginTop: '10px' }}>
                    Add Program
                </button>
            </div>
            {programs.length === 0 && showIcon && (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <FiPlus size={48} color="#dc3545" /> {/* Displaying an icon when no data is found */}
                </div>
            )}
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {programs.map(program => (
                    <li key={program.id} style={{ marginBottom: '10px', padding: '10px', border:'2px solid black', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <strong>{program.name}</strong> - {program.description}
                        </div>
                        <button onClick={() => handleDeleteProgram(program.id)} style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProgramsDashboard;
