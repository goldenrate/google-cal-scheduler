import React, { ReactNode } from 'react';
import Week from '../model/week';
import DayElement from './day-element';

interface IWeekProps {
  week: Week;
}

const fillArrayWithEmptyDays = (length: number) => {
  const arr = new Array();
  debugger;
  for (let i = 0; i < length; i++) {
    arr.push(<DayElement key={i} day={null} isEmpty={true} />);
  }
  return arr;
};

// Component
const WeekElement: React.FC<IWeekProps> = ({ week }) => {
  console.log("week id:",week.weekInYear, week)
  let emptyBefore = fillArrayWithEmptyDays(week.getFirstDayIndex());
  let emptyAfter = fillArrayWithEmptyDays(6 - week.getLasDayIndex());

  const renderedDays = week.childrenDays.map((dayChild, index) => {
    return (
      <DayElement
        key={index}
        day={dayChild}
        isEmpty={
          dayChild.day < week.getFirstDayIndex() ||
          dayChild.day > week.getLasDayIndex()
        }
      />
    );
  });

  return (
    <tr className="xrow">
      {emptyBefore}
      {renderedDays}
      {emptyAfter}
    </tr>
  );
};

export default WeekElement;
