import React from 'react';

const OurMission = () => {
    const styles = {
        container: {
            margin: 0,
            padding: 0,
            backgroundColor: 'orange',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
        },
        content: {
            marginTop: '20px',
            maxWidth: '80%',
        },
        heading: {
            fontSize: '3.5rem',
            marginBottom: '20px',
        },
        paragraph: {
            fontSize: '1.2rem',
            lineHeight: '1.5',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>Our Mission</h1>
                <p style={styles.paragraph}>
                    To enable people to be mentally & physically strong, so they can live their Dream Lives.
                </p>
                <p style={styles.paragraph}>
                    We are committed to educating & helping people live a life free of pain, injury & limitations.
                </p>
            </div>
        </div>
    );
};

export default OurMission;

