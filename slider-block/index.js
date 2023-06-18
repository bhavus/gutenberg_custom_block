import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import attributes from './attributes';
import edit from './edit';
import './editor.scss';

registerBlockType('wgb-blocks/slider-block', {
    title: __( 'Slider Block' ),
    description: __( 'Slider Block for Landing Page' ),
    category: 'custom-blocks', // new category 
    icon: 'list-view', // dashicon 
    keywords: [ 'Slider Block', 'Slider' ],
    edit: edit,
    attributes,
    save: ({ attributes }) => {
        const { images } = attributes;
        return(
            <div 
                className={`slider-block`} 
                // id={ sectionId }
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="my-slider">
                                {
                                    images && 
                                    images.map((el, index) => (
                                        <div key={index} style={{ position: "relative" }}>
                                            <img
                                                className={`tns-lazy-img`}
                                                src={el.url}
                                                data-src={el.url}
                                                alt=""
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                            {/* <TinySlider settings={settings}>
                                {images.map((el, index) => (
                                <div key={index} style={{ position: "relative" }}>
                                    <img
                                    className={`tns-lazy-img`}
                                    src={el.url}
                                    data-src={el.url}
                                    alt=""
                                    />
                                </div>
                                ))}
                            </TinySlider> */}
                            {/* <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    {
                                        images &&
                                        images.map( (item, index) => {
                                            return(
                                                <div className="swiper-slide">
                                                    <img src={item.url} alt={item.alt} />
                                                </div>
                                            )
                                        })
                                    }
                                </div> 
                            </div>  */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
