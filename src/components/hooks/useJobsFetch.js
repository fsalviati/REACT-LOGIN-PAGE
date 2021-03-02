import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useJobsFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [error, setError] = useState(false);

  const fetchJobs = async (endpoint) => {
    setError(false);
    try {
      if (refresh) {
        const result = await axios.get(endpoint);
        //console.log(result.data);
        setJobs(result.data);
        setRefresh(false);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchJobs(
      'http://JavaReesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/getalljobboardmaster'
    );
  }, [refresh]);

  return [{ jobs, error }, fetchJobs];
};
