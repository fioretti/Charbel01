import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { bindActionCreators, applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

import { fromJS } from 'Immutable'
import ReduxToastr, { reducer as toastrReducer } from 'react-redux-toastr'

import * as actions from './Actions'
import reducer from './Reducer'

import List from './Components/List'

class GcType extends React.Component {
    componentDidMount() {
        this.props.populateData(fromJS(JSON.parse($('#gcTypes').val())));
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

function mapStateToProps({ gcType }) {
    return {
        gcType: gcType
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

const GcTypeContainer = connect(mapStateToProps, mapDispatchToProps)(GcType)

const rootReducers = combineReducers({
    gcType: reducer,
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
            <GcTypeContainer />
            <ReduxToastr />
        </div>
    </Provider>,
    document.getElementById('content')
);
