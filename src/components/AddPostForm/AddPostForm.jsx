import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import { SaveOutlined, UndoOutlined } from '@ant-design/icons';

import css from './AppPostForm.module.css';

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 17,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: 'Пожалуйста, введите ${label}',
  url: 'Пожалуйста, введите корректную ссылку (Пример: https://joeschmoe.io/api/v1/random)',
};
/* eslint-enable no-template-curly-in-string */

const AddPostForm = ({postsAmount, addPost}) => {
  const [form] = Form.useForm();
  
  const handleSubmit = ({post}) => {
    addPost(post);
    form.resetFields();
  };

  const resetDescField = () => {
    form.setFieldValue(['post', 'description'], '');
  };

  return (
    <Form 
      form={form} 
      {...layout} 
      name='nest-messages' 
      onFinish={handleSubmit} 
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['post', 'title']}
        label='Ваше имя'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input className={css.input} placeholder='Ваше имя *'/>
      </Form.Item>
      
      <Form.Item 
        name={['post', 'avatar']} 
        label='Введите ссылку на аватарку'
        rules={[
          {
            type: 'url'        
          },
        ]} 
      >
        <Input className={css.input} placeholder='Введите ссылку на аватарку'/>
      </Form.Item>
      <Form.Item
        name={['post', 'description']} 
        label='Текст поста'
        rules={[
          {
            required: true,
            min: 3,
          },
        ]} 
      >
        <Input.TextArea placeholder='Текст поста'/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 5,
        }}
      >
        <Button type='text' htmlType='submit' className={css.addBtn}>
          <SaveOutlined />
          Добавить
        </Button>
        <Button 
          shape='circle'
          type='text' htmlType='button' 
          onClick={resetDescField} 
          className={css.resetTextArea}>
          <UndoOutlined />
        </Button>
      </Form.Item>
      <p className={css.postsCounter}>Объявлений: {postsAmount}</p>
    </Form>
  );
};

AddPostForm.propTypes = {
  postsAmount: PropTypes.number.isRequired,
};

export default AddPostForm;