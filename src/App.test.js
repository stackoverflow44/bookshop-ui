import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn Book Shop", () => {
  render(<App />);
  const linkElement = screen.getByText(/Book Shop/i);
  expect(linkElement).toBeInTheDocument();
});
