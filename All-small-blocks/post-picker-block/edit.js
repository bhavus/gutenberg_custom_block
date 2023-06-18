/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import { PanelBody, PanelRow } from '@wordpress/components';

import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';

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
const PostPickerBlockEdit = (props) => {
	const { attributes, setAttributes } = props;

	const { columns } = attributes;

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody
					className="tenup-panel__body"
					title={__('Display Options', 'everbridge-theme')}
					initialOpen={false}
				>
					<PanelRow>
						<label htmlFor="content-grid-columns">
							{__('Number of columns:', 'everbridge-theme')}
						</label>
						<select
							id="content-grid-columns"
							defaultValue={columns}
							aria-label={__('Number of columns', 'everbridge-theme')}
							onChange={(event) =>
								setAttributes({ columns: parseInt(event.target.value, 10) })
							}
						>
							{[...Array(4).keys()].map((index) => (
								<option key={index} value={index + 1}>
									{index + 1}
								</option>
							))}
						</select>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={`post-content-grids cols-${columns}`}>
				<InnerBlocks
					allowedBlocks={['pms/post-picker-item']}
					orientation="horizontal"
					template={[['pms/post-picker-item']]}
					__experimentalCaptureToolbars
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/>
			</div>
		</div>
	);
};

export default PostPickerBlockEdit;
