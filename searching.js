const BST = require('./BST');
const Queue = require('./Queue');

// #1 How many searches?

// Given sorted list [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] and using recursive binary search algorithm, how many searches to find value 8?
// start = 0, end = arr.length = 10;
// index = 5
// item = arr[5] = 12
// since item > value, run function again with (arr, 8, 0, 4)
// next item = 6
// since item < value, run function again with (arr, 8, 3, 4)
// next item = 8

// Given same sorted list, how many searches to find value = 16?
// start = 0, end = 10;
// index = 5
// item = arr[5] = 12;
// since item < value, run function again with (arr, 16, 6, 10)
// next item = 17
// since item > value, run function again with (arr, 16, 6, 7)
// next item = 14
// since item < value, run function again with (arr, 16, 7, 7)
// next item = 15
// since item < value, run function again with (arr, 16, 8, 7)
// at this point, start > end which triggers our function to return -1


// #2 Adding a React UI
// Repo for React app can be found at https://github.com/JamesK-Projects/dsa-search-react-app


// #3 Find a book
// The Dewey Decimal index works by assigning each book a value between 0 - 1000 depending on its category and title.
// Assume the library is sorted and all books are in order by their Dewey number.
// Use the binary search operation to find the book.

function searchDewey(array, value, start, end){
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
    if(start > end){
        return -1
    }
    const index = Math.floor((start + end)/2);
    const item = array[index];
    console.log(start, end);
    if(item == value){
        return index;
    }
    else if(item < value){
        return searchDewey(array, value, index + 1, end);
    }
    else if(item > value){
        return searchDewey(array, value, start, index - 1);
    }
};


// #4 Searching in a BST ** Ask Mentor

//  1) Given a binary search tree whose in-order and pre-order traversals are respectively 
//  14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?

//  Ans: 


//  2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

//  Ans:


// #5 Implement different tree traversals
function main(){
    const tree = new BST();
    tree.insert(25);
    tree.insert(15);
    tree.insert(50);
    tree.insert(10);
    tree.insert(24);
    tree.insert(35);
    tree.insert(70);
    tree.insert(4);
    tree.insert(12);
    tree.insert(18);
    tree.insert(31);
    tree.insert(44);
    tree.insert(66);
    tree.insert(90);
    tree.insert(22);

    return tree;
}

function preOrder(tree){
    if(tree !== null && tree.key !== null){
        console.log(tree.key)
        preOrder(tree.left)
        preOrder(tree.right)
    }
}

function inOrder(tree){
    if(tree !== null){
        inOrder(tree.left)
        console.log(tree.key)
        inOrder(tree.right)
    }
}

function postOrder(tree){
    if(tree !== null){
        postOrder(tree.left)
        postOrder(tree.right)
        console.log(tree.key)
    }
}

//console.log(postOrder(main()))


// #6 Find the next commanding officer ** Go over with Mentor. How to assign keys to each value when entering into BST?
// breadth-first search

function bfs(tree, values = []){
    const queue = new Queue();
    const node = tree.root;
    queue.enqueue(node);
    while(queue.length){
        const node = queue.dequeue();
        values.push(node.value);
        if(node.left){
            queue.enqueue(node.left)
        }
        if(node.right){
            queue.enqueue(node.right)
        }
    }
    return values;
}

function main(){
    const bst = new BST();
    bst.insert(12, 'Picard')
    bst.insert(8, 'Riker')
    bst.insert(20, 'Data')
    bst.insert(7, 'Worf')
    bst.insert(9, 'LaForge')
    bst.insert(22, 'Crusher')
    bst.insert(6, 'security-officer')
    bst.insert(21, 'Selar')

    return bfs(bst, ['Picard','Riker','Data','Worf','LaForge','Crusher','Security','Selar'])
}


// #7 Max Profit
function profit(arr){
    let maxProfit = 0;
    let dailyNet = 0;
    for(let i = 0; i < arr.length; i++){
        dailyNet = arr[i]-arr[i+1]
        if(dailyNet > maxProfit){
            maxProfit = dailyNet;
        }
    }
    return maxProfit;
}

//console.log(profit([128, 97, 121, 123, 98, 97, 105]))





