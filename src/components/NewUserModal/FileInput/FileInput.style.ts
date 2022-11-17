import styled, { css } from "styled-components";

export const FileInputLabel = styled.label<{ isFileUploaded: boolean }>`
  display: inline-block;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;

  ${({ isFileUploaded }) => css`
    background-color: ${isFileUploaded ? "#3c6dba" : "#eff2f5"};
    color: ${isFileUploaded ? "#fff" : "#afafaf"};
  `}

  box-shadow: 0px 1px 3px rgba(9, 16, 55, 0.4);
  cursor: pointer;
`;

export const FileInputForm = styled.input`
  display: none;
`;

export const ImgPreview = styled.div`
  display: block;
  width: 100%;
  min-height: 150px;
  max-height: 300px;
  border-radius: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
