import { Component, ReactElement } from "react";

interface IAudioProps {
    src: string;
    onEnd: () => void;
    showNativeControls?: boolean;
}

export class Audio extends Component<IAudioProps, {}>{

    constructor(props: IAudioProps) {
        super(props);
    }

    public render(): ReactElement {
        return <audio src={this.props.src}
                    onEnded={this.props.onEnd}
                    controls={this.props.showNativeControls}/>
    };
}