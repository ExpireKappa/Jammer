import React, {Component, FormEvent} from 'react'

interface IAppState {
  songUrl: string;
}

export class App extends Component<{},IAppState> {
  constructor (props: {}) {
    super(props)

    this.state = {
      songUrl: ""
    }

    this.handleFileInput = this.handleFileInput.bind(this);
  }

  private handleFileInput(event: FormEvent): void {
    const input = event.target as HTMLInputElement;
    if (input.files === null || input.files.length === 0) return;

    this.playAudioFile(input.files[0])
  }

  private handleAudioEnd(): void {
    URL.revokeObjectURL(this.state.songUrl);
  }

  private playAudioFile(file: File): void {
    const src = URL.createObjectURL(file);
    this.setState({songUrl: src})
  }

  render () {
    return (
      <div>
        <input type="file" accept="audio/*,.mp4" onInput={this.handleFileInput}/>
        {this.state.songUrl !== "" && <audio src={this.state.songUrl} onEnded={this.handleAudioEnd} controls/>}
      </div>
    )
  }
}

