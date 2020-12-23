import Container from 'react-bootstrap/Container';
import Todos from "./components/Todo/Todos";
import Header from './components/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';
import {DATA} from './data';

function App() {
  return (
    <div>
    <Header />
    <Container>
      <Row className="bg-light">
        <Col sm={12} md={{ span: 8, offset: 2 }}>
          <Todos tasks={DATA} />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
