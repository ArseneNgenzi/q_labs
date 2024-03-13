'use client'

import React, { useState, useEffect } from 'react';

const Loading: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: loading ? 'block' : 'none', position: 'fixed', top: 0, overflow: 'hidden' ,left: 0, width: '100%', height: '100%', backgroundColor: '#293241', zIndex: 9999 }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <h2>Loading...</h2>
        {/* You can customize the loading spinner or message as needed */}
      </div>
    </div>
  );
};

export default Loading;