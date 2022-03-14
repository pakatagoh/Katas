const tree = [
  {
    children: [
      {
        id: 4,
        name: '4',
        children: [],
      },
      {
        id: 5,
        name: '5',
        children: [
          {
            id: 10,
            name: '10',
            children: [],
          },
        ],
      },
    ],
    id: 1,
    name: '1',
  },
  {
    children: [
      {
        id: 6,
        name: '6',
        children: [],
      },
      {
        id: 7,
        name: '7',
        children: [],
      },
    ],
    id: 2,
    name: '2',
  },
  {
    children: [
      {
        id: 8,
        name: '8',
        children: [
          {
            id: 11,
            name: '11',
            children: [
              {
                id: 12,
                name: '12',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 9,
        name: '9',
        children: [],
      },
    ],
    id: 3,
    name: '3',
  },
];

// {id: number, name: string, children: }
// id always defined and unique
// tree can be empty. []

// [
//   {
//     children: [
//       {
//         id: 4,
//         name: '4',
//         children: [],
//       },
//       {
//         id: 5,
//         name: '5',
//         children: [
//           {
//             id: 10,
//             name: '10',
//             children: [],
//           },
//         ],
//       },
//     ],
//     id: 1,
//     name: '1',
//   },
// ];

// id 1
// search(Node[], 1)
// first iteration
// search(tree, id)
// loop tree
// first iteration, id = 1, match and return node

// id 4
// search(Node[], 4)
// first iteration
// search(tree, id)
// loop tree
// first iteration, id = 4, no match, check if children exist and length > 0
// no child
// first iteration, id 4, match found, return node

// id 5
// search(Node[], 5)
// first iteration
// search(tree, id)
// loop tree
// first iteration, id = 5, no match, check if children exist and length > 0
// there is children, search(children, 5)
// second iteration, id 5, match found, return node

function findNodeWithId(tree, id) {
  for (let i = 0; i < tree.length; i++) {
    const idToCheck = tree[i].id;
    if (idToCheck === id) {
      // console.log('inside')
      return tree[i];
      // console.log('ans:', ans)
    } else {
      if (tree[i].children.length > 0) {
        const result = findNodeWithId(tree[i].children, id);
        if (result === undefined) {
          continue;
        } else {
          return result;
        }
      }
      // return
    }
  }

  // return;
}

// function findNodeWithId(tree, id) {

//   // Type your answer here
//   let ans

//   function search(tree, id) {
//     for(let i =0; i < tree.length; i++) {
//       const idToCheck = tree[i].id
//       // console.log('idToCheck:', idToCheck)
//       // console.log('id', id)
//       if(idToCheck === id) {
//         // console.log('inside')
//         ans = tree[i]
//         // console.log('ans:', ans)
//       } else {
//         if(tree[i].children.length > 0) {
//           // console.log('looping')
//          search(tree[i].children, id)
//         }
//       }
//     }
//   }
//   search(tree, id)

//   return ans

// }

// {
//   id: 4,
//   name: '4',
//   children: [],
// },
// console.log(findNodeWithId(tree, 4));

// {
//   id: 7,
//   name: '7',
//   children: [],
// },
console.log(findNodeWithId(tree, 7));
console.log(findNodeWithId(tree, 5));

// undefined
console.log(findNodeWithId(tree, 20));
