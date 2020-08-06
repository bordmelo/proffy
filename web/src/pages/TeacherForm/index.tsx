import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const TeacherForm = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);
  
  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas." 
        description="O primeiro passo, é preencher esse
        formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

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

          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map( scheduleItem => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
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
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            )
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar Cadastro
          </button>
        </footer>
      </main>
    </div>
  )
};

export default TeacherForm;