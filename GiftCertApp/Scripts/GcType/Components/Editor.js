import React, { PropTypes } from 'react'
import BootstrapModal from 'react-bootstrap-modal'
import * as dataUtils from 'Utils/DataUtils'
import classnames from 'classnames'

import { fromJS } from 'Immutable'

export default class Modal extends React.Component {

    constructor() {
        super()

        this.onConfirm = this.onConfirm.bind(this)
        this.onAbort = this.onAbort.bind(this)

        this.onNameChanged = this.onNameChanged.bind(this)
        this.onFlagChanged = this.onFlagChanged.bind(this)

        this.state = {
            item: fromJS({}),
            isProcessing: false,
            isNameEmpty: false
        }
    }

    componentDidMount() {
        this.promise = new $.Deferred();
        $(this.refs.Modal).modal({
            show: true
        })

        this.setState({
            ...this.state,
            item: this.props.item
        })
    }

    onNameChanged(e) {
        const item = this.state.item;
        this.setState({
            ...this.state,
            item: item.set('name', e.target.value)
        })
    }

    onFlagChanged(name, e) {
        const item = this.state.item;
        const checked = $(e.target).is(':checked');

        this.setState({
            ...this.state,
            item: item.set(name, checked)
        })
    }

    onConfirm(e) {
        e.preventDefault();
        $(this.refs.Modal).on('hidden.bs.modal', (e) => {
            return this.promise.resolve();
        })        
        const item = this.state.item

        if (dataUtils.isEmpty(item.get('name'))) {
            this.setState({
                ...this.state,
                isNameEmpty: true
            })

            return;
        }

        this.setState({
            ...this.state,
            isProcessing: true
        })

        this.props.onSuccess(item, (isOk) => {
            this.setState({
                ...this.state,
                isProcessing: false
            })

            if (isOk) {
                this.closeModal();
            }

        })
    }

    onAbort(e) {
        this.closeModal()

        $(this.refs.Modal).on('hidden.bs.modal', (e) => {
            return this.promise.reject();
        })
    }

    closeModal() {
        $(this.refs.Modal).modal('hide')
    }

    render() {
        let actionButtonStyle = {}
        let loadingIndicator

        if (this.state.isProcessing) {
            actionButtonStyle.disabled = 'disabled'

            loadingIndicator = (
                <i className='fa fa-spin fa-spinner' />
            )
        }

        const item = this.state.item;

        const nameInputDivClass = classnames('col-xs-8', {
            'has-error': this.state.isNameEmpty
        })

        return (
            <div className='modal fade' role='dialog' ref='Modal'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='close' onClick={this.onAbort}><span aria-hidden='true'>&times;</span></button>
                            <h4 className='modal-title'>{this.props.title}</h4>
                        </div>
                        <div className='modal-body'>
                            <form className='form-horizontal'>
                                <div className='form-group'>
                                    <label className='col-xs-4 control-label'>Name</label>
                                    <div className={nameInputDivClass}>
                                        <input type='text' className='form-control'
                                            onChange={this.onNameChanged}
                                            value={item.get('name')} />
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label className='col-xs-4 control-label'>Active</label>
                                    <div className='col-xs-8'>
                                        <div className='checkbox'>
                                            <label>
                                                <input type='checkbox'
                                                    onChange={_.partial(this.onFlagChanged, 'active')}
                                                    checked={item.get('active')} />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-primary' {...actionButtonStyle} onClick={this.onConfirm}>{loadingIndicator} Confirm</button>
                            <button type='button' className='btn btn-link' {...actionButtonStyle} onClick={this.onAbort}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Modal.props = {
    title: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    onSuccess: PropTypes.func.isRequired
}
