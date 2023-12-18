import { TextInput } from "./TextInput";

export default{
    title: 'Components/TextInput',
    tags: ['autodocs'],
    component: TextInput,
    argTypes : {
        type : {
           options: ["text","password","email","date"],
           control: {type:"select"},
        }
    }
}

export const Default = {
    args:{
        name: "fname",
        label: "Sample Input",
        type: "text",

    }
}

export const Password = {
    args:{
        name: "password",
        label: "Password",
        type: "password",
    }
}