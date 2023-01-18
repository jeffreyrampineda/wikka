import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders the Button component enabled", () => {
    render(<Button />);

    expect(screen.getByRole("button")).not.toHaveAttribute('disabled');
  });
  it("renders the Button component disabled", () => {
    render(<Button disabled={true}/>);

    expect(screen.getByRole("button")).toHaveAttribute('disabled');
  });
});
