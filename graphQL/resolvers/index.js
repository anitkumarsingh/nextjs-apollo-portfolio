const { data } = require('../data');

exports.portfoliosResolvers = {
  hello: () => 'Hello world!',
  portfolios: () => data,
  portfolio: ({ id }) => {
    const portfolio = data.find((p) => p._id === id);
    return portfolio;
  }
};
