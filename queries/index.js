export const query = `
  query Portfolios {
    portfolios {
      _id,
      jobTitle ,
      location ,
      experienceCount,
      description,
      isCurrentlyEmployee
    }}
`;
