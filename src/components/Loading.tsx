import { FunctionComponent } from 'react';

interface ILoadingProps {
  loading: boolean;
  children: React.ReactNode;
}

const Loading: FunctionComponent<ILoadingProps> = (props) => {
  const { loading } = props;

  if (loading) {
    return <>Loading...</>;
  }

  return <>{props.children}</>;
};

export default Loading;
