import React, { useEffect, useState } from 'react';

const DonationDashboard = () => {
    const [donations, setDonations] = useState([]);
    
    useEffect(() => {
        fetch('https://jpmc-fsw1.onrender.com/donations')
           .then(response => response.json())
           .then(data => setDonations(data));
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
        marginTop: "20px",
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
            <table style={tableStyle}>
                <thead>
                    <tr style={headerStyle}>
                        <th style={cellStyle}>Donation ID</th>
                        <th style={cellStyle}>Donor Name</th>
                        <th style={cellStyle}>Amount</th>
                        <th style={cellStyle}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {donations.map(donation => (
                        <tr style={rowStyle} key={donation.id}>
                            <td style={cellStyle}>{donation.id}</td>
                            <td style={cellStyle}>{donation.donorName}</td>
                            <td style={cellStyle}>{donation.amount}</td>
                            <td style={cellStyle}>{donation.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DonationDashboard;
