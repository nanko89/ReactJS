import React from "react";

export const Timer = (props) => {
    const [sec, setSec] = React.useState(0);
    const [min, setMin] = React.useState(0);
    const [hour, setHour] = React.useState(0);

    setTimeout(() => {
        setSec(sec + 1);
    }, 1000);

    if (sec === 60) {
        setSec(0);
        setMin(min + 1);
    }

    if (min == 60) {
        setMin(0);
        setHour(hour + 1);
    }
    return (
        <div>
            <h2>
                Timer: {hour < 10 ? "0" + hour : hour}:{min < 10 ? "0" + min : min}:
                {sec < 10 ? "0" + sec : sec}
            </h2>
        </div>
    );
};
