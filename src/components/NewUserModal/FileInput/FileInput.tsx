import { useState } from "react";
import {
  type UseFormRegister,
  type FieldValues,
  type FieldErrorsImpl,
} from "react-hook-form";
import * as S from "./FileInput.style";
import { ErrorText } from "../UserInput/UserInput.style";

interface FileInputrops {
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: string[];
    }>
  >;
  register: UseFormRegister<FieldValues>;
}

const FileInput = ({ register, errors }: FileInputrops) => {
  const [fileURL, setFileURL] = useState({
    url: "",
    image: false,
  });
  const isFileUploaded = Object.keys(fileURL).length !== 0;

  const saveFileImage = (event: any) => {
    if (!event.target.files) return;
    if (event.target.files.length !== 0) {
      const imageFormat = event.target.files[0].type.includes("image");

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
          accept="image/*"
          {...register("file", {
            required: "사용자 사진을 업로드해 주세요",
          })}
        />
      </S.FileInputLabel>
      {errors.file && <ErrorText>{errors.file.message}</ErrorText>}
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
