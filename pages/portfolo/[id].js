import axios from 'axios';

import Layout from '../../components/Block/Layout';
import { BASE_URL } from '../../constants/api';
// import { portfolioById } from '../../queries';

const fetchPortfolios = async (id) => {
  const query = `query Portfolio(${id}){
    portfolio(id:"${id}"){
      _id,
     jobTitle,
      description
    }
  }`;
  const result = await axios.post(`${BASE_URL}`, { query });
  return result.data.data;
};
const PortofolioDetail = () => {
  return (
    <Layout>
      <div className="portfolio-detail">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">Some title</h1>
            <p className="lead">Some Job title</p>
            <p>
              <a className="btn btn-lg btn-success" href="#/" role="button">
                See Company
              </a>
            </p>
          </div>

          <div className="row marketing">
            <div className="col-lg-6">
              <h4 className="title">Location</h4>
              <p className="text">Some Location</p>

              <h4 className="title">Start Date</h4>
              <p className="text">Some Start Date</p>
            </div>

            <div className="col-lg-6">
              {/* TODO: days later... */}
              <h4 className="title">Days</h4>
              <p className="text">44</p>

              <h4 className="title">End Date</h4>
              <p className="text">Some End Date</p>
            </div>
            <div className="col-md-12">
              <hr />
              <h4 className="title">Description</h4>
              <p>
                Some Description lala la lalala lala lala la lalala lala lala la
                lalala lala...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const getStaticProps = async (context) => {
  console.log('context', context.params.id);
  const result = await fetchPortfolios(context.params.id);
  console.log('res', result);
  return { props: 'asadas' };
};
// export async function getStaticPaths() {
// return {
// paths: [],
// fallback: true
// };
// }

export default PortofolioDetail;
