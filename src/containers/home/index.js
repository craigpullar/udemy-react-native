import { connect } from "react-redux";
import Home from "./container";
import { mapStateToProps, mapDispatchToProps } from "./connector";

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
