import { action, configure, observable } from 'mobx';
import ItemModel from '../models/ItemModel';


export class ListStore {
    @observable ListItems: string[] = ['test'];

    @action addItem = (value) => {
        this.ListItems.push(value)
    }

    @action deleteItem = (item) => {
        this.ListItems = this.ListItems.filter(t => t !== item)
    }

}

const listStore = new ListStore();

export default listStore;