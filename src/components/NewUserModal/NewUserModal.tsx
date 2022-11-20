import React, { useState, useRef } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import * as S from './NewUserModal.style';

import UserInput from './UserInput/UserInput';
import FunnelButton from './FunnelButton/FunnelButton';
import FileInput from './FileInput/FileInput';
import { GENDER_DATA } from '@src/constants/funnelButtonData';
import { NEW_USER_INPUT_DATA } from '@src/constants/NewUserInputData';
import { ErrorText } from './UserInput/UserInput.style';

import { useCreateNewUser } from '@src/shared/User-query/User.query';
import useUnmountIfClickedOutside from '@src/hooks/useUnmountIfClickedOutside';

interface IProps {
  setIsNewUserModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewUserModal = ({ setIsNewUserModalOpen }: IProps) => {
  const [genderOrigin, setGenderOrigin] = useState('');
  const modalRef = useRef<HTMLFormElement>(null);
  const handleCloseModal = () => {
    setIsNewUserModalOpen(false);
  };

  useUnmountIfClickedOutside(modalRef, handleCloseModal);

  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEmailError = () => {
    setError(
      'email',
      { type: 'focus', message: '이미 존재하는 이메일입니다' },
      { shouldFocus: true }
    );
  };

  const onSubmitMutate = useCreateNewUser(handleCloseModal, handleEmailError);

  const onSubmitNewUserForm: SubmitHandler<FieldValues> = formInput => {
    const formData = {
      photo: formInput.file[0],
      gender_origin: genderOrigin,
      age: formInput.age,
      name: formInput.name,
      birth_date: formInput.birth_date,
      detail_address: formInput.detail_address,
      phone_number: formInput.phone_number,
      address: formInput.address,
      email: formInput.email,
      password: formInput.password,
      created_at: new Date(),
    };
    onSubmitMutate(formData);
  };

  return (
    <S.ViewPortContainer>
      <S.ModalContainer
        onSubmit={handleSubmit(onSubmitNewUserForm)}
        ref={modalRef}
        autoComplete="false"
      >
        <input type="password" style={{ width: '0px', height: '0px' }} />
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
