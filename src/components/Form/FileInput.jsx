import React, { useRef, useState } from "react";
import Upload from "../../assets/icons/upload.svg";
export default function FileInput({ children, ...props }) {
  const fileInputRef = useRef();
  const [fileInputValue, SetFileInputValue] = useState("");
  const [isInDropZone, setIsInDropZone] = useState(false);

  const { id, size } = props;

  function handleDragEnter(e) {
    // e.stopPropagation();
    console.log("enter");
    setIsInDropZone(true);
  }
  function handleDragLeave(e) {
    // e.stopPropagation();

    console.log("leave");
    console.log(e);
    setIsInDropZone(false);
  }
  function handleDragOver(e) {
    // e.stopPropagation();
    e.preventDefault();
  }

  function handleDrop(e) {
    // e.stopPropagation();
    e.preventDefault();
    console.log("drop");

    const files = e.dataTransfer.files;

    if (files) {
      fileInputRef.current.files = files;
      console.log(fileInputRef.current.value);
      SetFileInputValue(fileInputRef.current.value);
    }
    setIsInDropZone(false);
  }

  function handleChange() {
    console.log(fileInputRef.current.value);
    SetFileInputValue(fileInputRef.current.value);
  }

  function handleClick() {
    fileInputRef.current.click();
  }
  return (
    <div
      onClick={handleClick}
      className=" relative my-9  h-[30%] w-full cursor-pointer  rounded-2xl border-[1px] border-dashed border-primary-dark bg-[#6948ff41]
      p-3 "
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        {...props}
        ref={fileInputRef}
        //   value={fileInputValue}
        onChange={handleChange}
        type="file"
        required
        hidden
      />
      {isInDropZone && <p>افلت الملف هنا</p>}

      {(fileInputValue === "" && !isInDropZone && (
        <div className="grow-1 flex h-full w-full flex-col items-stretch   ">
          <div className="flex grow items-center justify-between">
            {" "}
            <p>اسحب وافلت الصورة هنا أو قم برفعها من الملفات</p>
            <img src={Upload} className="  h-12  md:mt-0" />
          </div>{" "}
          <p className=" text-slate-500 ">الحجم الاقصى: {size / 10 ** 6}MB</p>
        </div>
      )) || <p>{fileInputValue}</p>}

      <label
        htmlFor={id}
        className=" absolute  right-4 top-[-3px] -translate-y-1/2 cursor-pointer bg-transparent px-2 text-sm font-medium  text-black"
      >
        {children}
      </label>
    </div>
  );
}
