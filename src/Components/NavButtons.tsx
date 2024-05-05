
export function NavButtons({ data, dispatch }: any) {
  return (
    <div className="navContainer">
            <button
              className="navButtons"
              onClick={() => {
                data.offset >= 5 && dispatch({ type: "SET_PARAMS", params: { offset: data.offset - data.limit } });
              }}
            >
              Previous
            </button>
            <button
              className="navButtons"
              onClick={() => {
                dispatch({ type: "SET_PARAMS", params: { offset: data.offset + data.limit } });
              }}
            >
              Next
            </button>
          </div>
  )
}


