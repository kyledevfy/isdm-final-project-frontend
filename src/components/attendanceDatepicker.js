import React from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const AttendanceDatepicker = (props) => {
  return (
    <div>
      <DateRangePicker
        onChange={(value) => {
          var d1 = value[0].toISOString().split("T")[0];
          var d2 = value[1].toISOString().split("T")[0];
          props.setDate([d1, d2]);
        }}
        value={props.date}
        showLeadingZeros={true}
        dayPlaceholder={"dd"}
        monthPlaceholder={"mm"}
        yearPlaceholder={"yyyy"}
      />
    </div>
  );
};

export default AttendanceDatepicker;
