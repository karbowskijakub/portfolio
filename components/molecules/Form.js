import { BoxDiv, Text, InputBlock, TextArea } from './Form.styles'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [values, setValues] = useState({
		name: '',
		email: '',
		message: '',
	})
	const { name, email, message } = values

	const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })
	const onSubmit = async (e) => {
		try {
			await fetch('http://portfolio-lake-five-95.vercel.app/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			})
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<BoxDiv
			component='form'
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				'& > :not(style)': { m: 3, width: '20ch' },
			}}
			noValidate
			autoComplete='off'>
			<div>
				<InputBlock>
					<Text
						type='text'
						name='name'
						id='name'
						label='name'
						variant='standard'
						{...register('name', { required: 'Required field' })}
						error={errors?.name}
						helperText={errors?.name ? errors.name.message : null}
						value={name}
						onChange={handleChange}
					/>
				</InputBlock>
				<InputBlock>
					<Text
						type='email'
						name='email'
						id='email '
						label='email'
						variant='standard'
						{...register('email', {
							required: 'Required field',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email adress',
							},
						})}
						error={errors?.email}
						helperText={errors?.email ? errors.email.message : null}
						onChange={handleChange}
						value={email}
					/>
				</InputBlock>
				<InputBlock>
					<TextArea
						id='standard-multiline-flexible'
						label='message'
						multiline
						name='message'
						minRows={2}
						maxRows={2}
						variant='standard'
						{...register('message', { required: 'Required field' })}
						error={errors?.message}
						helperText={errors?.message ? errors.message.message : null}
						value={message}
						onChange={handleChange}
					/>
				</InputBlock>
				<button type='submit'>Submit</button>
			</div>
		</BoxDiv>
	)
}
export default Form
