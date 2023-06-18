import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToggleControl, Button } from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';

import './editor.css';

const HeroBockEdit = (props) => {
	const { attributes, setAttributes } = props;

	const {
		backgroundColor,
		background_image,
		popup_video,
		popup_video_url,
		is_valid_video,
		temp_video_url,
	} = attributes;

	const blockProps = useBlockProps();

	const HeroBackgroundSelect = (images) => {
		if (images && images.length > 0) {
			setAttributes({
				background_image: images.map((image) => {
					return { id: image.id, url: image.url, title: image.title };
				}),
			});
		}
	};

	const removeBackgroundImage = () => {
		setAttributes({
			background_image: {},
		});
	};

	const handleVideoURL = (value) => {
		if (value && value.url !== '') {
			const videoUrl = value.url ? value.url : '';
			if (videoUrl !== undefined || videoUrl !== '') {
				const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
				const match = videoUrl.match(regExp);
				const is_embed = videoUrl.match(/embed/gi);
				if (match && match[2].length > 0 && is_embed !== null) {
					setAttributes({
						popup_video_url: value,
						is_valid_video: true,
						temp_video_url: value,
					});
				} else {
					setAttributes({
						popup_video_url: '',
						is_valid_video: false,
						temp_video_url: value,
					});
				}
			}
		}
	};

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody
					className="tenup-panel__body"
					title={__('Background Image/Video', 'everbridge-theme')}
					initialOpen={false}
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={HeroBackgroundSelect}
								multiple={{ type: true }}
								gallery={{ type: true }}
								allowedTypes={['image']}
								value={
									background_image && background_image.length > 0
										? background_image.map((image) => image.id)
										: ''
								}
								render={({ open }) => (
									<div className="background-image-wrap">
										<Button className="background-image" onClick={open}>
											{background_image && background_image.length > 0 ? (
												<span className="total-images">
													{__(
														'Update Background Image(s): ',
														'everbridge-theme',
													)}
													<span className="count">
														{__('Selected Count: ', 'everbridge-theme')}
														<strong>{background_image.length}</strong>
													</span>
												</span>
											) : (
												__('Background Image', 'everbridge-theme')
											)}
										</Button>
										{background_image && background_image.length > 0 ? (
											<button
												type="button"
												className="button danger"
												onClick={removeBackgroundImage}
											>
												{__('Remove Images', 'everbridge-theme')}
											</button>
										) : (
											''
										)}
									</div>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Popup video', 'everbridge-theme')}
							checked={popup_video || ''}
							onChange={(value) => setAttributes({ popup_video: value })}
						/>
					</PanelRow>
					{popup_video ? (
						<PanelRow className="hero-video-url-row">
							<LinkControl
								searchInputPlaceholder={__(
									'Please Enter Youtube video.',
									'everbridge-theme',
								)}
								className="hero-popup-video-url"
								onChange={handleVideoURL}
								showSuggestions={false}
								value={
									(is_valid_video === undefined || is_valid_video) &&
									popup_video_url
										? popup_video_url
										: ''
								}
								settings={[]}
							/>
							{!is_valid_video && is_valid_video !== undefined && temp_video_url ? (
								<div className="error not-valid-video">
									{__(
										'Please enter valid youtube embed video URL.',
										'everbridge-theme',
									)}
								</div>
							) : (
								''
							)}
						</PanelRow>
					) : (
						''
					)}
				</PanelBody>
			</InspectorControls>
			<div className="hero-container">
				<div className="hero-content">
					<div
						className="slide-content"
						style={{ backgroundColor: backgroundColor || '#292d2f' }}
					>
						<InnerBlocks
							template={[
								[
									'core/heading',
									{
										placeholder: __('Heading', 'everbridge-theme'),
										className: 'hero-title',
									},
								],
								[
									'core/paragraph',
									{
										placeholder: __('Paragraph', 'everbridge-theme'),
										className: 'hero-description',
									},
								],
								[
									'core/button',
									{
										placeholder: __('BUTTON', 'everbridge-theme'),
										className: 'is-style-button-style-2',
									},
								],
							]}
							templateLock="all"
						/>
						{popup_video &&
						popup_video_url &&
						is_valid_video !== false &&
						is_valid_video !== undefined ? (
							<div className="hero-popup-video">
								<a
									target="_blank"
									rel="noreferrer"
									href={popup_video_url.url || ''}
									className="popup-video-link"
								>
									<span className="play-button" />
								</a>
							</div>
						) : (
							''
						)}
					</div>
				</div>
				<div className="hero-carousel">
					{background_image && background_image.length > 0 ? (
						<div className="bg-image" key={`bg_${background_image[0].id}`}>
							<img src={background_image[0].url} alt={background_image[0].title} />
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export default HeroBockEdit;
