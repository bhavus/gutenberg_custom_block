/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	ColorPicker,
	Button,
} from '@wordpress/components';
import {
	RichText,
	InspectorControls,
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';

// Importing the block's editor styles via JS will enable hot reloading for css
import './editor.css';

/**
 * Edit component.
 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#edit
 *
 * @param {object}   props                  The block props.
 * @param {object}   props.attributes       Block attributes.
 * @param {string}   props.attributes.title Custom title to be displayed.
 * @param {string}   props.className        Class name for the block.
 * @param {Function} props.setAttributes    Sets the value for block attributes.
 * @returns {Function} Render the edit screen
 */
const CTABockEdit = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		background_color,
		backgroundImage,
		backgroundImageID,
		CTATitle,
		CTAContent,
		CTAImage,
		CTAImageID,
	} = attributes;

	const blockProps = useBlockProps();

	const CTAImageSelect = ( image ) => {
		setAttributes( {
			CTAImage: image.url,
			CTAImageID: image.id,
		} );
	};

	const removeCTAImage = () => {
		setAttributes( {
			CTAImage: '',
			CTAImageID: '',
		} );
	};

	const CTABackgroundSelect = ( image ) => {
		setAttributes( {
			backgroundImage: image.url,
			backgroundImageID: image.id,
		} );
	};

	const removeCTABackground = () => {
		setAttributes( {
			backgroundImage: '',
			backgroundImageID: '',
		} );
	};

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody
					title={ __( 'CTA Image', 'creedally-theme' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ CTAImageSelect }
								allowedTypes={ [ 'image' ] }
								value={ CTAImageID || '' }
								render={ ( { open } ) => (
									<Button
										className="background-image"
										onClick={ open }
									>
										{ __(
											'Call to Action Image',
											'creedally-theme'
										) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</PanelRow>
					{ CTAImage ? (
						<PanelRow>
							<div className="bg-image">
								<img src={ CTAImage } alt="call-to-action" />
								<button
									type="button"
									className="remove-btn"
									onClick={ removeCTAImage }
								>
									&times;
								</button>
							</div>
						</PanelRow>
					) : (
						''
					) }
				</PanelBody>
				<PanelBody
					title={ __( 'Background', 'creedally-theme' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ CTABackgroundSelect }
								allowedTypes={ [ 'image' ] }
								value={ backgroundImageID || '' }
								render={ ( { open } ) => (
									<Button
										className="background-image"
										onClick={ open }
									>
										{ __(
											'Background Image',
											'creedally-theme'
										) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</PanelRow>
					{ backgroundImage ? (
						<PanelRow>
							<div className="bg-image">
								<img
									src={ backgroundImage }
									alt="CTA-background"
								/>
								<button
									type="button"
									className="remove-btn"
									onClick={ removeCTABackground }
								>
									&times;
								</button>
							</div>
						</PanelRow>
					) : (
						''
					) }
					<PanelRow>
						<ColorPicker
							onChange={ ( value ) =>
								setAttributes( { background_color: value } )
							}
							value={ background_color || '' }
							defaultValue="#292d2f"
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div
				className="cta-wrapper"
				style={ {
					backgroundImage: `url(${ backgroundImage })`,
				} }
			>
				<div className="cta-row">
					<div className="cta-content-wrap">
						{ CTAImage ? (
							<div className="cta-image">
								<img src={ CTAImage } alt="cta" />
							</div>
						) : (
							''
						) }
						<div className="cta-body-wrap">
							<RichText
								className="cta-block__title cta-title"
								tagName="h2"
								placeholder={ __( 'Title' ) }
								value={ CTATitle }
								onChange={ ( title ) =>
									setAttributes( { CTATitle: title } )
								}
							/>
							<RichText
								className="cta-block__content cta-content"
								tagName="p"
								placeholder={ __( 'Content' ) }
								value={ CTAContent }
								onChange={ ( content ) =>
									setAttributes( { CTAContent: content } )
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CTABockEdit;
