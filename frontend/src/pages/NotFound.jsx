import { Link } from "react-router-dom";
import { Page } from "../components/Page";

export default function NotFound() {
  return (
    <Page path="/404/" eyebrow="Not on the shelf" title="That page is not here" intro="The shelf is small and every title is listed. Try the finder." testid="not-found">
      <p><Link to="/find/" className="btn">Find a book</Link></p>
    </Page>
  );
}
