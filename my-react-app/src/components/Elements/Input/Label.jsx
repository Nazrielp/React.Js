


const Label = (props) => {
    const { Children, htmlFor } = props
    return (
        <label
            htmlFor={htmlFor}
            className="block text-slate-700 text-sm font-bold mb-2">
            {Children}
        </label>

    );
};

export default Label;