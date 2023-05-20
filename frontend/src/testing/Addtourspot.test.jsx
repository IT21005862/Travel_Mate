import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import Addtourspot from "../pages/Addtourspot";

jest.mock("axios"); // Mock axios module

describe("Addtourspot", () => {
  test("should post data to the server on form submission", async () => {
    const mockedAxiosPost = axios.post.mockResolvedValue({ data: { success: true } });

    render(<Addtourspot />);

    // Fill in form fields
    fireEvent.change(screen.getByLabelText("Title"), { target: { value: "Test Title" } });
    fireEvent.change(screen.getByLabelText("Main Description"), { target: { value: "Test Description" } });
    // Fill in other form fields 

    // Submit the form
    fireEvent.click(screen.getByText("Submit"));

    // Verify that axios.post is called with the expected data
    expect(mockedAxiosPost).toHaveBeenCalledWith(
      "https://travel-mate.onrender.com/tourspot/addtourspot",
      expect.objectContaining({
        title: "Test Title",
        maindescription: "Test Description",
        // Verify other form field values 
      })
    );

    // Verify that the success message is displayed
    await screen.findByText("Tour Spot Added Successfully");
  });
});
