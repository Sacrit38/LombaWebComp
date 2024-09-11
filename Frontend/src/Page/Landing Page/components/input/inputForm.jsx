const InputForm = (props) => {
    const { type, placeholder, name, id, classname } = props;
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            className={`${classname}block w-full px-2 py-2 text-gray-900 border-0 rounded-md ring-inset ring-1 focus:border-blue-600 focus:ring-indigo-600 focus:ring-2 sm:text-sm focus:outline-none placeholder:text-gray-400 sm:leading-6`}
        />
    );
}

export default InputForm