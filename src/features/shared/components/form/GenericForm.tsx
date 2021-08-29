/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Form, Button } from 'antd';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { FORM_TYPES, ROLES } from 'lib/constants';
import { apiRequest } from 'config/apiRequest';
import { useAuth } from 'config/hooks';
import { FieldType, FormMetaType } from 'lib/types';
import UploadImage from 'features/shared/components/image/UploadImage';
import ErrorFieldStyled from 'features/shared/components/styledComponents/ErrorField.styled';
import { useImage } from 'features/shared/components/image/UploadImageHook';
import GenericFormFields from './GenericFormFields';

const { UPLOAD } = FORM_TYPES;

type PropsType = {
	formData: {
		fieldsData: FieldType[];
		meta: FormMetaType;
	};
	layout?: 'horizontal' | 'vertical' | 'inline';
	submitHandler?: (data: any) => Promise<void>;
};

GenericForm.defaultProps = {
	submitHandler: null,
};

export default function GenericForm(props: PropsType) {
	const { isAdmin } = useAuth();
	const [disable, setDisable] = useState(false);
	const {
		handleSubmit,
		formState: { errors },
		control,
		reset,
		setValue,
		clearErrors,
	} = useForm<any>();
	const { imageUrl, imageError, clearImage } = useImage();

	const { formData, layout, submitHandler } = props;
	const { fieldsData = [], meta = {} } = formData;
	const { submitLabel = 'submit', apiUrl, imageField = '' } = meta;

	const onSubmit: SubmitHandler<any> = async (data) => {
		setDisable(true);

		if (submitHandler) {
			await submitHandler(data);
		} else if (apiUrl) {
			const result = await apiRequest({ apiUrl, data });
			const { meta: resMeta = {} } = result;
			if (resMeta.success) {
				reset('', {
					keepValues: false,
					keepDefaultValues: true,
				});
				if (imageField) clearImage();
			}
		}
		setDisable(false);
	};

	useEffect(() => {
		if (imageField && imageUrl) {
			setValue(imageField, imageUrl);
			clearErrors(imageField);
		}
	}, [imageUrl, errors[imageField]]);

	return (
		<Form
			onFinish={handleSubmit(onSubmit)}
			layout={layout}
			size="large"
			requiredMark
		>
			{fieldsData.map((fieldData) => {
				const {
					type,
					name: fieldName,
					defaultValue,
					validations = {},
					role,
					label,
				} = fieldData;

				const required = Boolean(validations.required?.value);
				const isImgField = type === UPLOAD;

				if (role) {
					if (isAdmin && role !== ROLES.ADMIN) return;
					if (!isAdmin && role === ROLES.ADMIN) return;
				}
				return (
					<Form.Item
						key={fieldName}
						label={label}
						required={required}
					>
						{isImgField && (
							<UploadImage defaultValue={defaultValue} />
						)}
						<Controller
							name={fieldName}
							control={control}
							rules={validations}
							defaultValue={defaultValue}
							render={({ field }) => (
								<GenericFormFields
									field={field}
									fieldData={fieldData}
								/>
							)}
						/>
						{(errors[fieldName] || (isImgField && imageError)) && (
							<ErrorFieldStyled>
								{(isImgField && imageError) ||
									errors[fieldName]?.message}
							</ErrorFieldStyled>
						)}
					</Form.Item>
				);
			})}
			<div className="text-center">
				<Button
					className="uppercase font-semibold"
					type="primary"
					loading={disable}
					htmlType="submit"
				>
					{submitLabel}
				</Button>
			</div>
		</Form>
	);
}