import React from "react";

function Button({ startTimer, status, stopTimer, resetTimer, resumeTimer }) {
  return (
    <>
      {status === 0 ? (
        <button
          className="btn btn-info btn-sm"
          onClick={startTimer}
        >
          Start
        </button>
      ) : (
        ""
      )}

      {status === 1 ? (
        <>
          <button
            className="btn btn-info btn-sm"
            onClick={stopTimer}
          >
            Stop
          </button>

          <button
            className="btn btn-info btn-sm"
            onClick={resetTimer}
          >
            Reset
          </button>
        </>
      ) : (
        ""
      )}

      {status === 2 ? (
        <>
          <button
            className="btn btn-info btn-sm btn btn-info btn-sm-gre"
            onClick={resumeTimer}
          >
            Resume
          </button>

          <button
            className="btn btn-info btn-sm btn btn-info btn-sm-yel"
            onClick={resetTimer}
          >
            Reset
          </button>
        </>
      ) : (
        ""
      )}

       {status === 3 ? (
        <>

            Timer finalizado

        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Button;
