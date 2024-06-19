import React from 'react';
import { Row, Col, Avatar } from 'antd'; // Assuming you are using Ant Design for components
import { CreatePersonDto } from '@/app/services/api';
import { DeleteOutlined } from '@ant-design/icons';
import styles from './EmployeeList.module.scss';
import { usePerson } from '@/app/services/providers/employeeProvider';

interface PersonsListProps {
    persons: CreatePersonDto[];
    setPersonList: (persons: CreatePersonDto[]) => void;
    handleItemClick: (person: CreatePersonDto,event: React.MouseEvent) => void;
}

const PersonsList: React.FC<PersonsListProps> = ({ persons, setPersonList ,handleItemClick}) => {
    const { deletePerson } = usePerson();
    const handlePersonDelete = (index: number) => {
        const person = persons[index];
        deletePerson(person.id);
        const newPersons = persons.filter((person, i) => i !== index);
        setPersonList(newPersons);
    }
    return (
        <>
            {persons?.map((person, index) => (
                <div key={person.id} className={styles.wrap_container}>
                    <Row className={styles.row_container} onClick={(event)=>handleItemClick(person,event)}  >
                        <Col xs={3} sm={2} md={1} className={styles.column_container}>
                            <Avatar className={styles.avatar_container} size="default">
                                {index + 1}
                            </Avatar>
                        </Col>
                        <Col xs={8} sm={5} md={4} className={styles.column_container1}>
                            <div className={styles.column_text}>{person.firstName}</div>
                        </Col>
                        <Col xs={8} sm={5} md={4} className={styles.column_text1}>
                            <div className={styles.column_text}>{person.lastName}</div>
                        </Col>
                        <Col xs={5} sm={4} md={3} className={styles.column_text1}>
                            <div className={styles.column_text}>{person.mobileNumber}</div>
                        </Col>
                        <Col xs={5} sm={4} md={3}>
                        </Col>
                        <Col xs={5} sm={4} md={3} >
                        </Col>
                        <Col xs={5} sm={4} md={3}>
                        </Col>
                    </Row>
                    
                        <DeleteOutlined
                            className={styles.delete_icon}
                                onClick={() => handlePersonDelete(index)}
                            />
                </div>
            ))}
        </>
    );
};

export default PersonsList;
