import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renders the main heading", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /to get started, edit the page\.tsx file\./i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the Next.js and Vercel logos", () => {
    render(<Home />);

    expect(screen.getByAltText("Next.js logo")).toBeInTheDocument();
    expect(screen.getByAltText("Vercel logomark")).toBeInTheDocument();
  });

  it("links to the Next.js documentation", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/docs"),
    );
  });
});
