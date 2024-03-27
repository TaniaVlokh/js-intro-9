class Book{
    constructor(title, genre, page){
        this.title = title;
        this.genre = genre;
        this.page = page;
    }

    getTitle(pin){
        if(pin === 1234 )return book1.title();
        else throw error('PIN is wring')
    }
    getGenre(){
        return book1.genre();
    }
    getPage(){
        return book1.page();
    }


    // Setter
    setTitle(title) {
        if(title.trim().length !== 0) this.title = title;
        else throw Error('Title CANNOT be empty!');
      }

      setPage(page){
        if(page > 0)  this.page = page;
        else throw Error ('Page number is INVALID')
      }
}

const book1 = new Book('JS 101', 'Journal', 1000)
book1.page 
book1.getTitle(123)