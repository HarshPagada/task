import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

const Validation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <h3>Form Validation</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>username: </label>
                <input type='text'{...register("name",{required: true, minLength: 3})} />
                {errors.name && <span>minLength should be 3</span>}
                <br />
            <label>password: </label>
                <input type='password'{...register("password", { required: true, minLength: 7 })} />
                {errors.password && <span>minLength should be 7</span>}
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Validation
