import React from 'react';

interface TipCategoryPropsType {
  category: Category;
}

const TipCategory = ({ category }: TipCategoryPropsType) => {
  return <span>{category ? category.name : 'Keine Kategorie'}</span>;
};

export default TipCategory;
