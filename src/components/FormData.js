import React, {useState} from 'react'
import { useForm } from "react-hook-form"

const FormData = () => {

    const [successMessage, setSuccessMessage] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://localhost:5000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setSuccessMessage('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div>
            <h3>Submit form data</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>username: </label>
                <input type='text'{...register("name", { required: true, minLength: 3 })} />
                {errors.name && <span>minLength should be 3</span>}
                <br />
                <label>password: </label>
                <input type='password'{...register("password", { required: true, minLength: 7 })} />
                {errors.password && <span>minLength should be 7</span>}
                <br />
                <input type="submit" />
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>
    )
}

export default FormData
