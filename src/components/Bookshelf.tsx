import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book } from '../data/books';
import { BookMarked, BookOpenCheck, ExternalLink } from 'lucide-react';

interface BookshelfProps {
  shelfNumber: number;
  books: Book[];
}

export function Bookshelf({ shelfNumber, books }: BookshelfProps) {
  const navigate = useNavigate();
  const shelfPageUrl = `/shelf/${shelfNumber}`;

  // Use window.location.origin to get the current URL (works in both development and production)
  const qrCodeUrl = `${window.location.origin}${shelfPageUrl}`;

  return (
    <div className="relative perspective-1000">
      <div className="w-full transform-gpu transition-all duration-500 ease-out hover:scale-[1.02] group">
        {/* Shelf Number Plate */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-b from-slate-800 to-slate-700 
                      text-white px-6 py-2 rounded-lg shadow-lg border border-slate-600
                      transform-gpu transition-transform duration-300 group-hover:-translate-y-1">
          <span className="text-xl font-bold">Shelf {shelfNumber}</span>
        </div>

        {/* Bookshelf */}
        <div className="relative bg-gradient-to-b from-slate-200 to-slate-300 rounded-lg p-8 pt-12
                      shadow-[0_8px_16px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.9)]
                      border-2 border-slate-300 group-hover:shadow-2xl transition-all duration-300
                      transform-gpu group-hover:-translate-y-1">
          {/* Wood Texture Lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-px bg-slate-700 transform"
                style={{ top: `${i * 14 + 10}%` }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-full shadow-inner transform-gpu transition-transform duration-300 group-hover:scale-110">
              <BookOpenCheck className="w-10 h-10 text-blue-700" />
            </div>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-slate-700">
                <BookMarked className="w-5 h-5" />
                <span className="font-medium">{books.length} books</span>
              </div>
              
              {/* QR Code Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl shadow-inner">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeUrl)}`}
                  alt={`QR Code for Shelf ${shelfNumber}`}
                  className="w-32 h-32 mx-auto"
                />
                <p className="text-center mt-3 text-sm text-slate-600">
                  Scan to view contents
                </p>
              </div>

              {/* Open Shelf Button */}
              <button
                onClick={() => navigate(shelfPageUrl)}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg
                         flex items-center justify-center gap-2 transition-colors duration-300
                         shadow-md hover:shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Shelf</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}