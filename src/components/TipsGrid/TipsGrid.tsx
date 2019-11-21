import React from 'react';
import StackGrid from 'react-stack-grid';

import TipCard from '../TipCard';
import Tip from '../../types/tip';

interface TipsGridPropsType {
  tips: Tip[];
}

const TipsGrid = ({ tips }: TipsGridPropsType) => {
  console.log(tips);

  return (
    <StackGrid columnWidth={300} gutterWidth={10} gutterHeight={10}>
      {tips.map(tip => (
        <TipCard key={`tip-${tip.id}`} tip={tip} />
      ))}
    </StackGrid>
  );
};

export default TipsGrid;
