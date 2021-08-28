import { Button, Upload } from 'antd';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CloudUploadOutlined } from '@ant-design/icons';

import ImageCentered from 'features/shared/components/styledComponents/ImageCentered.style';
import { beforeUpload } from 'features/shared/components/image/ImageHelper';
import { SERVICE_URL } from 'lib/constants';
import { useEffect } from 'react';
import { useImage } from 'features/shared/components/image/UploadImageHook';
import uploadIcon from 'assets/images/upload-icon.svg';

export default function UploadImage() {
	const {
		imageUrl,
		isImageLoading,
		handleImageChange,
		handleImageLoad,
		clearImage,
	} = useImage();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => clearImage, []);

	return (
		<div className="image-upload">
			<Upload.Dragger
				name="upload"
				className="avatar-uploader"
				showUploadList={false}
				action={`${SERVICE_URL}/upload`}
				beforeUpload={beforeUpload}
				onChange={handleImageChange}
				accept=".jpg, .jpeg, .png"
				multiple={false}
			>
				<div className="mx-auto">
					{imageUrl ? (
						<ImageCentered
							src={imageUrl}
							alt="Upladed image"
							onLoad={handleImageLoad}
						/>
					) : (
						<>
							<img
								src={uploadIcon}
								className="inline-block"
								alt="Upload"
								width="120"
							/>
							<p className="ant-upload-text mt-3">
								Click or drag file to this area to upload
							</p>
						</>
					)}
				</div>
			</Upload.Dragger>
		</div>
	);
}
