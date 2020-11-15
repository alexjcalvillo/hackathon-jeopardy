// This file exports a function that returns an array of 6 unique numbers

const generateCategoryIdSet = () => {
  const columnCategoryIds = new Set();

  while (columnCategoryIds.size < 6) {
    // Note: there are much more than 100 categories available in jService.
    columnCategoryIds.add(Math.floor(Math.random() * 100) + 1);
  }

  return Array.from(columnCategoryIds);
};

export default generateCategoryIdSet;
