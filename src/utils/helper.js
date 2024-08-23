export const getDateTodayYMD = () => {
  const date = new Date();
  const formattedDate = date.toJSON().slice(0, 10);
  return formattedDate;
};

export const getCustomScrollbar = {
  /* width */
  "::-webkit-scrollbar": {
    width: "10px",
  },

  /* Track */
  "::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },

  /* Handle */
  "::-webkit-scrollbar-thumb": {
    background: "#888",
  },

  /* Handle on hover */
  "::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },

  overflowY: "auto",
};
