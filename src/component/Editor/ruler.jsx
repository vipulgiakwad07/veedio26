import * as React from "react";
import Ruler from "@scena/react-ruler";

export default class Ruler extends React.Component {
    render() {
        return (<Ruler type="horizontal" ref={e => {
            this.ruler = e;
        }}/>);
    }
    componentDidMount() {
        this.ruler.resize();

        window.addEventListener("resize", () => {
            this.ruler.resize();
        });
    }
}

