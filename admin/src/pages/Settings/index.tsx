import React, { useState } from "react";
import { Button, TextInput } from '@strapi/design-system';
const Settings = () => {
  const [api, setApiKey] = useState('');
  const [backendUrl, setBackendUrl] = useState('');
  return (
    <>
      <p>Hello Novu</p>
      <TextInput
        label='Backend Url'
        name='backendUrl'
        value={backendUrl}
        onChange={(e) => {
          setBackendUrl(e.target.value);
        }}
      />
      <TextInput
        label='API Key'
        type='password'
        name='apiKey'
        value={api}
        onChange={(e) => {
          setApiKey(e.target.value);
        }}
      />
      <Button onClick={() => {
        alert('Saved');
      }}>Save</Button>
    </>
  );  
};

export default Settings;