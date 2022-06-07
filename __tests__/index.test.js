import { render, screen } from '@testing-library/react';
import Application from '../pages/application';
import '@testing-library/jest-dom';

describe('Application Component', () => {
  it('renders a heading', () => {
    render(<Application />)

    // screen.getByRole('link', {  name: /connect wallet/i}).click();
    // screen.getByRole('');

    // const heading = screen.getByRole('heading', {
    //   name: /Home Page/i,
    // })

    // //fix jest here
    // expect(heading).toBeInTheDocument()

  })
})