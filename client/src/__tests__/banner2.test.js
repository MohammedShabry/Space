import { render, screen } from '@testing-library/react';
import Banner2 from '../components/Banner2';

describe('Banner2 component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Banner2 without crashing', () => {
    render(<Banner2 />);
  });

  test('renders Banner2 component with data correctly', async () => {
    const mockData = [
      {
        date: '2015-10-31',
        image: 'sample-image',
        caption: 'Sample caption',
        centroid_coordinates: {
          lat: 'sample-latitude',
          lon: 'sample-longitude',
        },
      },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockData,
    });

    render(<Banner2 />);

    // Ensure loading state is not shown
    expect(screen.queryByText('Loading...')).toBeNull();

    // Ensure all data elements are rendered
    expect(await screen.findByText('2015-10-31')).toBeInTheDocument();
    expect(screen.getByText(/Space Snapshot: NASA's EPIC Camera Captures Earth's Beauty/i)).toBeInTheDocument();
    expect(screen.getByText(/Sample caption/i)).toBeInTheDocument();
    expect(screen.getByText(/latitude sample-latitude and longitude sample-longitude/i)).toBeInTheDocument();
    expect(screen.getByAltText('')).toBeInTheDocument(); 
  });

  test('renders button correctly', async () => {
    const mockData = [
      {
        date: '2015-10-31',
        image: 'sample-image',
        caption: 'Sample caption',
        centroid_coordinates: {
          lat: 'sample-latitude',
          lon: 'sample-longitude',
        },
      },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockData,
    });

    render(<Banner2 />);

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
    const mockData = [
      {
        date: '2015-10-31',
        image: 'sample-image',
        caption: 'Sample caption',
        centroid_coordinates: {
          lat: 'sample-latitude',
          lon: 'sample-longitude',
        },
      },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockData,
    });

    render(<Banner2 />);

    // Ensure image is rendered
    const imageElement = await screen.findByAltText('');
    expect(imageElement).toBeInTheDocument();
    // Ensure image has correct URL
    expect(imageElement).toHaveAttribute('src', `https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/sample-image.png`);
  });
});
