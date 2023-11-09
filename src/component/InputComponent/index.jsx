const InputComponent = ({value, onChange, isError, errorText}) => {
  return (
    <>
      <label className="block">Username</label>
      <input
        value={value}
        className="input w-full"
        type="text"
        placeholder="Type your username"
        onChange={onChange}
      />
      {isError && <p className="text-error">{errorText}</p>}
    </>
  );
};

export default InputComponent;
