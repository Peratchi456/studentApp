const API_URL = 'http://localhost:3001/apiget/student';

export const getAllStudents = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
