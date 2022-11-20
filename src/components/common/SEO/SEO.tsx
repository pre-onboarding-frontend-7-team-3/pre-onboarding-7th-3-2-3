import Helmet from 'react-helmet';

type Props = {
  title: string;
};

const SEO = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="robots" content="noindex" />
    </Helmet>
  );
};

export default SEO;
