import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            key: `${Math.random()}${action.placeName}`,
            name: action.placeName,
            image: {
              uri:
                "https://www.discovergreece.com/~/media/images/destination-header/r/rhodes/lindos-greek-island-of-rhodes.ashx"
            }
          }
        ]
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(
          ({ key: stateIndex }) => state.selectedPlace.key !== stateIndex
        ),
        selectedPlace: undefined
      };

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(({ key }) => key === action.key)
      };

    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: undefined
      };

    default:
      return state;
  }
};

export default reducer;
