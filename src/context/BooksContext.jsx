import React, { createContext, useState } from "react";

export const BooksContext = createContext();

const defaultBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    isbn: "	0-09-945025-9",
    published: "2003-05-01",
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
    about:
      "The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924. He submitted it to editor Maxwell Perkins, who persuaded Fitzgerald to revise the work over the following winter. After making revisions, Fitzgerald was satisfied with the text, but remained ambivalent about the book's title and considered several alternatives. Painter Francis Cugat's dust jacket art.",
    author: {
      name: " F. Scott Fitzgerald",
      birth: "1896-09-24",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/F._Scott_Fitzgerald_%281929_photo_portrait_by_Nickolas_Muray%29_Cropped.jpg/220px-F._Scott_Fitzgerald_%281929_photo_portrait_by_Nickolas_Muray%29_Cropped.jpg",
      biography:
        "Francis Scott Key Fitzgerald (September 24, 1896 – December 21, 1940) was an American novelist, essayist, and short story writer. He is best known for his novels depicting the flamboyance and excess of the Jazz Age—a term he popularized in his short story collection Tales of the Jazz Age.",
    },
  },
  {
    id: 2,
    title: "Little Women",
    isbn: "	398551304X",
    published: "1868-11-05",
    coverImage:
      "https://books.google.co.in/books/publisher/content?id=_LkmCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73dpzmYVfNXUdPLkwKEI9Z7Nj-V0w9LEOiSVbISARSShyGRd57RGyBxjKMIO3QeE5lSags7OD4GW6QrVksLuOLBDzJSRcPFzXSm7B4u_JhNypfwoFzJ_8fStwxb37buGYt8MawS",
    about: `A Heartwarming Story of Sisters “I like good strong words that mean something…” ― Louisa May Alcott, Little Women Little Women by Louisa May Alcott is an American classic that tells the story of four sisters, Jo, Meg, Beth and Amy March. Beloved by generations, this tale is filled with the fun, friendship and love of sisterhood in the passage of childhood to womanhood. Xist Publishing is a digital-first publisher. Xist Publishing creates books for the touchscreen generation and is dedicated to helping everyone develop a lifetime love of reading, no matter what form it takes`,
    author: {
      name: " Louisa May Alcott",
      birth: "1832-11-29",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Louisa_May_Alcott%2C_c._1870_-_Warren%27s_Portraits%2C_Boston.jpg/220px-Louisa_May_Alcott%2C_c._1870_-_Warren%27s_Portraits%2C_Boston.jpg",
      biography:
        "Louisa May Alcott (/ˈɔːlkət, -kɒt/; November 29, 1832 – March 6, 1888) was an American novelist, short story writer, and poet best known for writing the novel Little Women (1868) and its sequels Good Wives (1869), Little Men (1871) and Jo's Boys (1886).",
    },
  },
];

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(defaultBooks);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const editBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BooksContext.Provider value={{ books, addBook, editBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
};
