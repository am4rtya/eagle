import React from 'react';

const MainBody = () => {
  const randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo at neque bibendum vestibulum. Integer semper eleifend faucibus. Nullam hendrerit, velit sit amet iaculis sodales, quam ex suscipit urna, nec maximus justo risus id lectus.";
  
  return (
    <div className="main-body">
      <h2>Random Text</h2>
      <p>{randomText}</p>
    </div>
  );
};

export default MainBody;
