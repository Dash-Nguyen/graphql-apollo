import React from 'react';
import { observable, action, configure, runInAction } from 'mobx';

configure({
    enforceActions: 'observed'
});

export class DialogStore {
    @observable instances: any[] = [];
    @observable loading = false;

    @action
    showLoading() {
        this.loading = true;
    }

    @action
    hideLoading() {
        this.loading = false;
    }

    @action
    show(content: JSX.Element, options?: any) {
        const instance = new DialogInstance(content, true, options);
        this.instances.push(instance);
    }



    getCurrentInstance = () => {
        const length = this.instances.length;
        return this.instances[length - 1];
    }

    @action
    hide(id?: any) {
        if (id) {
            const index = this.instances.findIndex(instance => instance.id === id);
            if (index !== -1) {
                this.instances[index].visible = false;
                runInAction(() => {
                    this.instances.splice(index, 1);
                });
            }
        }
        const length = this.instances.length;
        if (length) {
            this.instances[length - 1].visible = false;
        }

        runInAction(() => {
            this.instances.splice(-1, 1);
        });
    }
}

export const DialogStoreInstance = new DialogStore();

class DialogInstance {
    constructor(content: any, visible: any, options: any) {
        this.content = content;
        this.visible = visible;
        this.options = options;
    }

    @observable content = null;
    @observable visible = false;
    @observable options = {};
}
