import React, { useState, useRef } from 'react';
import * as S from './NewUserModal.style';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import UserInput from './UserInput/UserInput';
import FunnelButton from './FunnelButton/FunnelButton';
import FileInput from './FileInput/FileInput';
import { GENDER_DATA } from '../../constants/funnelButtonData';
import useUnmountIfClickedOutside from '../../hooks/useUnmountIfClickedOutside';
import { NEW_USER_INPUT_DATA } from '../../constants/NewUserInputData';
import { useCreateNewUserQuery } from './NewUserModal-query/NewUserModal.query';
import { ErrorText } from './UserInput/UserInput.style';

type Props = {
  setIsModalOpen: Function;
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

  const onSubmitMutate = useCreateNewUserQuery(handleCloseModal);

  const onCreateUser: SubmitHandler<FieldValues> = data => {
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
    onSubmitMutate(formData);
  };

  return (
    <S.ViewPortContainer>
      <S.ModalContainer onSubmit={handleSubmit(onCreateUser)} ref={modalRef}>
        <input type="password" style={S.HiddenInput} />
        {/* disable chrome autocompletion */}
        <S.Title>신규 고객 추가</S.Title>
        {NEW_USER_INPUT_DATA.slice(0, 4).map(inputProps => (
          <React.Fragment key={inputProps.id}>
            <S.Header>{inputProps.text}</S.Header>
            <UserInput
              inputProps={inputProps}
              errors={errors}
              register={register}
            />
          </React.Fragment>
        ))}
        <S.Header>성별</S.Header>
        <S.FunnelButtonContainer>
          <S.InnerContainer>
            {GENDER_DATA.map(({ id, text, value }) => (
              <FunnelButton
                key={id}
                text={text}
                handleButtonStyle={() => setGenderOrigin(value)}
                isSelected={genderOrigin === value}
              />
            ))}
          </S.InnerContainer>
          {Object.keys(errors).length !== 0 && !genderOrigin && (
            <ErrorText>성별을 선택해 주세요</ErrorText>
          )}
        </S.FunnelButtonContainer>
        <S.Header>프로필 사진</S.Header>
        <FileInput register={register} errors={errors} />
        {NEW_USER_INPUT_DATA.slice(4, 8).map(inputProps => (
          <React.Fragment key={inputProps.id}>
            <S.Header>{inputProps.text}</S.Header>
            <UserInput
              inputProps={inputProps}
              errors={errors}
              register={register}
            />
          </React.Fragment>
        ))}
        <S.ButtonContainer>
          <S.Button>추가</S.Button>
          <S.Button onClick={handleCloseModal}>닫기</S.Button>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ViewPortContainer>
  );
};

export default NewUserModal;
