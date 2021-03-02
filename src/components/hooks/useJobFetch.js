import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useJobFetch = (jobId) => {
  const [job, setJob] = useState({});
  const [error, setError] = useState(false);

  const fetchJob = async (jobId) => {
    setError(false);
    try {
      const result = await axios.get(
        'http://JavaReesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/job/' +
          jobId
      );

      setJob(result.data);
    } catch (error) {
      setError(error);
    }
  };

  return [{ job, error }, fetchJob];
};
