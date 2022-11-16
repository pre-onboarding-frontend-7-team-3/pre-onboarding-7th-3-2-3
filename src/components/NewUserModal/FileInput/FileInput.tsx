import { useState } from 'react';
import * as S from './FileInput.style';

const FileInput = ({ register }) => {
  const [fileURL, setFileURL] = useState({});
  const isFileUploaded = Object.keys(fileURL).length !== 0;

  const saveFileImage = event => {
    if (event.target.files.length !== 0) {
      const imageFormat = event.target.files[0].type.includes('image');

      setFileURL({
        url: URL.createObjectURL(event.target.files[0]),
        image: imageFormat,
      });
    }
  };

  return (
    <>
      <S.FileInputLabel
        onChange={saveFileImage}
        isFileUploaded={isFileUploaded}
      >
        사진 업로드 +
        <S.FileInputForm
          type="file"
          accept="image/*,video/*"
          {...register('file', {
            required: '업로드된 사진이 없습니다',
            pattern: {
              value: 'isImg',
              message: '파일 형식이 이미지가 아닙니다',
            },
          })}
        />
      </S.FileInputLabel>
      {fileURL.image && (
        <S.ImgPreview
          style={{
            backgroundImage: `url(${fileURL.url})`,
          }}
        />
      )}
    </>
  );
};

export default FileInput;
