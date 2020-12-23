import React from "react";

function Button({ startTimer, status, stopTimer, resetTimer, resumeTimer }) {
  return (
    <>
      {status === 0 ? (
        <button
          className="btn btn-sm"
          onClick={startTimer}
        >
          ▶
        </button>
      ) : (
        ""
      )}

      {status === 1 ? (
        <>
          <button
            className="btn btn-sm"
            onClick={stopTimer}
          >
            ⏹
          </button>

          <button
            className="btn btn-sm"
            onClick={resetTimer}
          >
            ↺
          </button>
        </>
      ) : (
        ""
      )}

      {status === 2 ? (
        <>
          <button
            className="btn btn-sm"
            onClick={resumeTimer}
          >
            ▶
          </button>

          <button
            className="btn btn-sm"
            onClick={resetTimer}
          >
            ↺
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
