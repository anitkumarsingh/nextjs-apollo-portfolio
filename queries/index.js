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

export const portfolio = `query Portfolio{
  portfolio(id:"asd213ad23s"){
    _id,
   jobTitle,
    description
  }
}`;
