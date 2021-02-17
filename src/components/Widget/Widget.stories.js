import React from 'react';
import Widget from './index';

export default {
  component: Widget,
  title: 'Component Lib/Widget',
};

export const widget = ({ themes, backgroundImage }) => (
  <Widget
    theme={themes}
    backgroundImage={backgroundImage}
    style={{ height: '100px', width: '600px' }}
  />
);

widget.argTypes = {
  themes: {
    type: { name: 'object', required: true },
    control: {
      type: 'object',
    },
    defaultValue: {
      colors: {
        primary: '#e71d36',
        secondary: '#00a152',
        mainBg: '#3b0000',
        contrastText: '#FFFFFF',
        wrong: '#FF5722',
        success: '#4CAF50',
      },
      borderRadius: '4px',
    },
    table: {
      category: 'Colors',
    },
  },
  backgroundImage: {
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue:
      'https://cdn.leverageedu.com/blog/wp-content/uploads/2020/08/07194032/SCALA-Programming-Language-2.png',
    table: {
      category: 'Url',
    },
  },
};

export const header = ({ themes }) => (
  <Widget.Header theme={themes}>Carregando...</Widget.Header>
);

header.argTypes = {
  themes: {
    type: { name: 'object', required: true },
    control: {
      type: 'object',
    },
    defaultValue: {
      colors: {
        primary: '#e71d36',
        secondary: '#00a152',
        mainBg: '#3b0000',
        contrastText: '#FFFFFF',
        wrong: '#FF5722',
        success: '#4CAF50',
      },
      borderRadius: '4px',
    },
    table: {
      category: 'Colors',
    },
  },
};

export const topic = ({ themes }) => (
  <Widget.Topic theme={themes}>Alternativa</Widget.Topic>
);

topic.argTypes = {
  themes: {
    type: { name: 'object', required: true },
    control: {
      type: 'object',
    },
    defaultValue: {
      colors: {
        primary: '#e71d36',
        secondary: '#00a152',
        mainBg: '#3b0000',
        contrastText: '#FFFFFF',
        wrong: '#FF5722',
        success: '#4CAF50',
      },
      borderRadius: '4px',
    },
    table: {
      category: 'Colors',
    },
  },
};

/*<Widget>
  <Widget.Header>Carregando...</Widget.Header>

  <Widget.Content
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Spinner />
  </Widget.Content>
</Widget>;*/
