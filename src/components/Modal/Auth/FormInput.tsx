interface FormInputProps {
  name: string;
  autoComplete?: string;
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({
  name,
  placeholder,
  autoComplete,
  type,
  onChange,
}: FormInputProps) => {
  return (
    <div className="mt-5">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        onChange={onChange}
        className="block w-full appearance-none rounded-full border border-gray-300/0 bg-gray-100 px-4 py-3 shadow-sm placeholder:font-semibold placeholder:text-gray-500 hover:border-gray-300/100 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
      />
    </div>
  );
};
