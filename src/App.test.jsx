import { render, screen, fireEvent } from "@testing-library/dom";
import App from "./App";

test("button inicia desativado", () => {
  render(<App />);

  const buttonLogin = screen.getByRole("button", { name: "Login" });
});
