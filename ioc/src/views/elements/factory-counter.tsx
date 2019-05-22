import {Component, h} from "preact";

import {inject, TYPE} from "services/ioc";
import {MyService} from "services/my-service";

export class FactoryCounter extends Component {

    @inject(TYPE.MyFactoryService)
    private service!: MyService;

    public render() {
        return (
            <div>{this.service.count()}</div>
        );
    }

}