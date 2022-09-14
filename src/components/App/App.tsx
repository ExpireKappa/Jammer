import React, {Component, FormEvent} from 'react'
import {AudioPlayer} from "../AudioPlayer/AudioPlayer";
import {FileInput} from "../FileInput/FileInput";
import "./app.css";

interface IAppState {
  songSrc: string;
}

export class App extends Component<{},IAppState> {
  constructor (props: {}) {
    super(props)

    this.state = {
      songSrc: ""
    }

    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleClearFile = this.handleClearFile.bind(this);
  }

  private handleFileInput(event: FormEvent): void {
    const input = event.target as HTMLInputElement;
    if (input.files === null || input.files.length === 0) return;

    this.playAudioFile(input.files[0])
  }

  private playAudioFile(file: File): void {
    const src = URL.createObjectURL(file);
    this.setState({songSrc: src})
  }

  private handleClearFile(): void {
    URL.revokeObjectURL(this.state.songSrc);
    this.setState({
      songSrc: ""
    })
  }

  render () {
    return (
      <div>
        <h1>Welcome to Jammer</h1>
        {this.state.songSrc === "" && <FileInput fileType="audio/*,.mp4" onInput={this.handleFileInput}/>}
        {this.state.songSrc !== "" && <AudioPlayer songSrc={this.state.songSrc}/>}
        {this.state.songSrc !== "" && <button onClick={this.handleClearFile}>Clear Song</button>}
      </div>
    )
  }
}

