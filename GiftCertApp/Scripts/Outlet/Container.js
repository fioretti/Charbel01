import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { bindActionCreators, applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

import { fromJS } from 'Immutable'
import ReduxToastr, {reducer as toastrReducer} from 'react-redux-toastr'

import * as actions from './Actions'
import reducer from './Reducer'

import List from './Components/List'

class Outlet extends React.Component {
  componentDidMount() {
    this.props.populateData(fromJS(JSON.parse($('#outlets').val())));
  }

  render() {
    const style = {
      container: {
        padding: '15px'
      }
    }

    return (
      <div style={style.container}>
        <List />
      </div>
    );
  }
}

function mapStateToProps({outlet}) {
  return {
      outlet: outlet
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const OutletContainer = connect(mapStateToProps, mapDispatchToProps)(Outlet)

const rootReducers = combineReducers({
  outlet: reducer,
  toastr: toastrReducer
});

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <OutletContainer  />
      <ReduxToastr />
    </div>
  </Provider>,
  document.getElementById('content')
);
