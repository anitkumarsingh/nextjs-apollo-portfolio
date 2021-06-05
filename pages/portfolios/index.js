/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';

import Navbar from '../../components/Block/Navbar';

export const PortfolioItems = ({ data }) => {
  return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row">
          {data &&
            data.map((p) => {
              return (
                <div className="col-md-4" key={p._id}>
                  <div className="card subtle-shadow no-border">
                    <div className="card-body">
                      <h5 className="card-title">{p.jobTitle}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Location {p.location}
                      </h6>
                      <p className="card-text fs-2">{p.description}</p>
                    </div>
                    <div className="card-footer no-border">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="col-md-12">
            <br />
            <br />
            <a href="/" className="btn btn-main bg-blue ttu">
              See More Portfolios
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

const fetchPortfolios = async () => {
  const query = `
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
  const result = await axios.post('http://localhost:3000/graphql', { query });
  return result.data.data;
};
const Portfolios = ({ portfolioData }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <PortfolioItems data={portfolioData} />
      </div>
    </>
  );
};
// Portfolios.getInitialProps = async () => {
// return {
// props: {
// portfolioData: 'Some data...'
// }
// };
//
// };
export const getStaticProps = async () => {
  const res = await fetchPortfolios();
  const { portfolios } = res;

  return {
    props: {
      portfolioData: portfolios
    }
  };
};
export default Portfolios;
