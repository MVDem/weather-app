import mockAxiosInstance from '../../mocks/mockClient';
jest.mock('./index', () => mockAxiosInstance);
import {} from './client';

// expect methods to be defined
describe('http/client', () => {});
