import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
type Props = {
    id: any;
}
export default class FileSelector extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        console.log(this.props);
        this.state = {
            formId: '',
            uploadedFiles: [],
            showFiles: [],
            file: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        console.log("will mount");
        this.state.formId = this.props.id;
        console.log(this.state);
    }

    handleChange(e: any) {
        const File = e.target.files;
        console.log(e.target.files[0]);
        this.state.file = e.target.files[0];
        this.fileUpload(this.state.file);
        console.log(this.state);
        if (File.length > 0) {
            const uploadedFiles = this.state.uploadedFiles;
            uploadedFiles.push(File);
            this.setState({uploadedFiles});
            const file = {fileName: '', fileSize: '', fileType: ''};
            file.fileName = File[0].name;
            file.fileSize = (File[0].size / (1024)).toFixed(2);
            file.fileType = File[0].type;
            const showFiles = this.state.showFiles;
            showFiles.push(file);
            this.setState({showFiles});
            console.log(this.state);
        }
        e.target.value = null;
    }

    fileUpload(file: any) {
        console.log("inside file upload");
        console.log(file);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('id', this.state.formId);
        /*const config = {
         headers: {
         'content-type': 'multipart/form-data'
         }
         }*/
        axios.post('/api/registration/upload', formData).then((response) => {
            console.log(response); // do something with the response
        })
    }

    delete(name: string) {
        const showFiles = this.state.showFiles;
        for (let i = 0; i < showFiles.length; i++) {
            if (showFiles[i].fileName === name) {
                showFiles.splice(i, 1);
            }
        }
        this.setState({showFiles});
    }

    render() {
        /*const ID = this.state.formId;*/
        const uploadSize = this.state.showFiles.length;
        return (
            <div>
                <div>
                    <ul className="custProgressbar">
                        <li className="active">Mobile Details</li>
                        <li className="active">Upload</li>
                        <li>Payment</li>
                    </ul>
                </div>
                {/*<div className="requestId"><span>Request # :</span> DRB16</div>*/}
                <div className="fileUpload btn btn-upload">
                    <span className="uploadText"><i className="fa fa-upload"/>&nbsp;&nbsp;Browse File to Upload</span>
                    <input type="file" onChange={(e) => this.handleChange(e)} className="upload"/>
                </div>
                {uploadSize < 1 && (
                    <div className="uploadMargin">
                        <h4>No file has been uploaded.</h4>
                    </div>
                )}
                {uploadSize > 0 && (
                    <div className="alert alert-success uploadMargin">
                        <strong>Success!</strong> You have successfully uploaded the document. You can upload more files or
                        Please proceed to payment.
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
                                <i className="fa fa-trash-o"/></a></td>
                        </tr>
                    )}
                    </tbody>
                </table>)}
                <div>
                    {uploadSize < 1 && <span className="disablepayment">Payment</span>
                    }
                    {uploadSize > 0 && <Link to='/payment' className="payment">Payment &nbsp;<i className="fa fa-arrow-right"/></Link>
                    }
                </div>
            </div>
        );
    }
}