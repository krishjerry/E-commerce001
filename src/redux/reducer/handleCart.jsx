const cart = [];
const handleCart = (state = cart, action) => {
  const Products = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exit = state.find((x) => x.id === Products.id);
      if (exit) {
        return state.map((x) =>
          x.id === Products.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const Products = action.payload;
        return [
          ...state,
          {
            ...Products,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.id === Products.id);
      if (exist1.qty === 1) {
        return state.find((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === Products.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};
export default handleCart;
