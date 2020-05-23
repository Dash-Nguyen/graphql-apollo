import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import './style.scss';
import { inject } from 'mobx-react';
import Dialog from './Dialog';

class DialogBody extends React.Component<any, any> {
    ps: PerfectScrollbar = new PerfectScrollbar("any");
    componentDidMount() {
        const container: any = ReactDOM.findDOMNode(this);
        const modalWrap = container.parentNode.parentNode.parentNode.parentNode.parentNode;
        this.ps = new PerfectScrollbar(modalWrap as HTMLElement);
    }

    componentWillUnmount() {
        this.ps.destroy();
    }

    render() {
        const { children, className, ...otherProps } = this.props;
        const clsName = 'dialog-body ' + (className || '');
        return (
            <div className={clsName} {...otherProps}>
                {children}
            </div>
        );
    }
}

@inject('dialogStore')
class DialogHeader extends React.Component<any, any> {
    handleClose = () => {
        this.props.dialogStore.hide();
        this.props.onClose && this.props.onClose();
    }

    render() {
        return (
            <div className="dialog-header">
                <div className="dialog-title">{this.props.children}</div>
                <span className="icon-ico_cancel" title="Close" onClick={this.handleClose} />
            </div>
        );
    }
}

const DialogFooter = (props: any) => <div className="dialog-footer">{props.children}</div>;

export { DialogHeader, DialogBody, DialogFooter, Dialog };
