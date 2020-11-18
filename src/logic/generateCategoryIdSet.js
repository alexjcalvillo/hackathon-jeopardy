// This file exports a function that returns an array of 6 unique numbers

const badIDs = [
  149,
  147,
  150,
  237,
  270,
  300,
  144,
  336,
  69,
  488,
  479,
  483,
  263,
  44,
  116,
  15,
  93,
  195,
  403,
  282,
  464,
  61,
  423,
];

const generateCategoryIdSet = () => {
  const columnCategoryIds = new Set();

  while (columnCategoryIds.size < 6) {
    // Note: there are much more than 100 categories available in jService.
    // let newRandomID = Math.floor(Math.random() * 400) + 1;

    columnCategoryIds.add(Math.floor(Math.random() * 400) + 1);
  }

  return Array.from(columnCategoryIds);
};

const categoryIDs = new Set();
let i = 0;

const recursiveGenerator = () => {
  for (; i <= 5; ) {
    let randomID = Math.floor(Math.random() * 500) + 1;

    if (badIDs.includes(randomID)) {
      return recursiveGenerator();
    } else {
      i++;
      categoryIDs.add(randomID);
    }
  }
  return Array.from(categoryIDs);
};

// export default generateCategoryIdSet;

export default recursiveGenerator;
