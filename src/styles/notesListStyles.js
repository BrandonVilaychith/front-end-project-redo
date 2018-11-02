import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotesListContainer = styled.div`
  position: absolute;
  right: 0;
  padding-left: 241px;
  width: 100%;
`;

export const NotesListTitle = styled.h2`
  padding: 65px 0 35px 30px;
  font-weight: bold;
  font-size: 3rem;
  color: #4b4a4b;
`;

export const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const CardLink = styled(Link)`
  border: 1px solid #ababab;
  max-width: 210px;
  width: 100%;
  height: 214px;
  /* margin: 0 15px; */
  margin-left: 35px;
  margin-bottom: 26px;
  overflow: auto;
  overflow-wrap: break-word;
  padding: 0 21px;
  text-decoration: none;
  color: #4b4a4b;
  @media (max-width: 760px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NoteTitle = styled.h3`
  border-bottom: 2px solid #d0d0d0;
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 14px;
  padding-bottom: 9px;
`;

export const NoteBody = styled.p`
  margin-top: 12px;
`;
