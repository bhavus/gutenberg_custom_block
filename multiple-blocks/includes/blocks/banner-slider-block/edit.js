/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Button } from '@wordpress/components';
import SingleBlockAppender from "../../../../../plugins/block-library/includes/blocks/components/single-block-appender";

import './editor.css';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const BannerSliderBockEdit = (props) => {
	const { attributes, setAttributes, clientId } = props;
	const { background_image } = attributes;
	const blockProps = useBlockProps();
	const onFileSelect = (img) => {
		setAttributes({
			background_image: img.url
		})
	}
	const onRemoveImg = () => {
		setAttributes({
			background_image: null
		})
	}

	return (
		<div {...blockProps}>
			<div className="superhero banner-container" style={{ backgroundImage: `url(${background_image})` }}>
				<div className="superhero-bg-container">
					<div className="superhero-layout-container">
						<InspectorControls>
							<PanelBody title={ __('Background', 'chia-theme') }>
								<MediaUploadCheck>
									{
										( background_image ) ? (
										<img src={background_image} alt={ __('Banner Slider Background Image','chia-theme') } />
										) :
										(
											<MediaUpload
												onSelect={ onFileSelect }
												allowedTypes={ ALLOWED_MEDIA_TYPES }
												value={ background_image }
												render={({open}) => (
													<Button className="banner-add-image" onClick={open}>{ __('Select Image','chia-theme') }</Button>)
												}
											/>
										)
									}
									{ (background_image) ? ( <Button className="banner-remove-image" onClick={ onRemoveImg }> { __('Remove Image','chia-theme') } </Button> ):''}
								</MediaUploadCheck>
							</PanelBody>
						</InspectorControls>
						<InnerBlocks
							allowedBlocks={['tenup/banner-slider-item-block']}
							template={[
								['tenup/banner-slider-item-block']
							]}
							renderAppender={() => (
								<SingleBlockAppender
									buttonText={__('Add Slide', 'chia-theme')}
									clientID={clientId}
									className="add-slide-button"
									allowedBlock="tenup/banner-slider-item-block"
								/>
							)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerSliderBockEdit;
