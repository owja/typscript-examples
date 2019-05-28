import {Component, h} from "preact";
import {inject, TYPE} from "services/ioc";
import {NOCACHE} from "@owja/ioc";

export class Random extends Component {

    @inject(TYPE.MyRandomService, NOCACHE)
    private value!: number;

    public render() {
        return (
            <div>{this.value}</div>
        );
    }

}