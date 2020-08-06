import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject" 
            label="Matéria" 
            placeholder="Selecione qual você quer ensinar"
            options={[
              { value: 'Javascript', label: 'Javascript'},
              { value: 'Ruby', label: 'Ruby'},
              { value: 'Java', label: 'Java'},
              { value: 'PHP', label: 'PHP'},
              { value: 'Flutter', label: 'Flutter'},
              { value: 'React', label: 'React'},
              { value: 'Node', label: 'Node'},
              { value: 'ReactNative', label: 'ReactNative'},
              { value: 'Vue.js', label: 'Vue.js'},
            ]}
          />
          <Select
            name="week_day" 
            label="Dia da Semana" 
            options={[
              { value: '0', label: 'Domingo'},
              { value: '1', label: 'Segunda-feira'},
              { value: '2', label: 'Terça-feira'},
              { value: '3', label: 'Quart-feira'},
              { value: '4', label: 'Quinta-feira'},
              { value: '5', label: 'Sexta-feira'},
              { value: '6', label: 'Sábado'},
            ]}
          />
          <Input type="time" name="time" label="Hora"/>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
};

export default TeacherList;