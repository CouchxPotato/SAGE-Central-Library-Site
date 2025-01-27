import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';
import { BookOpenCheck, Library, ArrowLeft } from 'lucide-react';

export function ShelfPage() {
  const { shelfId } = useParams();
  const shelfBooks = books.filter(book => book.shelf_no === Number(shelfId));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Library</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Library className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">SAGE University Library</h1>
              <p className="text-blue-200 text-sm">Shelf {shelfId}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-4 py-8 w-full">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <BookOpenCheck className="w-8 h-8 text-blue-700" />
            <h2 className="text-2xl font-bold text-slate-800">
              Shelf {shelfId} Contents
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {shelfBooks.map((book) => (
              <div
                key={book.id}
                className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl
                         hover:from-blue-50 hover:to-indigo-50 transition-all duration-300
                         transform hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {book.book_name}
                </h3>
                <p className="text-slate-600">by {book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-4 mt-auto">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm">
          <p>© 2024 SAGE University, Bhopal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}