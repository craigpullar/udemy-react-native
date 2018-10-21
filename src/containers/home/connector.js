import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "../../store/actions";

export const mapStateToProps = state => ({
  places: state.places.places,
  selectedPlace: state.places.selectedPlace
});

export const mapDispatchToProps = dispatch => ({
  onAddPlace: ({ placeName }) => dispatch(addPlace({ placeName })),
  onDeletePlace: () => dispatch(deletePlace()),
  onSelectPlace: ({ key }) => dispatch(selectPlace({ key })),
  onDeselectPlace: () => dispatch(deselectPlace())
});
