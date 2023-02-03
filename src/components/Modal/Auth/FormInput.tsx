interface FormInputProps {
  name: string;
  autoComplete: string;
  placeholder: string;
}

export const FormInput = ({
  name,
  placeholder,
  autoComplete,
}: FormInputProps) => {
  return (
    <div className="mt-5">
      <input
        id={name}
        name={name}
        type={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="block w-full appearance-none rounded-full border border-gray-300/0 bg-gray-100 px-4 py-3 shadow-sm placeholder:font-semibold placeholder:text-gray-500 hover:border-gray-300/100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
      />
    </div>
  );
};
