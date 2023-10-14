import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {test,expect} from 'vitest'
import Form from '@/components/Form'

test('renders Form component', () => {
  render(<Form />);
});

test('displays email input correctly', () => {
  const { getByLabelText } = render(<Form />);
  const emailInput = getByLabelText('ایمیل');
  expect(emailInput)
});

test('handles email input correctly', () => {
  const { getByLabelText } = render(<Form />);
  const emailInput = getByLabelText('ایمیل');
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  expect(emailInput.value).toBe('test@example.com');
});

test('displays name input correctly', () => {
  const { getByLabelText } = render(<Form />);
  const nameInput = getByLabelText('نام و نام خانوادگی');
  expect(nameInput).toBeInTheDocument();
});

test('handles name input correctly', () => {
  const { getByLabelText } = render(<Form />);
  const nameInput = getByLabelText('نام و نام خانوادگی');
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  expect(nameInput.value).toBe('John Doe');
});

// Add more tests for other inputs and functionality



test('handles form submission correctly', () => {
  const { getByText } = render(<Form />);
  const submitButton = getByText('ارسال درخواست');
  fireEvent.click(submitButton);
  expect(console.log).toHaveBeenCalledWith({
    name: '',
    email: '',
    number: ''
  });
});
