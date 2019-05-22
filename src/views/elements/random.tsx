import {Component, h} from "preact";
import {inject, TYPE} from "services/ioc";

export class Random extends Component {

    @inject(TYPE.MyRandomService)
    private value!: number;

    public render() {
        return (
            <div>{this.value}</div>
        );
    }

}