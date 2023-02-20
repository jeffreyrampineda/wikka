import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Complete from "./Complete";

describe("Complete", () => {
  beforeEach(() => {
    HTMLMediaElement.prototype.play = jest.fn();
  });

  it("renders the Complete component", () => {
    render(<Complete />, { wrapper: MemoryRouter });

    expect(
      screen.getByRole("heading", { name: /Summary/i })
    ).toBeInTheDocument();
  });

  it("should have a grade of 'A' when 20%-0% of pages were skipped", () => {
    render(
      <Complete
        description={"Mock description"}
        pages={10}
        pagesSkipped={2}
        duration={0}
      />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByRole("list")).toHaveTextContent("Grade: A");
  });

  it("should have a grade of 'B' when 30%-20% of  pages were skipped", () => {
    render(
      <Complete
        description={"Mock description"}
        pages={10}
        pagesSkipped={3}
        duration={0}
      />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByRole("list")).toHaveTextContent("Grade: B");
  });

  it("should have a grade of 'C' when 40%-30% of pages were skipped", () => {
    render(
      <Complete
        description={"Mock description"}
        pages={10}
        pagesSkipped={4}
        duration={0}
      />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByRole("list")).toHaveTextContent("Grade: C");
  });

  it("should have a grade of 'D' when 50%-40% of pages were skipped", () => {
    render(
      <Complete
        description={"Mock description"}
        pages={10}
        pagesSkipped={5}
        duration={0}
      />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByRole("list")).toHaveTextContent("Grade: D");
  });

  it("should have a grade of 'F' when 60%-100% of pages were skipped", () => {
    render(
      <Complete
        description={"Mock description"}
        pages={10}
        pagesSkipped={6}
        duration={0}
      />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByRole("list")).toHaveTextContent("Grade: F");
  });
});
