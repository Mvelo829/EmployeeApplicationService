import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Input, Button, Alert, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import styles from './Details.module.scss';
import { generateGUID } from '@/utils';
import RefListDropdown from '@/app/components/refList/page';
import { get } from 'http';
import { useRefList } from '@/app/services/providers/refListProvider';
import { SeniorityRatingEnum, SkillDto, SkillService } from '@/app/services/api';
import { useSkill } from '@/app/services/providers/skillProvider';

const SkillsList: React.FC<{ skills: SkillDto[] }> = ({ skills }) => {
    const [skillsData, setSkillsData] = useState<SkillDto[]>(skills ?? []);
    const {getRefListByName,refList} = useRefList();
    const {deleteSkill} = useSkill();
    const handleSkillsAdd = () => {
        
        const newSkill: SkillDto = {
            id: generateGUID(),
            name: '',
            yearsOfExperience: 0,
            seniorityRating: SeniorityRatingEnum._1,
            personId: ''
        };
        setSkillsData([...skillsData, newSkill]);
        localStorage.setItem('skills', JSON.stringify([...skillsData, newSkill]));
    };

    const handleSkillChange = (index: number, fieldName: keyof SkillDto, value: any) => {
        const updatedSkills = [...skillsData];
        updatedSkills[index] = {
            ...updatedSkills[index],
            [fieldName]: value,
        };
        setSkillsData(updatedSkills);
        localStorage.setItem('skills', JSON.stringify(updatedSkills));
    };

    const handleDeleteSkill = (index: number) => {
        const updatedSkills = [...skillsData];
        updatedSkills.splice(index, 1);
        setSkillsData(updatedSkills);
        deleteSkill(skillsData[index].id);
        message.info(`Successfully deleted the item`);

        localStorage.setItem('skills', JSON.stringify(updatedSkills));
    };

   useEffect(()=>{
    
    const tempSkill = skills ?? [];
      setSkillsData(tempSkill);
      localStorage.setItem('skills', JSON.stringify(tempSkill));
   },[skills])

    return (
        <Form name="trigger" layout="vertical" autoComplete="off">
            {skillsData?.map((skill, index) => (
                <Row key={skill.id}>
                    <Col className={styles.ski_coll}>
                        <label className={styles.label_container}>Skill</label>
                        <Form.Item
                            name={`skill-${index}`}
                            validateTrigger="onBlur"
                            rules={[
                                { required: true, message: 'Skill is required' },
                                { max: 50, message: 'Skill cannot be longer than 50 characters' }
                            ]}
                            labelCol={{ style: { color: 'white' } }}
                        >
                            <Input
                                placeholder="Skill"
                                className={styles.input_field}
                                value={skill.name}
                                defaultValue={skill.name}
                                onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                            />
                        </Form.Item>
                    </Col>
                    <Col className={styles.years_col}>
                        <label className={styles.label_container}>Yrs Exp</label>
                        <Form.Item
                            name={`yearsExp-${index}`}
                            validateTrigger="onBlur"
                            rules={[{ required: true, message: 'Years of Experience is required' }]}
                            labelCol={{ style: { color: 'white' } }}
                        >
                            <Input
                                placeholder="Years of Experience"
                                className={styles.input_field}
                                value={skill.yearsOfExperience}
                                defaultValue={skill.yearsOfExperience}
                                onChange={(e) => handleSkillChange(index, 'yearsOfExperience', e.target.value)}
                            />
                        </Form.Item>
                    </Col>
                    <Col className={styles.details_col}>
                        <label className={styles.label_container}>Seniority Rating</label>
                        <Form.Item
                            name={`seniorityRating-${index}`}
                            validateTrigger="onBlur"
                            rules={[{ required: true, message: 'Seniority Rating is required' }]}
                            labelCol={{ style: { color: 'white' } }}
                        >
                            <RefListDropdown
                                handleChange={(value) => handleSkillChange(index, 'seniorityRating', value)}
                                selectedValue={refList?.value?.refListItems.find(item => item.value === skill?.seniorityRating)?.itemName}
                                refList={refList?.value}
                            />
                        </Form.Item>
                    </Col>
                    <Col className={styles.delete_column}>
                        <DeleteOutlined
                            className={styles.delete_icon}
                            onClick={() => handleDeleteSkill(index)}
                        />
                    </Col>
                </Row>
            ))}
            <Button type="default" className={styles.button_container} onClick={handleSkillsAdd}>Add New Skill</Button>
        </Form>
    );
};

export default SkillsList;
