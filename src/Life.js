import React, { useEffect } from 'react';

function LifecycleDemo() {
  useEffect(() => {
    console.log('Component Mounted');
    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  return <div>Lifecycle Demo</div>;
}
export default LifecycleDemo;