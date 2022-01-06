import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const AttendanceDatepicker = () => {
  const [date, setDate] = useState([null, null]);
  return (
    <div>
      <DateRangePicker onChange={(value) => setDate(value)} value={date} />
    </div>
  );
};

export default AttendanceDatepicker;
