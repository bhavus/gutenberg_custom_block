import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.css';

const HeroInsideBockEdit = () => {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<div className="hero-inside-block">
				<div className="hero-inside-container">
					<InnerBlocks
						template={[
							[
								'core/columns',
								{},
								[
									[
										'core/column',
										{
											className: 'hero-inside-column hero-inside-left',
											width: '40%',
										},
										[
											[
												'core/heading',
												{
													placeholder: __(
														'Sub Title',
														'everbridge-theme',
													),
													className: 'hero-sub-title',
													level: 3,
												},
											],
											[
												'core/heading',
												{
													placeholder: __('Title', 'everbridge-theme'),
													className: 'hero-entry-title',
													level: 1,
												},
											],
										],
									],
									[
										'core/column',
										{
											className: 'hero-inside-column hero-inside-right',
											width: '60%',
										},
										[
											[
												'core/image',
												{
													className: 'hero-image-wrap',
												},
											],
										],
									],
								],
							],
						]}
						templateLock="all"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroInsideBockEdit;
