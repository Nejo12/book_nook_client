import { Routes, Route } from 'react-router-dom';

import BookList from './pages/BookList';
import BookDetail from './pages/BookDetail';
import Users from './pages/Users';
import Borrowed from './pages/Borrowed';
import CreateBook from './pages/CreateBook';
import LoginAndRegistration from './pages/LoginAndRegistration';
import EditBook from './pages/EditBook';

export const url = 'https://book-nook-server.adaptable.app';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<BookList />} />
    <Route path='/book-details/:id' element={<BookDetail />} />
    <Route path='/login' element={<LoginAndRegistration />} />
    <Route path='/users' element={<Users />} />
    <Route path='/borrowed' element={<Borrowed />} />
    <Route path='/edit-book/:id' element={<EditBook />} />
    <Route path='/create-book' element={<CreateBook />} />
  </Routes>
);

export default AppRoutes;
