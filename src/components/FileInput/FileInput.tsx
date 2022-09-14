import React, {Component, FormEvent, ReactElement} from 'react';

interface IFileInputProps {
    fileType: string;
    onInput: (event: FormEvent) => void;
}

export class FileInput extends Component<IFileInputProps, {}>{
    constructor(props: IFileInputProps) {
        super(props);
    }

    public render(): ReactElement {
        return <input type="file" accept={this.props.fileType} onInput={this.props.onInput}></input>
    };
}