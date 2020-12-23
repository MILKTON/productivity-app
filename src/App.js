import Container from 'react-bootstrap/Container';
import Todos from "./components/Todo/Todos";
import Header from './components/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';

const DATA = [
  { id: "todo-0", name: "Eatss", seconds:"15", completed: true },
  { id: "todo-1", name: "Sleepss", seconds:"20", completed: false },
  { id: "todo-12", name: "reportWebVitals.js", seconds:"30", completed: false },
  { id: "todo-22", name: "Repeasss", seconds:"1", completed: false },
  { id: "todo-20", name: "XD", seconds:"61", completed: false }
];
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
