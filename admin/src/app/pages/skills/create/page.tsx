import { Form, Input, Row, Col, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import styles from '../Details.module.scss';
import { SkillDto } from '@/app/services/api';

interface AddNewSkillProps {
    onSubmit: (values: SkillDto) => void;
}
const AddNewSkill: React.FC< AddNewSkillProps> = ({onSubmit}) => {
    return (
        <Form
            onFinish={onSubmit} 
            layout="vertical"
        >
            <Row>
                <Col className={styles.ski_coll}>
                    <Form.Item
                        name='skill'
                        validateTrigger="onBlur"
                        rules={[{ max: 3, required: true, message: 'Skill is required' }]}
                        label="Skill"
                    >
                        <Input placeholder="Skill" className={styles.input_field} />
                    </Form.Item>
                </Col>
                <Col className={styles.years_col}>
                    <Form.Item
                        name='yearsExp'
                        validateTrigger="onBlur"
                        rules={[{ max: 3, required: true, message: 'Years of Experience is required' }]}
                        label="Yrs Exp"
                    >
                        <Input placeholder="Years of Experience" className={styles.input_field} />
                    </Form.Item>
                </Col>
                <Col className={styles.details_col}>
                    <Form.Item
                        name="seniorityRating"
                        validateTrigger="onBlur"
                        rules={[{ max: 3, required: true, message: 'Seniority Rating is required' }]}
                        label="Seniority Rating"
                    >
                        <Input placeholder="Seniority Rating" className={styles.input_field} />
                    </Form.Item>
                </Col>

            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{float:'right',marginRight:'5%',backgroundColor:'#5D356D'}}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddNewSkill;
