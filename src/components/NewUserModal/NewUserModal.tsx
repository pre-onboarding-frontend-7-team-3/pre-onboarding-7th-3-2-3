import { useState, useRef } from 'react';
import * as S from './NewUserModal.style';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import clientAPI from '@src/libs/api/client';
import FunnelButton from './FunnelButton/FunnelButton';
import FileInput from './FileInput/FileInput';
import { GENDER_DATA } from '../../constants/funnelButtonData';
import useUnmountIfClickedOutside from '../../hooks/useUnmountIfClickedOutside';

const NewUserModal = ({ setIsModalOpen }) => {
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

  const submit = useMutation(posts => clientAPI.post('/users', posts));

  const onSubmit = data => {
    console.log(`DATA : `, data);
    const formData = new FormData();
    formData.append('photo', data.file[0]);
    formData.append('gender_origin', genderOrigin);
    formData.append('age', data.age);
    formData.append('birth_date', data.birth_date);
    formData.append('detail_address', data.detail_address);
    formData.append('address', data.address);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('name', data.name);
    formData.append('phone_number', data.phone_number);
    const posts = {
      photo: data.file[0],
      gender_origin: genderOrigin,
      age: data.age,
      name: data.name,
      birth_date: data.birth_date,
      detail_address: data.detail_address,
      address: data.address,
      email: data.email,
      password: data.password,
    };
    console.log(posts)

    const appenededObjects = {};
    formData.forEach(function (value, key) {
      appenededObjects[key] = value;
    });
    console.log(appenededObjects);

    const dummy = { email: 'as22d22@naver.com', password: '1293233s' };
    submit.mutate(posts);
  };

  return (
    <S.ViewPortContainer>
      <S.ModalContainer onSubmit={handleSubmit(onSubmit)} ref={modalRef}>
        <S.Title>신규 고객 추가</S.Title>
        <S.Header>이름</S.Header>
        <S.Input
          type="text"
          placeholder="이름"
          autoFocus
          {...register('name', {
            required: '이름을 입력해주세요',
          })}
        />
        <S.Header>비밀번호</S.Header>
        <S.Input
          type="password"
          placeholder="비밀번호"
          {...register('password')}
        />
        <S.Header>이메일</S.Header>
        <S.Input type="text" placeholder="이메일" {...register('email')} />
        <S.Header>나이</S.Header>
        <S.Input
          type="text"
          placeholder="나이"
          {...register('age', {
            required: '입력해주세요',
          })}
        />
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
        <S.Header>생년월일</S.Header>
        <S.Input
          type="text"
          placeholder="생년월일"
          {...register('birth_date', {
            required: '입력해주세요',
          })}
        />
        <S.Header>전화번호</S.Header>
        <S.Input
          type="text"
          placeholder="전화번호"
          {...register('phone_number', {
            required: '입력해주세요',
          })}
        />
        <S.Header>주소</S.Header>
        <S.Input
          type="text"
          placeholder="주소"
          {...register('address', {
            required: '입력해주세요',
          })}
        />
        <S.Header>상세주소</S.Header>
        <S.Input
          type="text"
          placeholder="상세 주소"
          {...register('detail_address', {
            required: '입력해주세요',
          })}
        />
        <S.ButtonContainer>
          <S.Button>추가</S.Button>
          <S.Button onClick={handleCloseModal}>닫기</S.Button>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ViewPortContainer>
  );
};

export default NewUserModal;
