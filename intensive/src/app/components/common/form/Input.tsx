import { InputProps } from './Input.props';
import styles from './Input.module.scss';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(({error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	return (
		<div className={styles.inputWrapper}>
			<input className={styles.inputMain} ref={ref} {...props} />
			{error && <span role="alert" className={styles.inputMain__error}>{error.message}</span>}
		</div>
	);
});