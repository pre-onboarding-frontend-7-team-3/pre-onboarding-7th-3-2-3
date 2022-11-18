import React, { useState, useRef } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import UserInput from "./UserInput/UserInput";
import FunnelButton from "./FunnelButton/FunnelButton";
import FileInput from "./FileInput/FileInput";
import { GENDER_DATA } from "../../constants/funnelButtonData";
import useUnmountIfClickedOutside from "../../hooks/useUnmountIfClickedOutside";
import { NEW_USER_INPUT_DATA } from "../../constants/NewUserInputData";
import * as S from "./NewUserModal.style";
import { ErrorText } from "./UserInput/UserInput.style";
import { useCreateNewUser } from "@src/shared/User-query/User.query";

type Props = {
  isNewUserModalOpen: boolean;
  setIsNewUserModalOpen: (toggleEvent: boolean) => void;
};

const NewUserModal = ({ isNewUserModalOpen, setIsNewUserModalOpen }: Props) => {
  const [genderOrigin, setGenderOrigin] = useState("");
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
      "email",
      { type: "focus", message: "이미 존재하는 이메일입니다" },
      { shouldFocus: true }
    );
  };

  const onSubmitMutate = useCreateNewUser(handleCloseModal, handleEmailError);

  const onValid: SubmitHandler<FieldValues> = (data) => {
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

  return isNewUserModalOpen ? (
    <S.ViewPortContainer>
      <S.ModalContainer
        onSubmit={handleSubmit(onValid)}
        ref={modalRef}
        autoComplete="false"
      >
        <input type="password" style={{ width: "0px", height: "0px" }} />
        {/* disable chrome autocompletion */}
        <S.Title>신규 고객 추가</S.Title>
        {NEW_USER_INPUT_DATA.slice(0, 4).map((inputProps) => (
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
        {NEW_USER_INPUT_DATA.slice(4, 8).map((inputProps) => (
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
  ) : null;
};

export default NewUserModal;
