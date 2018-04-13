import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fromJS } from 'Immutable'

import * as uiUtils from 'Utils/UiUtils'
import * as actions from '../Actions'
import Editor from './Editor'

class List extends React.Component {
  constructor() {
    super()

    this.onNew = this.onNew.bind(this)
    this.onModify = this.onModify.bind(this)
  }

  onNew(e) {
    e.preventDefault()
    let template = {
      name: '',
      active: true
    }

    const props = {
      title: 'New',
      item: fromJS(template),
      onSuccess: (newItem, callback) => {          
        this.props.insertNewItemAndHandle(newItem, (isOk) => {
          callback(isOk)
        })
      }
    }

    uiUtils.showDialog(<Editor {...props}/>)
  }

  onModify(e, item) {
    e.preventDefault()

    const props = {
      title: 'Modify',
      item: item,
      onSuccess: (updatedItem, callback) => {
        this.props.modifyItemAndHandle(updatedItem, (isOk) => {
          callback(isOk)
        })
      }
    }

    uiUtils.showDialog(<Editor {...props}/>)
  }

  renderBooleanFlag(val) {
    if (val) {
      return (<i className='fa fa-check' />)
    }

    return (<i className='fa fa-times' />)
  }

  render() {
    let path = [];

    const style = {
      activeColumn: {
        width: '100px'
      },
      actionColumn: {
        width: '100px'
      },
      buttonStyle: {
        marginLeft: '3px'
      }
    }

    const gcType = this.props.gcType

    return (
      <div>
        <table className='table'>
          <thead>
            <tr>              
              <th>Name</th>
              <th style={style.activeColumn}>Active</th>
              <th style={style.actionColumn}>
                <button className='btn btn-primary btn-xs' style={style.buttonStyle}
                  onClick={this.onNew}>
                  <i className='fa fa-plus'/> Add New
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.gcType.get('list')
                .sortBy((item) => item.get('name'))
                .map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{item.get('name')}</td>
                      <td>{this.renderBooleanFlag(item.get('active'))}</td>
                      <td>
                        <button className='btn btn-default' style={style.buttonStyle}
                          onClick={(e) => this.onModify(e, item)}>
                          <i className='fa fa-edit'></i>
                        </button>
                      </td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps({gcType}) {
  return {
      gcType: gcType
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
