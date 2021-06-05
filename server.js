const express = require('express');
const next = require('next');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const data = [
  {
    _id: 'asd213adqww23s',
    jobTitle: 'Job in India',
    location: 'Bengaluru',
    description: 'This is nice job',
    isCurrentlyEmployee: true,
    experienceCount: 123
  },
  {
    _id: 'asd213ad23s',
    jobTitle: 'Job in Canada',
    location: 'Canada',
    description: 'This is nice job',
    isCurrentlyEmployee: true,
    experienceCount: 123
  },
  {
    _id: 'asd213adsdfsd23s',
    jobTitle: 'Job in Toronto',
    location: 'Toronto',
    description: 'This is nice job',
    isCurrentlyEmployee: false,
    experienceCount: 123
  }
];

app.prepare().then(() => {
  const server = express();
  const schema = buildSchema(`
    type Portfolios{
      _id:ID,
      jobTitle:String,
      location:String,
      experienceCount:Int
      description:String,
      isCurrentlyEmployee:Boolean

    }
    type Query {
      portfolios:[Portfolios]
      portfolio(id:ID):Portfolios
    }
  `);

  const root = {
    hello: () => 'Hello world!',
    portfolios: () => data,
    portfolio: ({ id }) => {
      const portfolio = data.find((p) => p._id === id);
      return portfolio;
    }
  };
  server.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true
    })
  );

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
