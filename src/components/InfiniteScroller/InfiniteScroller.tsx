import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useData } from '../../context/dataContext';
import TipsGrid from '../TipsGrid';
import LoadingSpinner from '../LoadingSpinner';
import InfiniteScrollerEnd from '../InfiniteScrollerEnd';

const InfiniteScroller = () => {
  const data = useData();

  useEffect(() => {
    data.fetchInitialTips(null);
    // eslint-disable-next-line
  }, []);

  if (data.tips.length === 0) {
    return (
      <div className="text-center">
        <InfiniteScrollerEnd />
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={data.tips.length}
      hasMore={data.tips.length < data.tipsCount}
      loader={
        <div className="text-center mt-4">
          <LoadingSpinner />
        </div>
      }
      next={() => data.fetchMoreTips()}
      endMessage={
        <div className="text-center mt-4">
          <InfiniteScrollerEnd />
        </div>
      }
    >
      <TipsGrid tips={data.tips} />
    </InfiniteScroll>
  );
};

export default InfiniteScroller;
