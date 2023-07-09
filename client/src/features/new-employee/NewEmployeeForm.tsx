import F from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Form, useNavigation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export const NewEmployeeForm: React.FC = () => {
  const navigation = useNavigation();

  const submitting = navigation.state === "submitting";

  return (
    <div className="d-flex flex-column align-items-center">
      <Form method="post">
        <h1 className="mb-4">Add New Employee</h1>

        <F.Group className="mb-3" controlId="name">
          <F.Label>Name</F.Label>
          <F.Control name="name" placeholder="John Doe" required />
        </F.Group>

        <F.Group className="mb-3" controlId="jobTitle">
          <F.Label>Job Title</F.Label>
          <F.Control name="jobTitle" placeholder="Developer" required />
        </F.Group>

        <F.Group className="mb-3" controlId="tenure">
          <F.Label>Tenure</F.Label>
          <F.Control
            name="tenure"
            type="number"
            placeholder="0"
            required
            min="0"
          />
        </F.Group>

        <F.Group className="mb-4" controlId="gender">
          <F.Label>Gender</F.Label>
          <F.Check
            type="radio"
            id="gender-male"
            name="gender"
            value="Male"
            label="Male"
            required
          />
          <F.Check
            type="radio"
            id="gender-female"
            name="gender"
            value="Female"
            label="Female"
            required
          />
        </F.Group>

        <div className="d-flex align-items-center">
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
          {submitting && (
            <Spinner className="ms-2" size="sm" variant="primary" />
          )}
        </div>
      </Form>
    </div>
  );
};
