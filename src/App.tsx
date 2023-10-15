import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import Header from './Components/Header/Header';
import Gallery from './Pages/Gallery/Gallery';
import store from './store/store';

const queryClient = new QueryClient();
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Gallery />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
