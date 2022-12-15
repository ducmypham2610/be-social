
import TextField from '@mui/material/TextField';
import Layout from "../Components/Layout";
import { useState } from 'react';
import "../Assets/CSS/Pages/Post.css"
import * as React from 'react';
import "../Assets/CSS/Pages/MyProfile.css";
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    DatePicker,
    Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import { Modal } from 'antd';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
const { TextArea } = Input;
export default function Profile() {


    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };
    //crop img
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
        // {
        //   uid: '-1',
        // //   name: 'image.png',
        // //   status: 'done',
        // //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // },
    ]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    return (
        <Layout>
            <div className="content-profile">
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    onValuesChange={onFormLayoutChange}
                >
                    <div className="content-form">
                        <b className="lets-complete-the-profile" Style="margin:40px 0; color: #e94057; font-size:30px">My Profile</b>
                        <div className="content-1">
                            <div className="img">
                                <Form.Item valuePropName="fileList">
                                    <ImgCrop rotate>
                                        <Upload
                                            listType="picture-card"
                                            fileList={fileList}
                                            onPreview={handlePreview}
                                            onChange={handleChange}
                                        >
                                            {fileList.length >= 1 ? null : uploadButton}
                                        </Upload>
                                    </ImgCrop>
                                </Form.Item>
                            </div>
                            <div className="content-1-2">
                                <div className="firstname">
                                    <Form.Item name="name">
                                        <TextField
                                            Style="    
                                            width: 400px;
                                            height: 50px;
                                            border-radius: 10px;"
                                            id="outlined-textarea"
                                            label="Full Name"
                                            multiline
                                        />
                                    </Form.Item>
                                </div>
                                <div className="numberphone">
                                    <Form.Item name="phone">
                                        <TextField
                                            Style="    
                                            width: 400px;
                                            height: 50px;
                                            border-radius: 10px;"
                                            id="outlined-textarea"
                                            label="Phone Number"
                                            multiline
                                        />
                                    </Form.Item>
                                </div>
                                <div className="gender">
                                    <Form.Item name="gender">
                                        <Radio.Group >
                                            <Radio.Button value="male" Style="width: 400px;height:50px;"><h1 >Male</h1></Radio.Button>
                                            <Radio.Button value="female" Style="width: 400px;height:50px;"><h1 >Female</h1></Radio.Button>
                                            <Radio.Button value="other" Style="width: 400px;height:50px;"><h1 >Other</h1></Radio.Button>

                                        </Radio.Group>
                                    </Form.Item>
                                </div>
                                <div className="address">
                                    <Form.Item name="address">
                                        <TextField
                                            Style="    
                                            width: 400px;
                                            height: 50px;
                                            border-radius: 10px;"
                                            id="outlined-textarea"
                                            label="Address"
                                            multiline
                                        />
                                    </Form.Item>
                                </div>
                                <div className="dob">
                                    <Form.Item name="dob">
                                        <DatePicker />
                                    </Form.Item>
                                    <Form.Item name="gender_interest">
                                        <Select placeholder="Show me">
                                            <Select.Option value="male">Male</Select.Option>
                                            <Select.Option value="female">Female</Select.Option>
                                            <Select.Option value="other">Other</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div className="social" style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                        }}>
                            <Form.Item name="facebook">
                                <TextField
                                    Style="    
                                            width: 250px;
                                            height: 50px;
                                            border-radius: 10px;
                                            margin-right: 20px;"
                                    id="outlined-textarea"
                                    label="Facebook"
                                    multiline
                                />
                            </Form.Item>
                            <Form.Item name="Instagram">
                                <TextField
                                    Style="    
                                            width: 250px;
                                            height: 50px;
                                            border-radius: 10px;
                                            margin-right: 20px;"
                                    id="outlined-textarea"
                                    label="Instagram"
                                    multiline
                                />
                            </Form.Item>
                            <Form.Item name="Tiktok">
                                <TextField
                                    Style="    
                                            width: 200px;
                                            height: 50px;
                                            border-radius: 10px;"
                                    id="outlined-textarea"
                                    label="Tiktok"
                                    multiline
                                />
                            </Form.Item>
                        </div>
                        <div className="content-2">
                            <Form.Item name="about" className='aboutme'>
                                <TextArea rows={4} placeholder="Enter about me" Style=" border-radius:10px; width:800px" />
                            </Form.Item>
                            <Form.Item>
                                <Button Style="width:200px; height:50px; background-color: #e94057;border-radius:20px; float:right"
                                    className="btnlogin-button" type="primary" htmlType="submit" danger>
                                    <b className="btnSave">Save</b>
                                </Button>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </div>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </Layout>
    );
}