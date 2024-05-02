import React, { useState } from 'react'
import ErrorDisplay from '../MessageDisplay/ErrorDisplay';

const Forgot = () => {
  const [error,setError] = useState('Forgot option will be Implement');

  return (
    <div>
      <ErrorDisplay error={error} setError={setError}/>
      Forgot option will be Implement
    </div>
  )
}

export default Forgot