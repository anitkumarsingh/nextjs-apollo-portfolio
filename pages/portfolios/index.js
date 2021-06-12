/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import Link from 'next/link';

import Navbar from '../../components/Block/Navbar';
import PortfolioCard from '../../components/Common/Portfolio/Card';
import { BASE_URL } from '../../constants/api';
import { query } from '../../queries';

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
                  <Link href="/portfolio/[id]" as={`/portfolio/${p._id}`}>
                    <a className="card-link">
                      <PortfolioCard p={p} />
                    </a>
                  </Link>
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
  const result = await axios.post(`${BASE_URL}`, { query });
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
