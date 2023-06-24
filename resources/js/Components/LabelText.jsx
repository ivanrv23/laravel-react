export default function LabelText({ value, className = '', children }) {
    return (
        <label
            type="text"
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
