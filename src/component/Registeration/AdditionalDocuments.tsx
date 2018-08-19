import * as React from 'react';
type Props = {
    onSubmit: () => void;
    previousPage: () => void;
};
class AdditionalDocuments extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            uploadedFiles: [],
            showFiles: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    submitdata() {
        console.log('inside submit');
    }
    handleChange(e: any) {
        const File = e.target.files;
        if (File.length > 0) {
            const uploadedFiles = this.state.uploadedFiles;
            uploadedFiles.push(File);
            this.setState({ uploadedFiles });
            const file = { fileName: '', fileSize: '', fileType: '' };
            file.fileName = File[0].name;
            file.fileSize = (File[0].size / (1024 * 1024)).toFixed(2);
            file.fileType = File[0].type;
            const showFiles = this.state.showFiles;
            showFiles.push(file);
            this.setState({ showFiles }); 
        }
        e.target.value = null;
    }
    delete(name: string) {
    const showFiles = this.state.showFiles;
    for ( let i = 0; i < showFiles.length; i++ ) {
        if (showFiles[i].fileName === name) {
            showFiles.splice(i, 1);
        }
     }
    this.setState({showFiles});
    }
    render() {
        const uploadSize = this.state.showFiles.length;
        return (
            <div>
                <h3>Additional documents</h3>
                <div>
                    <div className="fileUpload btn btn-upload">
                        <span><i className="fa fa-upload" />&nbsp;&nbsp;Browse File to Upload</span>
                        <input type="file" onChange={(e) => this.handleChange(e)} className="upload" />
                    </div>
                    {uploadSize < 1 && (
                        <div className="uploadMargin">
                            <h4>No file has been uploaded.</h4>
                        </div>
                    )}
                    {uploadSize > 0 && (<table className="table">
                        <thead>
                            <tr>
                                <th>S.No #</th>
                                <th>FILE NAME</th>
                                <th>FILE SIZE</th>
                                <th>FILE TYPE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.showFiles.map((File: any, index: number) =>

                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{File.fileName}</td>
                                    <td>{File.fileSize}&nbsp;MB</td>
                                    <td>{File.fileType}</td>
                                    <td><a className="deleteFile" onClick={() => this.delete(File.fileName)}>
                                        <i className="fa fa-trash-o" /></a></td>
                                </tr>
                            )}
                        </tbody>
                    </table>)}
                </div>
                <button className="btn btn-default" onClick={this.props.previousPage}>Previous</button>
                {uploadSize > 0 && (<button className="btn btn-primary" onClick={this.props.onSubmit}>Submit</button>)}
            </div>
        );
    }
}
export default AdditionalDocuments;