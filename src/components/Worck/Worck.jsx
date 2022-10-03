import { AddLessons } from 'components/AddLessons/AddLessons';
import { PayStatus } from 'components/PayStatus/PayStatus';
import { useEffect } from 'react';
import { useState } from 'react';
import { getWorcks } from 'service/api';
import { countPayDay } from 'service/countPayDay';
import { TodayStatystick } from 'components/TodayStatystick/TodayStatystick';

export const Worck = () => {
  const updateComp = true;
  const [worckList, setWorckList] = useState([]);
  const [price, setPrice] = useState(0);
  const [interval, setInterval] = useState('');
  const [isLoading, setIsLoader] = useState(false);

  const pushNewWorckEl = el => {
    setWorckList(i => [...i, el]);
  };

  useEffect(() => {
    setIsLoader(l => (l = true));

    getWorcks()
      .then(r => {
        setWorckList(i => [...r]);
        setPrice(() => countPayDay(r));
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoader(l => (l = false)));
  }, [updateComp]);

  useEffect(() => {
    setPrice(() => countPayDay(worckList, interval));
  }, [worckList, interval]);

  return (
    <>
      <AddLessons pushNewWorckEl={pushNewWorckEl} />
      {worckList.length > 0 && <TodayStatystick worckList={worckList} />}
      {!isLoading ? (
        <PayStatus setInterval={setInterval} price={price} />
      ) : (
        <div>Load...</div>
      )}
    </>
  );
};
