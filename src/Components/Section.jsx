// import React from 'react';
// import './Section.css';

// const Section = ({ id, title, content }) => {
//   return (
//     <section id={id} className="portfolio-section">
//       <div className="container">
//         <h2 className="section-title">{title}</h2>
//         <p className="section-content">{content}</p>
//       </div>
//     </section>
//   );
// };

// export default Section;


import React from 'react';

const Section = ({ title, content }) => {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-content">{content}</p>
      </div>
    </section>
  );
};

export default Section;
