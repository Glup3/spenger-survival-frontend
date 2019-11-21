import React from 'react';
import StackGrid from 'react-stack-grid';

import TipCard from '../TipCard';
import Tip from '../../types/tip';

interface TipsGridPropsType {
  tips: Tip[];
}

const gutterSize = 15;

const TipsGrid = ({ tips }: TipsGridPropsType) => {
  // console.log('all tips', tips);

  return (
    <StackGrid columnWidth={300} gutterWidth={gutterSize} gutterHeight={gutterSize} duration={1000}>
      {tips.map(tip => (
        <TipCard key={`tip-${tip.id}`} tip={tip} />
      ))}
    </StackGrid>
  );
};

export default TipsGrid;
