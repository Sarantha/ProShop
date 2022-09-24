import Headers from "./components/Headers";
import Footer from "./components/Footer";

import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Headers />
      <main className="py-3">
        <Container>
          <h1>Welcome to the ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
