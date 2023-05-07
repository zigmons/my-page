// DownloadApi.js
export const downloadFile = async (fileId) => {
    const response = await fetch(`https://bcux7mgh1m.execute-api.us-east-1.amazonaws.com/dev/api/download/${fileId}`, {
      method: 'GET',
      
    });
    
    return response;
  };
  
