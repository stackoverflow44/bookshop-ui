import React from "react";
import { render, waitFor } from "@testing-library/react";
import Shop from "./Shop";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mockAxios = new MockAdapter(axios);

const mockData = [
  {
    id: "1",
    name: "Clean Code",
    price: "52.5",
    imageUrl: "https://fakeImageRepo/1.jpg",
  },
];

describe("Shop", () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  it("should render todo title", async () => {
    mockAxios.onGet("http://fakeBackendUrl/shop").reply(200, mockData);

    const { getByText, getByAltText } = render(<Shop />);

    await waitFor(() => getByText("Clean Code"));
    expect(getByText("Clean Code")).toBeInTheDocument();
    expect(getByAltText("Clean Code")).toBeInTheDocument();
    expect(getByText("$52.50")).toBeInTheDocument();
  });
});
