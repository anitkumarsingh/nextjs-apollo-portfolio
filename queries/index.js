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

export const portfolioById = (id) => {
  return `query Portfolio(${id}){
    portfolio(id:"${id}"){
      _id,
     jobTitle,
      description
    }
  }`;
};
