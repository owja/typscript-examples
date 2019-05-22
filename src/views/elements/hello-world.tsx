import {Component, h} from "preact";
import {inject, TYPE} from "services/ioc";

export class HelloWorld extends Component {

    @inject(TYPE.MyValue)
    private value: string;

    public render() {
        return (
            <div>{this.value}</div>
        );
    }

}