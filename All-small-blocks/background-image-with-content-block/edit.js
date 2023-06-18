import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, Button } from '@wordpress/components';

import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';

import './editor.css';

const BgImageContentBockEdit = (props) => {
	const { attributes, setAttributes } = props;
	const { background_image } = attributes;

	const blockProps = useBlockProps();

	const ContentBackgroundSelect = (images) => {
		setAttributes({
			background_image: { id: images.id, url: images.url, title: images.title },
		});
	};

	const removeBackgroundImage = () => {
		if (background_image) {
			setAttributes({
				background_image: '',
			});
		}
	};

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody
					className="tenup-panel__body"
					title={__('Background Image', 'everbridge-theme')}
					initialOpen={false}
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ContentBackgroundSelect}
								allowedTypes={['image']}
								value={background_image ? background_image.id : ''}
								render={({ open }) => (
									<Button className="background-image" onClick={open}>
										{__('Background Image', 'everbridge-theme')}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>
					{background_image && background_image.url !== undefined ? (
						<PanelRow>
							<div className="bg-image">
								<img src={background_image.url} alt="background" />
								<button
									type="button"
									className="remove-btn"
									onClick={removeBackgroundImage}
								>
									&times;
								</button>
							</div>
						</PanelRow>
					) : (
						''
					)}
				</PanelBody>
			</InspectorControls>
			<div
				className="bg-img-content-wrap"
				style={{
					backgroundImage:
						background_image && background_image.url !== undefined
							? `url(${background_image.url})`
							: '',
					backgroundRepeat: 'no-repeat',
					BackgroundSize: 'cover',
				}}
			>
				<div className="container">
					<div className="bg-img-content">
						<div className="bg-image-right-content">
							<div className="content-lists">
								<InnerBlocks
									template={[
										[
											'core/heading',
											{
												placeholder: __(
													'Heading Title',
													'everbridge-theme',
												),
												className: 'heading-list-title',
												level: 2,
											},
										],
										['core/list'],
									]}
									templateLock="all"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BgImageContentBockEdit;
