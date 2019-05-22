import {Component, h} from "preact";

import {inject, TYPE} from "services/ioc";
import {IMyService} from "services/my-service";

export class Counter extends Component {

    @inject(TYPE.MyService)
    private service!: IMyService;

    public render() {
        return (
            <div>{this.service.count()}</div>
        );
    }

}