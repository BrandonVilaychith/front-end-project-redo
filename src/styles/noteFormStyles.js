import styled from 'styled-components';

export const NoteFormContainer = styled.div`
  position: absolute;
  padding-left: 241px;
  width: 100%;
`;

export const StyledNoteForm = styled.form`
  padding-left: 30px;
  padding-right: 35px;
`;

export const NoteFormTitle = styled.h2`
  font-weight: bold;
  font-size: 3rem;
  color: #4b4a4b;
  padding: 65px 0 36px 0;
`;

export const NoteFormInput = styled.input`
  display: block;
  max-width: 390px;
  width: 100%;
  margin-bottom: 15px;
  padding: 15px 0 15px 13px;
  border-radius: 2px;
  border: 1px solid #bdbdbd;
  :focus {
    outline: none;
  }
`;

export const NoteFormTextarea = styled.textarea`
  max-width: 665px;
  width: 100%;
  resize: none;
  height: 380px;
  overflow: auto;
  border-radius: 2px;
  padding: 24px 0 0 24px;
  :focus {
    outline: none;
  }
`;

export const NoteFormButton = styled.button`
  border: none;
  border: 1px solid #c1c6c7;
  max-width: 208px;
  width: 100%;
  margin: 0 auto;
  background: #00bec2;
  color: #fff;
  font-weight: bold;
  padding: 16px 0;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s linear;
  margin-top: 15px;
  :focus {
    outline: none;
  }
  :active {
    transform: scale(0.97);
  }
`;
