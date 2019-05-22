import {h} from "preact";

type Element = (props: {default: boolean}) => JSX.Element;
export const NotFound: Element = () => <div>PAGE NOT FOUND</div>;
