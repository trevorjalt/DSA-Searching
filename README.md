# Search algorithms

## 1) How many searches?

* Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

````

Starting index is [0].
Length of array is 10, so divide array in half. Mid point is array[4] = 11

* Check: Start at array[0]. Go to middle of the array => array[4] = 11
    8 < 11
    Thus: value is in the first half of the array
    This becomes the new range to check


* Check: Make new mid point.  array[2] = 6
    8 > 6
    Thus: value is to the right of midpoint. 
    This becomes the new range to check.

* Check: Only one index left between the two previous midpoints: array[3] = 8
    8 = 8
    Thus:  We found 8. 
````

* Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.

````
Starting index is [0].
Length of array is 10, so divide array in half. Mid point is array[5] = 12

* Check: go to middle of array => array[5] = [12]
    16 > 12. 
    Too low, move right


* Check: move right and make new mid index => array[8] = [17]
    16 < 17
    Too high, move left

* Check: move left and make new mid index => index[6] = [14]
    16 > 14
    Too low, move right

* Check: move right and make new mid index => index[7] = [15]
    16 > 15
    Too low 

* Check: compare start of search to end of search. 
    start > end 
    Number not found
````

## 2) Adding a React UI

For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset. You will be testing the efficiency of 2 search algorithms, linear search and binary search. You will also have a UI (a simple textbox will do) through which you will be sending your input that you want to search. There is no server-side to this program. All of this should be done using React.

1) Linear search

Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,

2) Binary search

Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

````
A:

Navigate to dsasearching folder, and check out the react app
````

## 3) Find a book

Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.

````
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
````

## 4) Searching in a BST

** No coding is needed for these drills**. Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.

1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?

````

                    35
                   /   \
                  25   89
                 / \    / \
               15  27  79  91
              / \         /  
            14  19       90

Post-Order Traversal: 14, 19, 15, 27, 25, 90, 79, 91, 89, 35
````

2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

````

                     8
                   /   \
                  6     10
                 / \    / \
                5   7  9  11

Pre-Order Traversal: 8, 6, 5, 7, 10, 9, 11
````

## 5) Implement different tree traversals

Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.

A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

````
function preOrder(tree) {
    console.log(`Searching preOrder at: ${tree.key}`)

    if (tree.left) {
        preOrder(tree.left)
    }
    if (tree.right) {
        preOrder(tree.right)
    }
}
````

````
function inOrder(tree) {
    if (tree.left) {
        inOrder(tree.left)
    }
    console.log(`Searching inOrder at: ${tree.key}`)
    if (tree.right) {
        inOrder(tree.right)
    }
}
````

````
function preOrder(tree) {
    console.log(`Searching preOrder at: ${tree.key}`)

    if (tree.left) {
        preOrder(tree.left)
    }
    if (tree.right) {
        preOrder(tree.right)
    }
}
````

## 6) Find the next commanding officer

Suppose you have a tree representing a command structure of the Starship USS Enterprise.

````
               Captain Picard
             /                \
    Commander Riker       Commander Data
      /         \               \
 Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
 Worf        LaForge            Crusher
   /                           /
Lieutenant                  Lieutenant
security-officer            Selar
````

This tree is meant to represent who is in charge of lower-ranking officers. For example, Commander Riker is directly responsible for Worf and LaForge. People of the same rank are at the same level in the tree. However, to distinguish between people of the same rank, those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right). Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.

````
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
````

## 7) Max Profit

The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.

````

function maxProfit(prices) {
    let max = 0
    let previousValue = Infinity

    for(let i = 0; i < prices.length; i++) {
        if (prices[i] < previousValue) {
            previousValue = prices[i]
        }

        if (prices[i] - previousValue > max) {
            max = prices[i] - previousValue
        }
    }

    return max
}
````