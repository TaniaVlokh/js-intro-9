const sentences = [ 'Good morning', 'I like arrays', 'It is Sunday'];


// Solution with loop
// each sentence's first word

const newArr = [];
for(const sentence of sentences){
    newArr.push(sentence.split(' ')[0]);
    // sentence.slice(0, sentence.indexOf(' '));
}

// ========== Map solution ==========

// 1st solution
// const newArr = sentences.map(function (senten){
//     return senten.split(' ')[0];
// });


//const newArr = sentences.map( x => x.split(' ')[0]);

// Last Word - few options
const lastWord = sentences.map( x => x.split(' ').at(-1));
//const lastWord = sentences.map( x => x.split(' ').pop(-1));
//const lastWord = sentences.map( x => x.split(' ').slice(-1)).flat();
console.log(lastWord);


console.log(sentences);
console.log(newArr);


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
const newSalary =  salaries.map(x => parseFloat(x.toFixed(2))); //or  Number(x.toFixed(2)) - otherwise you will get String
console.log(newSalary)


const products = [
    { name: "sports car" },
    { name: "laptop" },
    { name: "phone" },
  ];

  const productWithPrice = products.map((product) => {
    return {...product, price : 100};

  })

  products.forEach((product) => {
    product.price = 100;
  });

  console.log(products)
  console.log(productWithPrice)

