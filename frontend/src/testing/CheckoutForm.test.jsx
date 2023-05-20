import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import axios from 'axios';
import CheckoutForm from '../components/CheckoutForm';

jest.mock('axios');
const checkout = {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    city: 'City',
    state: 'State',
    zip: '12345',
};
const checkoutForm = (
    <CheckoutForm/>
);
describe('CheckoutForm Component', () => {
    test('renders CheckoutForm component', async () => {
        axios.post.mockResolvedValueOnce({ data: checkout });
        render(checkoutForm);
        const firstNameInput = screen.getByLabelText(/first name/i);
        const lastNameInput = screen.getByLabelText(/last name/i);
        const addressInput = screen.getByLabelText(/address/i);
        const cityInput = screen.getByLabelText(/city/i);
        const stateInput = screen.getByLabelText(/state/i);
        const zipInput = screen.getByLabelText(/zip/i);
        const checkoutButton = screen.getByRole('button', { name: /checkout/i });
        fireEvent.change(firstNameInput, { target: { value: checkout.firstName } });
        fireEvent.change(lastNameInput, { target: { value: checkout.lastName } });
        fireEvent.change(addressInput, { target: { value: checkout.address } });
        fireEvent.change(cityInput, { target: { value: checkout.city } });
        fireEvent.change(stateInput, { target: { value: checkout.state } });
        fireEvent.change(zipInput, { target: { value: checkout.zip } });
        fireEvent.click(checkoutButton);
        await act(() => Promise.resolve());
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith('http://localhost:3333/api/checkout', checkout);
        expect(screen.getByText(/john/i)).toBeInTheDocument();
        expect(screen.getByText(/doe/i)).toBeInTheDocument();
        expect(screen.getByText(/123 Main St/i)).toBeInTheDocument();
        expect(screen.getByText(/city/i)).toBeInTheDocument();
        expect(screen.getByText(/state/i)).toBeInTheDocument();
        expect(screen.getByText(/12345/i)).toBeInTheDocument();
    });
}
)
