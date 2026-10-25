import { useEffect, useRef, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());
  
  const intervalId = useRef(null);
  
  useEffect(() => {
    intervalId.current = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000,
    )
    return () => {
      stop()
    }
  }, [intervalId]);
  // componentDidMount() {
  //   console.log("Interval");
  //   this.intervalId = setInterval(
  //     () => this.setState({ time: new Date().toLocaleTimeString() }),
  //     1000,
  //   );

  //   console.log(this.intervalId);
  // }

  // componentWillUnmount() {
  //   return this.stop();
  // }

  const stop = () => {
    clearInterval(intervalId.current);
  };

    return (
      <div>
        <h1>{time}</h1>
        <button type="button" onClick={stop}>
          Stop time
        </button>
      </div>
    );
  }

