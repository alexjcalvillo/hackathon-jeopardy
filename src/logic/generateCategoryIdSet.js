// This file exports a function that returns an array of 6 unique numbers

// const badIDs = [149, 150, 237, 270, 300, 144];

const generateCategoryIdSet = () => {
  const columnCategoryIds = new Set();

  while (columnCategoryIds.size < 6) {
    // Note: there are much more than 100 categories available in jService.
    // let newRandomID = Math.floor(Math.random() * 400) + 1;

    columnCategoryIds.add(Math.floor(Math.random() * 400) + 1);
  }

  return Array.from(columnCategoryIds);
};

export default generateCategoryIdSet;
