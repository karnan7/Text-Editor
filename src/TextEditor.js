import React, { useState } from 'react';
import { Container,Button, ButtonToolbar } from 'reactstrap';
import { FaBold, FaItalic } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';

const TextEditor =() => {
  const [text, setText] = useState('');
  const [boldActive, setBoldActive] = useState(false);
  const [italicActive, setItalicActive] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleBoldClick = () => {
    document.execCommand('bold', false, null);
    setBoldActive(!boldActive);
  };

  const handleItalicClick = () => {
    document.execCommand('italic', false, null);
    setItalicActive(!italicActive);
  };

  return (
    <Container className='p-5 w-50 '>
      <h1 className='text-center bg-dark bg-gradient text-light mb-0 rounded-top'>TEXT EDITOR</h1>
      <ButtonToolbar className='border border-dark '>
        <Button className='m-2' outline color="dark"
        onClick={handleBoldClick}
        active={boldActive}
        ><FaBold/></Button>
        <Button className='m-2' outline color="primary"
        onClick={handleItalicClick}
        active={italicActive}
        ><FaItalic/></Button>
      </ButtonToolbar>
      <div className='p-3 border border-dark rounded-bottom'
        style={{minHeight:"300px"}}
        contentEditable={true}
        onInput={handleTextChange}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Container>
  );
}

export default TextEditor;
