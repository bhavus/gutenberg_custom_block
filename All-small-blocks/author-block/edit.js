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
const authorBockEdit = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		background_color,
		backgroundImage,
		backgroundImageID,
		authorTitle,
		authorContent,
		authorImage,
		authorImageID,
	} = attributes;

	const blockProps = useBlockProps();

	const authorImageSelect = ( image ) => {
		setAttributes( {
			authorImage: image.url,
			authorImageID: image.id,
		} );
	};

	const removeauthorImage = () => {
		setAttributes( {
			authorImage: '',
			authorImageID: '',
		} );
	};

	const authorBackgroundSelect = ( image ) => {
		setAttributes( {
			backgroundImage: image.url,
			backgroundImageID: image.id,
		} );
	};

	const removeauthorBackground = () => {
		setAttributes( {
			backgroundImage: '',
			backgroundImageID: '',
		} );
	};

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody
					title={ __( 'Author Image', 'creedally-theme' ) }
					initialOpen={ false }
				>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ authorImageSelect }
								allowedTypes={ [ 'image' ] }
								value={ authorImageID || '' }
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
					{ authorImage ? (
						<PanelRow>
							<div className="bg-image">
								<img src={ authorImage } alt="call-to-action" />
								<button
									type="button"
									className="remove-btn"
									onClick={ removeauthorImage }
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
								onSelect={ authorBackgroundSelect }
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
									alt="author-background"
								/>
								<button
									type="button"
									className="remove-btn"
									onClick={ removeauthorBackground }
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
				className="author-wrapper"
				style={ {
					backgroundImage: `url(${ backgroundImage })`,
				} }
			>
				<div className="author-row">
					<div className="author-content-wrap">
						{ authorImage ? (
							<div className="author-image">
								<img src={ authorImage } alt="author" />
							</div>
						) : (
							''
						) }
						<div className="author-body-wrap">
							<RichText
								className="author-block__title author-title"
								tagName="h2"
								placeholder={ __( 'Author Name' ) }
								value={ authorTitle }
								onChange={ ( title ) =>
									setAttributes( { authorTitle: title } )
								}
							/>
							<RichText
								className="author-block__content author-content"
								tagName="p"
								placeholder={ __( 'Atuhor Bio' ) }
								value={ authorContent }
								onChange={ ( content ) =>
									setAttributes( { authorContent: content } )
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default authorBockEdit;
