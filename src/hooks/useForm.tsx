import { useState } from "react";


type Args = {
	id?: string
	firstName?: string
	lastName?: string
	email: string
	password: string
	role?: string
}

const useForm = (initialValues: Args): [Args, (e: React.FormEvent<HTMLInputElement>) => void] => {
	const [values, setValues] = useState(initialValues);

	return [
		values,
		(e: React.FormEvent<HTMLInputElement>) => {
			setValues({
				...values,
				[(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value
			});
		}
	];
};

export default useForm;

