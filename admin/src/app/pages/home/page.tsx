"use client"
import React, { use, useEffect, useState } from 'react';
import { Button, Col, DatePicker, DatePickerProps, Dropdown, DropdownProps, Flex, Input, Layout, MenuProps, Row, Select, Space, Spin } from 'antd';
import { DownOutlined, PlusCircleFilled } from '@ant-design/icons';
import PersonsList from '../employees/page';
import CustomModal from '@/app/components/modal';
import CreateOrEditEmployee from '../employees/create/page';
import { usePerson } from '@/app/services/providers/employeeProvider';
import { ApplyFilterItems, Filteritems } from '@/utils';
import { CreatePersonDto } from '@/app/services/api';
import { useSkill } from '@/app/services/providers/skillProvider';
import Image from 'next/image'
import styles from './Main.module.scss';
import { useRefList } from '@/app/services/providers/refListProvider';


const { Header, Content } = Layout;

const App: React.FC = () => {
    const [value, setValue] = React.useState<string>('horizontal');
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState<CreatePersonDto | null>(null);

    const { persons, getAllEmployees } = usePerson();
    const { skillSet, getSkills, getAllSkills, allSkills } = useSkill();
    const [personsList, setPersonsList] = useState([]);
    const { getRefListByName } = useRefList();
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [filterDateValue, setFilterDateValue] = useState<string>('');
    const [filterSkillValue, setFilterSkillValue] = useState<string>('');

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        debugger
        if (e.key === '1') {
            setSelectedFilter('1')
        } else if (e.key === '2') {
            setSelectedFilter('2')
            setPersonsList(persons?.value?.items || [])
        } else {
            setSelectedFilter('3')
            setPersonsList(persons?.value?.items || [])
        }
    };

    const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
        if (info.source === 'trigger' || nextOpen) {
            setOpen(nextOpen);
        }
    };

    const handleSubmit = (values: any) => {
        setModalOpen(false);
    }

    const handleFilterbyKillChange = (value) => {
       setFilterSkillValue(value)
    }
    
    const handleClearFiler = () => {
        setFilterSkillValue('')
        setFilterDateValue('')
        setSelectedFilter('')
        setPersonsList(persons?.value?.items || [])
    }
    const handleFilter = () => {

        debugger
        if(filterSkillValue !== '' && filterDateValue !== '')
        {
            const personIds = allSkills?.value?.items.filter(skill => skill.name === value).map(skill => skill.personId);
            const filteredPersons = persons?.value?.items.filter(employee => personIds.includes(employee.id) && employee.dateOfBirth === new Date(filterDateValue));
            setPersonsList(filteredPersons);

        } else if(filterSkillValue !== '' && filterDateValue === '') {
            const personIds = allSkills?.value?.items.filter(skill => skill.name === value).map(skill => skill.personId);
            const filteredPersons = persons?.value?.items.filter(employee => personIds.includes(employee.id));
            setPersonsList(filteredPersons);
        } else if(filterDateValue !== '' && filterSkillValue === '') {  
            const filteredPersons = persons?.value?.items.filter(employee => employee.dateOfBirth === new Date(filterDateValue));
            setPersonsList(filteredPersons);
        }
       else{
            setPersonsList(persons?.value?.items || [])
            setSelectedFilter('')
        }
    }
    const searchEmployees = (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();
        if (!searchTerm) {
            setPersonsList(persons?.value?.items || []);
            return;
        }
        const filtered = personsList.filter(employee =>
            employee.firstName.toLowerCase().includes(searchTerm) ||
            employee.lastName.toLowerCase().includes(searchTerm) ||
            employee.emailAddress.toLowerCase().includes(searchTerm)
        );
        setPersonsList(filtered);
    };

    const handleItemSelect = (person: CreatePersonDto, event: React.MouseEvent) => {
        getSkills(person.id);
        setSelectedPerson(person)
        event.stopPropagation()
    }

    const handleModal = () => {

        setSelectedPerson({})
    }

    const OnDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        setFilterDateValue(dateString.toString())
    };

    useEffect(() => {
        debugger
        if (selectedPerson != undefined && selectedPerson != null && Object.keys(selectedPerson).length === 0) {
            setModalOpen(true)
        }
    }, [selectedPerson])

    useEffect(() => {
        if (skillSet?.state === 'success') {
            localStorage.clear();
            localStorage.setItem('skills', JSON.stringify(skillSet?.value?.items));
            setModalOpen(true);
        }
    }, [skillSet?.state])

    useEffect(() => {
        getAllEmployees()
        getAllSkills()
        getRefListByName('SeniorityRating');
    }, [])

    useEffect(() => {
        setPersonsList(persons?.value?.items || [])
    }, [persons])



    const items: MenuProps['items'] = Filteritems;

    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>

            </Header>
            <Content className={styles.content}>

                <div className={styles.main_container}
                >
                    <Flex gap="middle" vertical>

                        <Flex vertical={value === 'vertical'} className={styles.flex_container}>
                            <Row className={styles.flex_container2}>
                                <Col style={{ marginRight: '15px' }}>
                                    <div className={styles.employees_text1}>Employees</div>
                                    <div className={styles.employees_text2}>There are {persons?.value?.totalCount} employees</div>
                                </Col>
                                {
                                    personsList.length > 0 && selectedFilter != '1' && selectedFilter != '2' && selectedFilter != '3' ?
                                        <Col className={styles.search_input} >
                                            <Input placeholder="Search" className={styles.input_search} onChange={searchEmployees} />
                                        </Col> :
                                        <Col className={styles.search_input} >
                                            <>
                                                {
                                                    selectedFilter === '1' && allSkills?.value !== undefined ? (
                                                        <Row>
                                                          <Col className={styles.main_col}>
                                                          <Select
                                                            showSearch
                                                            style={{
                                                                backgroundColor: '#878282',
                                                                color: 'white',
                                                                width: '100%'
                                                            }}
                                                            optionFilterProp="children"
                                                            onChange={handleFilterbyKillChange}
                                                            filterSort={(optionA, optionB) =>
                                                                optionA.label.toLowerCase().localeCompare(optionB.label.toLowerCase())
                                                            }
                                                            options={allSkills?.value?.items?.map(item => ({
                                                                label: item.name,
                                                                value: item.name
                                                            }))}
                                                        />
                                                          </Col>
                                                          <Col  className={styles.colButon2}>
                                                        <Button className={styles.clearFilter} onClick={handleFilter}> 
                                                            Apply Filter
                                                        </Button>
                                                    </Col>
                                                    <Col className={styles.colButon}>
                                                        <Button className={styles.clearFilter} onClick={handleClearFiler}>
                                                            Clear Filter
                                                        </Button>
                                                    </Col>
                                                        </Row>
                                                       
                                                      
                                                    ) : selectedFilter === '2' && allSkills?.value !== undefined ? (
                                                        <Row >
                                                            <Col className={styles.main_col}>
                                                                <DatePicker onChange={OnDateChange} className={styles.date_picker}/>
                                                            </Col>
                                                            <Col  className={styles.colButon2}>
                                                                <Button className={styles.clearFilter} onClick={handleFilter}> 
                                                                    Apply Filter
                                                                </Button>
                                                            </Col>
                                                            <Col className={styles.colButon}>
                                                                <Button className={styles.clearFilter} onClick={handleClearFiler}>
                                                                    Clear Filter
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    ) : selectedFilter === '3' && allSkills?.value !== undefined ? (
                                                        <Row>
                                                            <Col className={styles.col2}>
                                                                <Select
                                                                    showSearch
                                                                    style={{
                                                                        backgroundColor: '#878282',
                                                                        color: 'white',
                                                                        width: '100%'
                                                                    }}
                                                                    optionFilterProp="children"
                                                                    onChange={handleFilterbyKillChange}
                                                                    filterSort={(optionA, optionB) =>
                                                                        optionA.label.toLowerCase().localeCompare(optionB.label.toLowerCase())
                                                                    }
                                                                    options={allSkills?.value?.items?.map(item => ({
                                                                        label: item.name,
                                                                        value: item.name
                                                                    }))}
                                                                />
                                                            </Col>
                                                            <Col className={styles.col3}>
                                                                <DatePicker onChange={OnDateChange} style={{ backgroundColor: '#878282'}}/>
                                                            </Col>
                                                            <Col  className={styles.colButon2}>
                                                                <Button className={styles.clearFilter} onClick={handleFilter}> 
                                                                    Apply Filter
                                                                </Button>
                                                            </Col>
                                                            <Col className={styles.colButon}>
                                                                <Button className={styles.clearFilter} onClick={handleClearFiler}>
                                                                    Clear Filter
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    ) : null
                                                }

                                            </>
                                        </Col>
                                }

                                <Col className={styles.filter_menu} >
                                    <Dropdown
                                        menu={{
                                            items,
                                            onClick: handleMenuClick,
                                        }}
                                        onOpenChange={handleOpenChange}
                                        open={open}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space style={{ color: 'white' }}>
                                                Filter by
                                                <DownOutlined style={{ color: '#5D356D' }} />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </Col>
                                <Col style={{ marginTop: '1.8%' }}>
                                    <Button type="primary" className={styles.submitButton} onClick={handleModal}>
                                        <PlusCircleFilled style={{ fontSize: '25px' }} />
                                        <div style={{ fontSize: '10px' }}>New employee</div>
                                    </Button>
                                </Col>
                            </Row>
                        </Flex>
                        <div className={styles.person_list}>
                            <PersonsList persons={personsList} setPersonList={setPersonsList} handleItemClick={handleItemSelect} />
                        </div>

                    </Flex>
                    {
                        personsList.length == 0 ?
                            <>
                                <div className={styles.assets_container}>
                                    <Image src="/assets/Empty.JPG" alt="My Image" width={200} height={200} />
                                </div>
                                <div className={styles.mesage_text}>
                                    <p>There is nothing here</p>
                                </div>

                                <div className={styles.mesage_text2}>
                                    Create a new employee by clicking the
                                </div>
                                <div className={styles.mesage_text3}>
                                    New employee button to get started
                                </div>
                            </>
                            : null
                    }

                </div>

            </Content>
            <CustomModal title="Create new employee" isOpen={modalOpen} onOk={() => { handleSubmit }} onCancel={() => { setModalOpen(false) }} formComponent={<CreateOrEditEmployee onFinish={handleSubmit} selectedPerson={selectedPerson} />} buttonTitle={'Save changes to Employee'} useCustomFooter={true} disableFooter={true} />
        </Layout>
    );
};

export default App;