import { observable, action } from 'mobx';

class commonStore {
    @observable appname = 'Live Mall'

}

export default new commonStore()