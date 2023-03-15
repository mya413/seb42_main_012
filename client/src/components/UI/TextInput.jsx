function TextInput({ placeholder, type, inputId, text, classname }) {
  return (
    <>
      <p className="mt-2 text-sm text-[#FCA43B]">{text}</p>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        className={classname}
      />
    </>
  );
}

export default TextInput;
