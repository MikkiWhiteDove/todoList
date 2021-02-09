const handleErrors = (error) => {
    // eslint-disable-next-line no-console
    console.error('[API]', error);
    throw error;
  };
  
  export default handleErrors;
  