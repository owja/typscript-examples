import {Container, createDecorator} from "@owja/ioc";

// we create a new container - it is possible to create more than one
const container = new Container();
const inject = createDecorator(container);

export {container, inject};
