import { useRouter } from 'next/router';

import Layout from '../../../components/Block/Layout';

const PortofolioDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return <Layout>This is detail page with ID:{id}</Layout>;
};
export default PortofolioDetail;
