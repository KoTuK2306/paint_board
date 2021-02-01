import { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from 'store/store';
import { Header, Canvas } from 'components';

export const App: FC = () => (
  <Provider store={store}>
    <Header />
    <Canvas />
  </Provider>
);
