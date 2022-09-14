import { Component, ReactElement } from "react";
import {Audio} from "../Audio/Audio";

interface IAudioPlayerProps {
    songSrc: string;
}

export class AudioPlayer extends Component<IAudioPlayerProps>{
    constructor(props: IAudioPlayerProps) {
        super(props);
    }

    private handleAudioEnd(): void {
        URL.revokeObjectURL(this.props.songSrc);
    }

    public render(): ReactElement {
        return (
            <div className="audio-player">
                <Audio src={this.props.songSrc} onEnd={this.handleAudioEnd} showNativeControls={true}/>
            </div>
        );
    }
};
