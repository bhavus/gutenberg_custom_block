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
import SingleBlockAppender from "../../../block-library/includes/blocks/components/single-block-appender";

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
							<PanelBody title={ __('Background', 'pms') }>
								<MediaUploadCheck>
									{
										( background_image ) ? (
										<img src={background_image} alt={ __('Banner Slider Background Image','pms') } />
										) :
										(
											<MediaUpload
												onSelect={ onFileSelect }
												allowedTypes={ ALLOWED_MEDIA_TYPES }
												value={ background_image }
												render={({open}) => (
													<Button className="banner-add-image" onClick={open}>{ __('Select Image','pms') }</Button>)
												}
											/>
										)
									}
									{ (background_image) ? ( <Button className="banner-remove-image" onClick={ onRemoveImg }> { __('Remove Image','pms') } </Button> ):''}
								</MediaUploadCheck>
							</PanelBody>
						</InspectorControls>
						<InnerBlocks
							allowedBlocks={['k']}
							template={[
								['pms/banner-slider-item-block']
							]}
							renderAppender={() => (
								<SingleBlockAppender
									buttonText={__('Add Slide', 'chia-theme')}
									clientID={clientId}
									className="add-slide-button"
									allowedBlock="pms/banner-slider-item-block"
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
