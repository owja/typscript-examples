import {Component, h} from "preact";

import {inject, TYPE} from "services/ioc";
import {MyOtherService} from "services/my-other-service";

export class PassedCounter extends Component {

    @inject(TYPE.MyOtherService)
    private service!: MyOtherService;

    public render() {
        return (
            <div>{this.service.count()}</div>
        );
    }

}