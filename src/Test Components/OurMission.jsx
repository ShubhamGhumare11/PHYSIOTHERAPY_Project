

// import React from 'react';

// const OurMission = () => {
//     const styles = {
//         container: {
//             margin: 50,
//             padding: 0,
//             backgroundColor: '#F55937',
//             color: '#EEE7E6',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'flex-start',
//             alignItems: 'center',
//             height: '80vh',
//             textAlign: 'center',
//             fontFamily: 'Arial, sans-serif',
//         },
//         content: {
//             marginTop: '20px',
//             maxWidth: '80%',
//         },
//         heading: {
//             fontSize: '1.8rem',
//             marginBottom: '20px',
//         },
//         paragraph: {
//             fontSize: '1.2rem',
//             lineHeight: '1.5',
//              color: 'black',

//         },
//         image: {
//             width: '70%', // Ensures the image takes the full width
//             height: 'auto',
//             maxWidth: '1800px', // Optional: limits the maximum width of the image
//             marginTop: '60px', // Adds space between the text and the image
//             marginBottom: '20px', // Optional: adds space below the image
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.content}>
//                 <h1 style={styles.heading}>OUR  MISSION</h1>
//                 <p style={styles.paragraphs}>
//                     To enable people to be mentally & physically strong, so they can live their <br/>
                    
//                 </p>
//                 <p style={styles.paragraph}>
//                 Dream Lives
//                 </p>
//                 <p style={styles.paragraphs}>
//                     We are committed to educating & helping people live a life free of pain, injury & limitations.
//                 </p>
//             </div>
//             <img 
//                 src="https://cdn.prod.website-files.com/65607c1240e93c26b8f50172/668f8d277fe17ee7c44ac077_We%20are%20Granimals.webp" 
//                 alt="Granimals" 
//                 style={styles.image} 
//             />
//         </div>
//     );
// };

// export default OurMission;


import React from 'react';

const OurMission = () => {
    const styles = {
        container: {
            margin: 50,
            padding: 0,
            backgroundColor: '#F55937',
            color: '#EEE7E6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '80vh',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
        },
        content: {
            marginTop: '20px',
            maxWidth: '80%',
        },
        heading: {
            fontSize: '1.8rem',
            marginBottom: '20px',
        },
        paragraphBoldWhite: {
            fontSize: '1.7rem',
            lineHeight: '1.5',
            color: 'white',
            fontWeight: 'bold',
        },
        paragraphBoldBlack: {
            fontSize: '1.6rem',
            lineHeight: '1.5',
            color: 'black',
            fontWeight: 'bold',
        },
        paragraphSmallWhite: {
            fontSize: '1.0rem',
            lineHeight: '1.5',
            color: 'white',
        },
        image: {
            width: '70%', // Ensures the image takes the full width
            height: 'auto',
            maxWidth: '1800px', // Optional: limits the maximum width of the image
            marginTop: '30px', // Adds space between the text and the image
            marginBottom: '10px', // Optional: adds space below the image
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>OUR MISSION</h1>
                <p style={styles.paragraphBoldWhite}>
                    To enable people to be mentally &  physically strong, so they can live their <br />
                </p>
                <p style={styles.paragraphBoldBlack}>
                    Dream Lives
                </p>
                <p style={styles.paragraphSmallWhite}>
                    We are committed to educating & helping people live a life free of pain, injury & limitations.
                </p>
            </div>
            <img
                src="https://cdn.prod.website-files.com/65607c1240e93c26b8f50172/668f8d277fe17ee7c44ac077_We%20are%20Granimals.webp"
                alt="Granimals"
                style={styles.image}
            />
        </div>
    );
};

export default OurMission;


