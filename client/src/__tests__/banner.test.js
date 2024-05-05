import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner';

describe('Banner component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Banner1 without crashing', () => {
    render(<Banner />);
  });

  test('renders banner with data correctly', async () => {
    const mockData = {
      date: '2024-05-04',
      title: 'Sample Title',
      explanation: 'Sample Explanation',
      hdurl: 'sample-url.jpg',
    };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockData,
    });

    render(<Banner />);

    // Ensure loading state is not shown
    expect(screen.queryByText('Loading...')).toBeNull();

    // Ensure all data elements are rendered
    expect(await screen.findByText('2024-05-04')).toBeInTheDocument();
    expect(screen.getByText('Sample Title')).toBeInTheDocument();
    expect(screen.getByText('Sample Explanation')).toBeInTheDocument();
    expect(screen.getByAltText('Sample Title')).toBeInTheDocument();
  });

  test('renders button correctly', async () => {
    const mockData = {
      date: '2024-05-04',
      title: 'Sample Title',
      explanation: 'Sample Explanation',
      hdurl: 'sample-url.jpg',
    };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockData,
    });

    render(<Banner />);

    // Ensure button is rendered
    const buttonElement = await screen.findByText('View All');
    expect(buttonElement).toBeInTheDocument();
    // Ensure button has correct classes
    expect(buttonElement).toHaveClass('bg-blue-400');
    expect(buttonElement).toHaveClass('text-white');
    expect(buttonElement).toHaveClass('hover:bg-blue-500');
    expect(buttonElement).toHaveClass('px-4');
    expect(buttonElement).toHaveClass('py-1');
    expect(buttonElement).toHaveClass('rounded-md');
    expect(buttonElement).toHaveClass('duration-200');
  });

  test('renders image with correct URL and alt text', async () => {
    const mockData = {
      date: '2024-05-04',
      title: 'Sample Title',
      explanation: 'Sample Explanation',
      hdurl: 'sample-url.jpg',
    };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockData,
    });

    render(<Banner />);

    // Ensure image is rendered
    const imageElement = await screen.findByAltText('Sample Title');
    expect(imageElement).toBeInTheDocument();
    // Ensure image has correct URL
    expect(imageElement).toHaveAttribute('src', 'sample-url.jpg');
  });
});
