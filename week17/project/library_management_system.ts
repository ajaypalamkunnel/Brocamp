class Book{
    title:string;
    author:string;
    year:number

    constructor(title:string,author:string,year:number){
        this.title = title;
        this.author=author;
        this.year=year
    }


    displayInfo():string{
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
    }

}

class EBook extends Book{
    fileSizeMB:number;

    constructor(title:string,author:string,year:number,fileSize:number){
        super(title,author,year);
        this.fileSizeMB = fileSize
    }
    //overridign
    displayInfo(): string {
        return `${super.displayInfo()} , File size : ${this.fileSizeMB}`
    }

    download():string{
        return `Downloading... ${this.title}`
    }
}


class Library{
    private books:Book[] = [];

    addBook(book:Book):string{
        this.books.push(book)
        return `${book.title} Congratulation Added to library....`
    }


    listBooks():void{
        console.log("Avalilable books are: ");
        
        this.books.forEach((book,i)=>{
            console.log(`${i+1}) ${book.displayInfo()}`);
        })
    }


    searchBook(title: string): void {
        let foundBook: Book | undefined;
        for (let book of this.books) {
            if (book.title.toLowerCase() === title.toLowerCase()) {
                foundBook = book;
                break;
            }
        }
        if (foundBook) {
            console.log('Book found:', foundBook.displayInfo());
        } else {
            console.log('Book not found');
        }
    }
}



const library = new Library();

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('1984', 'George Orwell', 1949);

const ebook1 = new EBook('JavaScript: The Good Parts', 'Douglas Crockford', 2008, 5);
const ebook2 = new EBook('TypeScript Handbook', 'Microsoft', 2020, 10);


library.addBook(book1)
library.addBook(book2)
library.addBook(ebook1)
library.addBook(ebook2)


library.listBooks()