const BinarySearchTree = require('./DSA-BST')
const Queue = require('./DSA-Queue-Stack')

const library = [
    { dewey: 000,  titles: ['Computer science, information & general works'] },
    { dewey: 100,  titles: ['Philosophy & psychology'] },
    { dewey: 200,  titles: ['Religion'] },
    { dewey: 300,  titles: ['Social sciences', 'Capital'] },
    { dewey: 400,  titles: ['Language'] },
    { dewey: 500,  titles: ['Pure Science'] },
    { dewey: 600,  titles: ['Technology'] },
    { dewey: 700,  titles: ['Arts & recreation'] },
    { dewey: 800,  titles: ['Literature', 'The Magicians'] },
    { dewey: 900,  titles: ['History & geography'] },
]

function deweyDecimal(array, dewey, title, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];


    if (item.dewey === dewey) {
        let currTitle
        let i = 0

        while (currTitle !== title) {
            if (item.titles.length < i) {
                return 'Someone is currently enjoying that book.'
            }
            else if (item.titles[i] === title) {
                currTitle = item.titles[i]
            }
            else {
                i += 1
            }
        }
        return `${currTitle} located`;
    }
    else if (item.dewey < dewey) {
        return deweyDecimal(array, dewey, title, index + 1, end);
    }
    else if (item.dewey > dewey) {
        return deweyDecimal(array, dewey, title, start, index - 1);
    }
};

console.log(deweyDecimal(library, 000, 'Computer science, information & general works'))
console.log(deweyDecimal(library, 300, 'Social sciences'))
console.log(deweyDecimal(library, 300, 'Capital'))
console.log(deweyDecimal(library, 800, 'The Magicians'))
console.log(deweyDecimal(library, 800, 'Harry Potter and the Deathly Hallows'))



// // Library 2 for Alternative Solutions
// const books = [
//     { dewey: 100, title: 'test title1' },
//     { dewey: 155, title: 'test title2' },
//     { dewey: 255, title: 'test title3' },
//     { dewey: 275.4, title: 'test title4' },
//     { dewey: 299, title: 'test title5' },
//     { dewey: 412, title: 'test title6' },
//     { dewey: 420, title: 'test title7' },
//     { dewey: 700, title: 'test title8' },
//     { dewey: 1000, title: 'test title9' },
//     { dewey: 1111, title: 'test title10' },
// ];

// // Iterative approach
// function findBook(library, dewey, title) {
// let start = 0;
//     let end = library.length;
//     while (start < end) {
//         let index = Math.floor((start + end) / 2);
//         if (library[index].dewey === dewey) {
//         if (library[index].title === title) {
//             return library[index];
//         }
//         for (let i = index + 1; library[i].dewey === dewey; ++i)
//             if (library[i].title === title) return library[i];
//         for (let i = index - 1; library[i].dewey === dewey; --i)
//             if (library[i].title === title) return library[i];
//         return null;
//         }
//         if (library[index].dewey < dewey) start = index + 1;
//         else end = index - 1;
//     }
//     return null;
// }
// console.log('findbook', findBook(books, 255, 'test title3'));
  
  
// // Recursive approach
// function findBook2(library, dewey, title, start, end) {
//     start = start === undefined ? 0 : start;
//     end = end === undefined ? library.length : end;
    
//     if (start > end) {
//         return -1;
//     }
    
//     const index = Math.floor((start + end) / 2);
//     const item = library[index];
    
//     // console.log(start, end);
//     if (item.dewey === dewey) {
//         if (item.title === title) {
//         return library[index];
//         }
//     } else if (item.dewey < dewey) {
//         return findBook2(library, dewey, title, index + 1, end);
//     } else if (item.dewey > dewey) {
//         return findBook2(library, dewey, title, start, index - 1);
//     }
// }

// console.log('findbook2', findBook2(books, 700, 'test title8'));



const BST = new BinarySearchTree()
const tree = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]

function seedTree(tree, data) {
    for (let i = 0; i < data.length; i++) {
        tree.insert(data[i], data[i])
    }
}

seedTree(BST, tree)



function inOrder(tree) {
    if (tree.left) {
        inOrder(tree.left)
    }
    console.log(`Searching inOrder at: ${tree.key}`)
    if (tree.right) {
        inOrder(tree.right)
    }
}

inOrder(BST)



function preOrder(tree) {
    console.log(`Searching preOrder at: ${tree.key}`)

    if (tree.left) {
        preOrder(tree.left)
    }
    if (tree.right) {
        preOrder(tree.right)
    }
}

preOrder(BST)



function postOrder(tree) {
    if (tree.left) {
        postOrder(tree.left)
    }
    if (tree.right) {
        postOrder(tree.right)
    }
    console.log(`Searching postOrder at: ${tree.key}`)
}

postOrder(BST)


const roster = [
    { treeNum: 5, name: 'Captain Picard' },
    { treeNum: 3, name: 'Commander Riker' },
    { treeNum: 6, name: 'Commander Data' },
    { treeNum: 8, name: 'Lt. Cmdr. Crusher' },
    { treeNum: 7, name: 'Lieutenant Selar' },
    { treeNum: 2, name: 'Lt. Cmdr. Worf' },
    { treeNum: 4, name: 'Lt. Cmrd. LaForge' },
    { treeNum: 1, name: 'Lt. Security-Officer' },
]

function seedRoster(tree, data) {
    for (let i = 0; i < data.length; i++) {
        tree.insert(data[i].treeNum, data[i].name)
    }
}

const commandRoster = new BinarySearchTree()
seedRoster(commandRoster, roster)



function nextInCommand(tree, values = []) {
    const queue = new Queue();
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
        const node = queue.dequeue(); 
        values.push(node.value); 

        if (node.left) {
            queue.enqueue(node.left); 
        }

        if (node.right) {
            queue.enqueue(node.right); 
        }
    }

    values.forEach(officer => console.log(officer.name))
}

nextInCommand(commandRoster, roster)



// console.log(maxProfit(stocks))

// // Option 1
// function maxProfit(prices) {
//     if (!prices.length) return 0;
//     let buy = prices[0];
//     let sell = prices[0];
//     let profit = 0;
    
//     for (let i = 1; i < prices.length; i++) {
//         sell = prices[i];
//         if (sell < buy) {
//             buy = sell;
//         }
//         if (sell - buy > profit) {
//             profit = sell - buy;
//         }
//     }
    
//     return profit;
// }
  
// console.log(maxProfit(stocks));



let stocks = [128, 97, 121, 123, 98, 97, 105]

// Find continuous increasing subarray
// Output: Max difference between first and last number in subarray

function maxProfit(prices) {
    let max = 0
    let previousValue = Infinity

    for(let i = 0; i < prices.length; i++) {
        // if current value is less than previous, reset previous value
        if (prices[i] < previousValue) {
            previousValue = prices[i]
        }

        // keep track of the max difference
        if (prices[i] - previousValue > max) {
            max = prices[i] - previousValue
        }
    }

    return max
}

console.log(maxProfit(stocks))