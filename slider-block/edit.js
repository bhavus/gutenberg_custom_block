import { InspectorControls, MediaPlaceholder } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import TinySlider from "tiny-slider-react";

const colors = [
    { 
        name: 'Green', 
        color: '#0e9b75'
    },
    { 
        name: 'Red', 
        color: '#ff0000'
    },
    { 
        name: 'Black', 
        color: '#000000'
    },
    { 
        name: 'White', 
        color: '#ffffff'
    },
    { 
        name: 'Light Yellow', 
        color: '#E9F7CA'
    },
    { 
        name: 'Orange', 
        color: '#f0a83c'
    },
];
const headingTags = [
    {
        label: 'h1',
        value: 'h1' 
    },
    {
        label: 'h2',
        value: 'h2' 
    },
    {
        label: 'h3',
        value: 'h3' 
    },
    {
        label: 'h4',
        value: 'h4' 
    },
    {
        label: 'h5',
        value: 'h5' 
    },
    {
        label: 'h6',
        value: 'h6' 
    }
];

const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true
  };

const SliderBlock = ({ attributes, setAttributes }) => {
    const { className, images } = attributes;
    console.log( images )
    return (
        <div>
            <InspectorControls>        
                <PanelBody 
                    title={__("Section Settings")}
                    initialOpen= { true }
                >
                    sfsff
                </PanelBody>
            </InspectorControls>
            <div className={ `slider-block ${className}` }>
                <div className="container">
                    <div className="row align-items-center">
                            {
                                images ? 
                                <>
                                    <div className="col-6">
                                        <TinySlider settings={settings}>
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
                                        </TinySlider>
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
                                </>
                                :
                                <MediaPlaceholder
                                    icon="format-image"
                                    onSelect={ media => setAttributes({ images: media }) }
                                    // onSelectURL={ url => setAttributes({ url })}
                                    allowedTypes={["image"]}
                                    multiple = { true }
                                    labels = { { title: 'Add Slider Images' } } 
                                />
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SliderBlock;