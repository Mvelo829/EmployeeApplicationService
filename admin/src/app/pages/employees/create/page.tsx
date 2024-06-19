import React, { useEffect, useState } from 'react';
import { Col, DatePicker, Form, Input, Row, Button } from 'antd';
import styles from './Create.module.scss';
import SkillsList from '../../skills/page';
import { PlusCircleFilled } from '@ant-design/icons';
import { usePerson } from '@/app/services/providers/employeeProvider';
import { CreatePersonDto, SkillDto } from '@/app/services/api';
import { useSkill } from '@/app/services/providers/skillProvider';



interface ICreateEmployeeProps {
    onFinish(values: any): void;
    selectedPerson: CreatePersonDto;
}

const CreateOrEditEmployee: React.FC<ICreateEmployeeProps> = ({ onFinish, selectedPerson = null }) => {

    const { skillSet } = useSkill();
    // const [skills, setSkills] = useState<SkillDto[]>([]);
    const { createPerson, updatePerson } = usePerson();
    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState({});
    const [selected, setSelected] = useState<CreatePersonDto>(null);
    const [mode, setMode] = useState<'create' | 'edit'>('create');


    useEffect(() => {
        debugger
        const test = skillSet;
        setSelected(selectedPerson)
    }, [selectedPerson])

    const handleSaveChanges = async () => {
        try {
            debugger
            const values = await form.validateFields();
            const payload: CreatePersonDto = {
                id: selectedPerson?.id,
                mobileNumber: values.contact_number, emailAddress: values.email_address, firstName: values.FirstName, lastName: values.LastName, dateOfBirth: values.DateOfBirth,
                city: values.City, postalCode: values.PostalCode, country: values.Country, streeAddress: values.street_address
            }
            if (selectedPerson != null && Object.keys(selectedPerson).length !== 0) {
                updatePerson(payload);
            } else {
                createPerson(payload);
            }
            onFinish(values);
            form.resetFields()
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };

    const handleChange = (changedValues) => {
        setFormValues({ ...formValues, ...changedValues });
        setMode('edit');
    }
    return (
        <Form
            form={form}
            name="trigger"
            className={styles.form_container}
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
            initialValues={{
                FirstName: selectedPerson?.firstName,
                LastName: selectedPerson?.lastName,
                contact_number: selectedPerson?.mobileNumber,
                email_address: selectedPerson?.emailAddress,
                street_address: selectedPerson?.streeAddress,
                City: selectedPerson?.city,
                PostalCode: selectedPerson?.postalCode,
                Country: selectedPerson?.country,
            }}
        >
            {/* Basic Info Section */}
            <div className={styles.section_container}>
                <div className={styles.sectionHeader_container}>
                    Basic Info
                </div>
                <Row gutter={16}>

                    <Col span={12}>
                        <label className={styles.label_container}>FirstName</label>
                        <Form.Item
                            name="FirstName"
                            rules={[{ required: true, message: 'Please enter first name' }]}
                        >
                            <Input placeholder="First Name" className={styles.input_field} defaultValue={selectedPerson?.firstName} onChange={handleChange} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <label className={styles.label_container}>Last Name</label>

                        <Form.Item
                            name="LastName"
                            rules={[{ required: true, message: 'Please enter last name' }]}
                        >
                            <Input placeholder="Last Name" className={styles.input_field} defaultValue={selectedPerson?.lastName} onChange={handleChange} />
                        </Form.Item>
                    </Col>
                </Row>
                <label className={styles.label_container}>Contact Number</label>

                <Form.Item
                    name="contact_number"
                    rules={[{ required: true, message: 'Please enter contact number' }]}
                >
                    <Input placeholder="Contact Number" className={styles.input_field} defaultValue={selectedPerson?.mobileNumber} onChange={handleChange} />
                </Form.Item>

                <label className={styles.label_container}>Email Address</label>
                <Form.Item
                    name="email_address"
                    rules={[
                        { required: true, message: 'Please enter email address' },
                        { type: 'email', message: 'Please enter a valid email address' }
                    ]}
                >
                    <Input placeholder="Email Address" className={styles.input_field} defaultValue={selectedPerson?.emailAddress} onChange={handleChange} />
                </Form.Item>

                {selectedPerson != null ? null :
                    <Row gutter={16}>
                        <Col span={12}>
                            <label className={styles.label_container}>Date of Birth</label>
                            <Form.Item
                                name="DateOfBirth"

                                rules={[{ required: true, message: 'Please select date of birth' }]}
                            >
                                <DatePicker style={{ width: '100%' }} onChange={handleChange} className={styles.input_field} />
                            </Form.Item>
                        </Col>
                    </Row>
                }

            </div>

            {/* Address Info Section */}
            <div className={styles.section_container}>
                <div className={styles.sectionHeader_container}>
                    Address Info
                </div>

                <label className={styles.label_container}>Street Address</label>
                <Form.Item
                    name="street_address"
                    rules={[{ required: true, message: 'Please enter street address' }]}
                >
                    <Input placeholder="Street Address" className={styles.input_field} defaultValue={selectedPerson?.streeAddress} onChange={handleChange} />
                </Form.Item>

                <Row gutter={16}>
                    <Col span={8}>
                        <label className={styles.label_container}>City</label>
                        <Form.Item
                            name="City"
                            rules={[{ required: true, message: 'Please enter city' }]}
                        >
                            <Input placeholder="City" className={styles.input_field} defaultValue={selectedPerson?.city} onChange={handleChange} />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <label className={styles.label_container}>Postal Code</label>
                        <Form.Item
                            name="PostalCode"
                            rules={[{ required: true, message: 'Please enter postal code' }]}
                        >
                            <Input placeholder="Postal Code" className={styles.input_field} defaultValue={selectedPerson?.postalCode} onChange={handleChange} />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <label className={styles.label_container}>Country</label>
                        <Form.Item
                            name="Country"
                            rules={[{ required: true, message: 'Please enter country' }]}
                        >
                            <Input placeholder="Country" className={styles.input_field} defaultValue={selectedPerson?.country} onChange={handleChange} />
                        </Form.Item>
                    </Col>
                </Row>
            </div>

            {/* Skills Info Section */}
            <div className={styles.section_container}>
                <div className={styles.sectionHeader_container}>
                    Skills Info
                </div>
                <SkillsList skills={skillSet?.value?.items} />
            </div>

            {/* Save Button */}
            <Row className={styles.button_row} justify="end">
                <Col>
                    <Button type="primary" htmlType="button" className={styles.submit_button} onClick={handleSaveChanges}>
                        <PlusCircleFilled className={styles.button_icon} />
                        Save changes to Employee
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default CreateOrEditEmployee;
