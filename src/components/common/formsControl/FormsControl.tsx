import React from 'react';
import cl from './FormsControl.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}: any) => {
    const hasError =  touched && error
    return (
        <div className={cl.formControl + " " + (hasError ? cl.error : '')}>
            {children}
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    );
}


export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

}
export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}

export const createField = (placeholder: any, name: any, validators: any, component: any, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)