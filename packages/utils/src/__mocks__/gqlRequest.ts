export const gqlRequest = () => {
  return jest.fn(() => {
    console.log("mutate!");
    return Promise.resolve();
  });
};
