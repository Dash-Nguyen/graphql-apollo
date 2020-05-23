import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { DialogStore } from '../../Stores/DialogStore';
import { Modal } from 'antd';
import './style.scss';
import { get } from 'mobx';

interface Props {
	dialogStore?: DialogStore;
	[x: string]: any;
}

interface State {}

@inject('dialogStore')
@observer
export default class Dialog extends React.Component<Props, State> {
	componentWillUnmount() {
		const instance = this.props.dialogStore.getCurrentInstance();
		this.props.dialogStore.hide(get(instance, 'id'));
	}

	closeDialog = () => {
		this.props.dialogStore.hide();
	};

	renderInstance = (instance: any, index: any) => {
		const { visible, content, options, id } = instance;
		const { className, width, keyboard = true, ...otherProps } = options || {};
		return (
			<Modal
				keyboard={keyboard}
				key={index}
				visible={visible}
				width={width}
				style={otherProps}
				onCancel={this.closeDialog}
				className={'custom-dialog ' + (className || '')}
			>
				{content}
				<input type="hidden" value={0} />
			</Modal>
		);
	};

	render() {
		const { instances } = this.props.dialogStore;

		return (
			<div className="custom-dialog-container">
				{instances.map((item: any, index: any) => {
					return this.renderInstance(item, index);
				})}
			</div>
		);
	}
}
