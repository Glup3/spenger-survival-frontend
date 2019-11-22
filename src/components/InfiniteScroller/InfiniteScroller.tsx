import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useData } from '../../context/dataContext';
import TipsGrid from '../TipsGrid';

const InfiniteScroller = () => {
  const data = useData();

  useEffect(() => {
    data.fetchInitialTips(null);
    // eslint-disable-next-line
  }, []);

  return (
    <InfiniteScroll
      dataLength={data.tips.length}
      hasMore={data.tips.length < data.tipsCount}
      loader={<h4 className="text-center">Loading...</h4>}
      next={() => data.fetchMoreTips()}
      endMessage={<h4 className="text-center">Ende erreicht</h4>}
    >
      <TipsGrid tips={data.tips} />
    </InfiniteScroll>
  );
};

export default InfiniteScroller;
