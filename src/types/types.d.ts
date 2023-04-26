// APP STATE
export type AppState = {
  bookState: BookState;
  authState: AuthState;
  userState: UserState;
  borrowState: BorrowState;
};

// BOOK-STATE
export type BookState = {
  bookProps: Book;
  bookList: Book[];
  borrow: BorrowBook[];
  isBorrowed: boolean;
  loading: boolean;
  msg: string;
  error: string;
};

export type Book = {
  _id: string;
  title: string;
  isbn: string;
  description: string;
  copies: number;
  author: string;
  publisher: string;
  publishedDate: string;
};

// BORROW STATE
export type BorrowState = {
  _bookList: BookList[];
  loading: boolean;
  error: string;
  msg: string;
};

type BorrowBook = {
  _id: string;
  userId: string;
  bookId: string;
};

export type BookList = {
  books: {
    _id: string;
    title: string;
    isbn: string;
    description: string;
    copies: number;
    author: string;
    publisher: string;
    publishedDate: string;
  };
  borrowId: string;
};

export type Borrow = {
  _id?: string;
  userId: string;
  bookId: string;
};

// AUTH / USER
export type AuthState = {
  isAuthenticated: boolean;
  loading: boolean;
  errors: any;
  msg: string;
  user: User;
};

export type UserState = {
  userList: User[];
  loading: boolean;
  errors: any;
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
};

// PROPS
export type BookProps = {
  bookData: Book;
};

export type UserProps = {
  userData: User;
};

export type BookActionType = {
  type: string;
  payload: string | boolean | BookResponse | BorrowResponse | UserResponse;
};

type UserActionType = {
  type: string;
  payload: User;
};

export type RegisterActionType = {
  type: string;
  payload: string | any[];
};

export type LoginActionType = {
  type: string;
  payload: string | any[];
};

export type ActionTypes =
  | BookActionType
  | Payload
  | RegisterActionType
  | LoginActionType
  | UserActionType;

// RESPONSES
export type BookResponse = {
  book: Book;
  bookList: Book[];
  borrow: Borrow;
  isBorrowed: boolean;
  data: BookList;
};

export type BorrowResponse = {
  books: Book[];
  borrow: Borrow;
  _bookList: any[];
  msg: string;
  error: string;
  data: any;
};

export type UserResponse = {
  user: User;
  msg: string;
  error: string;
};

export type BookDetailResponse = {
  data: Book;
};
