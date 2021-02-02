import { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from 'store';
import { Header, Canvas, Footer } from 'components';

export const App: FC = () => (
  <Provider store={store}>
    <Header />
    <Canvas />
    <Footer />
  </Provider>
);
