import React, { useState, useRef } from 'react';
import * as S from './NewUserModal.style';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import clientAPI from '@src/libs/api/client';
import UserInput from './UserInput/UserInput';
import FunnelButton from './FunnelButton/FunnelButton';
import FileInput from './FileInput/FileInput';
import { GENDER_DATA } from '../../constants/funnelButtonData';
import useUnmountIfClickedOutside from '../../hooks/useUnmountIfClickedOutside';
import { NEW_USER_INPUT_DATA } from '../../constants/NewUserInputData';
import { useCreateNewUserQuery } from './api/NewUserModal.query';

type Props = {
  setIsModalOpen: () => void;
};

const NewUserModal = ({ setIsModalOpen }: Props) => {
  const [genderOrigin, setGenderOrigin] = useState('');
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const handleCloseModal = () => {
    setIsModalOpen(prev => !prev);
  };

  useUnmountIfClickedOutside(modalRef, handleCloseModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitMutate = useCreateNewUserQuery(handleCloseModal);

  const onValid: SubmitHandler<FieldValues> = data => {
    const formData = {
      photo: data.file[0],
      gender_origin: genderOrigin,
      age: data.age,
      name: data.name,
      birth_date: data.birth_date,
      detail_address: data.detail_address,
      phone_number: data.phone_number,
      address: data.address,
      email: data.email,
      password: data.password,
      created_at: new Date(),
    };
    submitMutate(formData);
  };

  return (
    <S.ViewPortContainer>
      <S.ModalContainer
        onSubmit={handleSubmit(onValid)}
        ref={modalRef}
        autoComplete="false"
      >
        <input type="password" style={{ width: '0px', height: '0px' }} />
        {/* disable chrome autocompletion */}
        <S.Title>신규 고객 추가</S.Title>
        {NEW_USER_INPUT_DATA.slice(0, 4).map(
          ({ id, type, text, name, validation, autoFocus, autoComplete }) => (
            <React.Fragment key={id}>
              <S.Header>{text}</S.Header>
              <UserInput
                type={type}
                text={text}
                name={name}
                validation={validation}
                autoFocus={autoFocus}
                autocomplete={autoComplete}
                register={register}
              />
            </React.Fragment>
          )
        )}
        <S.Header>성별</S.Header>
        <S.FunnelButtonContainer>
          {GENDER_DATA.map(({ id, text, value }) => (
            <FunnelButton
              key={id}
              text={text}
              handleButtonStyle={() => setGenderOrigin(value)}
              isSelected={genderOrigin === value}
            />
          ))}
        </S.FunnelButtonContainer>
        <S.Header>프로필 사진</S.Header>
        <FileInput register={register} />
        {NEW_USER_INPUT_DATA.slice(4, 8).map(
          ({ id, type, text, name, validation, autoComplete }) => (
            <React.Fragment key={id}>
              <S.Header>{text}</S.Header>
              <UserInput
                type={type}
                text={text}
                name={name}
                validation={validation}
                autocomplete={autoComplete}
                register={register}
              />
            </React.Fragment>
          )
        )}
        <S.ButtonContainer>
          <S.Button>추가</S.Button>
          <S.Button onClick={handleCloseModal}>닫기</S.Button>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ViewPortContainer>
  );
};

export default NewUserModal;
