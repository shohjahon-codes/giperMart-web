import { useMutation } from '@tanstack/react-query';

export const useRegisterUser = () => {
  return useMutation({
    mutationKey: 'registerUser',
    mutationFn: async (newUser) => {
      const response = await fetch('https://backend-62qa.onrender.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        const errorBody = await response.text();
  console.error('Error response body:', errorBody);
  throw new Error('Could not register user');
      }
      return response.json();
    }
  });
};
