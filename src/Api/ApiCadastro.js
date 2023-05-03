// export const handleSubmit = async (name, email, password) => {
//   const response = await fetch('http://ec2-52-204-111-64.compute-1.amazonaws.com:8000/api/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ name, email, password }),
//   });
//   return response;
// };

export const handleSubmit = async (name, email, password) => {
  const response = await fetch('http://api.rsca.com.br:8000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  return response;
};
