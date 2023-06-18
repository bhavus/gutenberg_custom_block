/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	PanelRow,
	ToggleControl,
	SelectControl,
	ToolbarGroup,
	ToolbarItem,
	Button,
} from '@wordpress/components';

import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';

import { useSelect } from '@wordpress/data';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ContentSearch } from '@10up/block-components';

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
const PostPickerItemBlockEdit = (props) => {
	const { attributes, setAttributes } = props;

	const {
		hide_overline,
		hide_headline,
		hide_excerpt,
		hide_image,
		hide_link,
		selected_post,
		selected_taxonomy,
	} = attributes;

	const { getPostList, getTaxonomies } = useSelect((select) => {
		const { getTaxonomies, getEntityRecords } = select('core');

		const getPostType =
			selected_post !== null && selected_post !== undefined ? selected_post.subtype : '';

		const getPostId =
			selected_post !== null && selected_post !== undefined ? selected_post.id : '';

		const selectedPostList =
			getPostId && getPostId > 0 && getPostType !== ''
				? getEntityRecords('postType', getPostType, {
						include: Number(getPostId),
				  })
				: [];

		const taxonomies = getPostType !== 'page' ? getTaxonomies() : [];

		const taxonomyLists =
			taxonomies && taxonomies.length > 0 && getPostType !== ''
				? taxonomies
						.filter(
							(item) => getPostType && item.types && item.types.includes(getPostType),
						)
						.map((item) => {
							return {
								label: item.name,
								value: item.slug,
							};
						})
				: [];

		return {
			getPostList: selectedPostList && selectedPostList.length > 0 ? selectedPostList[0] : [],
			getTaxonomies:
				taxonomyLists && taxonomyLists.length > 0
					? [
							{
								label: __('Select Taxonomy', 'pms'),
								value: null,
							},
							...taxonomyLists,
					  ]
					: [],
		};
	});

	const blockProps = useBlockProps();

	const decodeHTMLEntities = (content) => {
		return content.replace(/&#(\d+);/g, (match, dec) => `${String.fromCharCode(dec)}`);
	};

	const isSubheading =
		hide_overline ||
		selected_taxonomy === '' ||
		(selected_taxonomy &&
			getPostList.get_term_title &&
			(getPostList.get_term_title[selected_taxonomy] === '' ||
				getPostList.get_term_title[selected_taxonomy] === undefined));

	const getSummaryTitle =
		getPostList && getPostList.id > 0 && getPostList.get_extra_meta_fields.is_summary
			? __('Hide Summary', 'pms')
			: __('Hide Excerpt', 'pms');

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody
					className="tenup-panel__body"
					title={__('Post Picker Setting', 'pms')}
					initialOpen={false}
				>
					<PanelRow>
						<ToggleControl
							label={__('Hide Overline', 'pms')}
							checked={hide_overline || ''}
							onChange={(value) => setAttributes({ hide_overline: value })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Hide Image', 'pms')}
							checked={hide_image || ''}
							onChange={(value) => setAttributes({ hide_image: value })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Hide Headline', 'pms')}
							checked={hide_headline || ''}
							onChange={(value) => setAttributes({ hide_headline: value })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={getSummaryTitle}
							checked={hide_excerpt || ''}
							onChange={(value) => setAttributes({ hide_excerpt: value })}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Hide Link', 'pms')}
							checked={hide_link || ''}
							onChange={(value) => setAttributes({ hide_link: value })}
						/>
					</PanelRow>
				</PanelBody>
				{getTaxonomies && getTaxonomies.length > 0 && !hide_overline ? (
					<PanelBody
						className="tenup-panel__body"
						title={__('Overline Setting', 'pms')}
						initialOpen={false}
					>
						<PanelRow>
							<SelectControl
								label={__('Taxonomy', 'pms')}
								value={selected_taxonomy || ''}
								options={getTaxonomies}
								onChange={(value) => setAttributes({ selected_taxonomy: value })}
							/>
						</PanelRow>
					</PanelBody>
				) : (
					''
				)}
			</InspectorControls>
			{getPostList && getPostList.id > 0 ? (
				<BlockControls>
					<ToolbarGroup>
						<ToolbarItem
							onClick={() =>
								setAttributes({ selected_post: '', selected_taxonomy: '' })
							}
							as={Button}
						>
							{__('Replace', 'pms')}
						</ToolbarItem>
					</ToolbarGroup>
				</BlockControls>
			) : (
				''
			)}
			<div className="post-item-wrap">
				{getPostList && getPostList.id > 0 ? (
					<article key={`post-${getPostList.id}`} className="post-list">
						{!hide_overline &&
						getPostList.get_term_title[selected_taxonomy] !== undefined &&
						getPostList.get_term_title[selected_taxonomy] !== null &&
						getPostList.get_term_title[selected_taxonomy] !== '' ? (
							<h6 className="sub-heading">
								{getPostList.get_term_title[selected_taxonomy]}
							</h6>
						) : (
							''
						)}
						<div className={`post-content ${isSubheading ? 'no-sub-heading' : ''}`}>
							{!hide_image ? (
								<div className="image-wrap">
									{getPostList.featured_image_src ? (
										<img
											src={getPostList.featured_image_src}
											alt={getPostList.title.rendered}
										/>
									) : (
										''
									)}
								</div>
							) : (
								''
							)}
							{!hide_headline ? (
								<h3 className="featured-title">
									{decodeHTMLEntities(getPostList.title.rendered)}
								</h3>
							) : (
								''
							)}
							<div className="featured-content">
								{!hide_excerpt ? (
									<p>{getPostList.get_extra_meta_fields.description}</p>
								) : (
									''
								)}
								{!hide_link &&
								getPostList.get_external_title &&
								getPostList.get_external_url ? (
									<p>
										<a href={getPostList.get_extra_meta_fields.external_url}>
											{getPostList.get_extra_meta_fields.link_text}
										</a>
									</p>
								) : (
									''
								)}
							</div>
						</div>
					</article>
				) : (
					<ContentSearch
						onSelectItem={(item) => {
							setAttributes({ selected_post: item, selected_taxonomy: '' });
						}}
						mode="post"
						label={__('Search posts:', 'pms')}
						contentTypes={['any']}
					/>
				)}
			</div>
		</div>
	);
};

export default PostPickerItemBlockEdit;
