var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.displayInfo = function () {
        return "Title: ".concat(this.title, ", Author: ").concat(this.author, ", Year: ").concat(this.year);
    };
    return Book;
}());
var EBook = /** @class */ (function (_super) {
    __extends(EBook, _super);
    function EBook(title, author, year, fileSize) {
        var _this = _super.call(this, title, author, year) || this;
        _this.fileSizeMB = fileSize;
        return _this;
    }
    //overridign
    EBook.prototype.displayInfo = function () {
        return "".concat(_super.prototype.displayInfo.call(this), " , File size : ").concat(this.fileSizeMB);
    };
    EBook.prototype.download = function () {
        return "Downloading... ".concat(this.title);
    };
    return EBook;
}(Book));
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        return "".concat(book.title, " Congratulation Added to library....");
    };
    Library.prototype.listBooks = function () {
        console.log("Avalilable books are: ");
        this.books.forEach(function (book, i) {
            console.log("".concat(i + 1, ") ").concat(book.displayInfo()));
        });
    };
    Library.prototype.searchBook = function (title) {
        var foundBook;
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.title.toLowerCase() === title.toLowerCase()) {
                foundBook = book;
                break;
            }
        }
        if (foundBook) {
            console.log('Book found:', foundBook.displayInfo());
        }
        else {
            console.log('Book not found');
        }
    };
    return Library;
}());
var library = new Library();
var book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
var book2 = new Book('1984', 'George Orwell', 1949);
var ebook1 = new EBook('JavaScript: The Good Parts', 'Douglas Crockford', 2008, 5);
var ebook2 = new EBook('TypeScript Handbook', 'Microsoft', 2020, 10);
library.addBook(book1);
library.addBook(book2);
library.addBook(ebook1);
library.addBook(ebook2);
library.listBooks();
