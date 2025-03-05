import s from './InputField.module.scss'

export const InputField = ({ ariaLabel, placeholder, value, onChange }) => {
	return (
		<label>
			<input
				className={s.field}
				aria-label={ariaLabel}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</label>
	)
}
