import { connect } from "react-redux";
import { fetchUsers } from "../Action/Action";
import App from "../App";

const mapStateToProps = (state) => {
  console.log("mapstate", state);
  return {
    display: state.loading ? (
      <div>loading</div>
    ) : state.error ? (
      <h1>{state.error}</h1>
    ) : (
      state.users.map((item,index) => {
        return (
          <li key={item.id}>
            <h3 >
              {item.id}. {item.name}
            </h3>
          </li>
        );
      })
    )
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    call: () => dispatch(fetchUsers())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
