import { render } from '@testing-library/react';
import HomePage from '../src/pages/index';

describe('<HomePage>', () => {
    it('should render component', () => {
        const { asFragment } = render(<HomePage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
