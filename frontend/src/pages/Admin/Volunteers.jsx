import React, { useEffect, useState } from 'react';

const VolunteerTable = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('https://jpmc-fsw1.onrender.com/volunteers')
         .then(response => response.json())
         .then(data => {console.log(data);setVolunteers(data)});
    }, []);

    const container = {
        // margin:"auto",
        marginTop: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh"
    };

    const tableStyle = {
        border: "1px solid #333",
        width: "80%",
        textAlign: "center",
        marginBottom: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "5px"
    };

    const headerStyle = {
        backgroundColor: "#f2f2f2",
        fontWeight: "bold",
        color: "#333",
        padding: "10px 0"
    };

    const rowStyle = {
        "&:nth-child(even)": {
            backgroundColor: "#f9f9f9"
        },
        "&:hover": {
            backgroundColor: "#e6e6e6"
        }
    };

    const cellStyle = {
        padding: "10px",
        border: "1px solid #ddd",
        textAlign: "center"
    };

    return (
        <div style={container}>
            <h1>Volunteers</h1>
            <table style={tableStyle}>
                <thead>
                    <tr style={headerStyle}>
                        <th style={cellStyle}>Name</th>
                        <th style={cellStyle}>Email</th>
                        <th style={cellStyle}>Mobile Number</th>
                        <th style={cellStyle}>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {volunteers.map(volunteer => (
                        <tr style={rowStyle} key={volunteer.id}>
                            <td style={cellStyle}>{volunteer.name}</td>
                            <td style={cellStyle}>{volunteer.email}</td>
                            <td style={cellStyle}>{volunteer.mobileNumber}</td>
                            <td style={cellStyle}>{volunteer.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VolunteerTable;
