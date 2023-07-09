import { Col, Row } from "react-bootstrap";
import { GenderBar } from "./GenderBar";
import { JobTitlePie } from "./JobTitlePie";

export const EmployeeGraphs: React.FC = () => (
  <Row className="gx-4 gy-2">
    <Col sm={12} md={6}>
      <JobTitlePie />
    </Col>
    <Col sm={12} md={6}>
      <GenderBar />
    </Col>
  </Row>
);
