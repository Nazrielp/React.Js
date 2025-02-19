import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const {name, label, type, placeholder} = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name} children={label}></Label>
            <Input name={name} type={type} placeholder={placeholder}></Input>
        </div>
    );
};

export default InputForm