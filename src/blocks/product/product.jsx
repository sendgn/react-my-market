// React
import { useState } from 'react';
// Data
import { product, reviews } from '../../data/data';
// Components
import Sidebar from '../sidebar/sidebar';
import ComparisonChart from '../comparison-chart/comparisonChart';
import Property from '../property/property';
import List from '../list/list';
import Reviews from '../reviews/reviews';
import Feedback from '../feedback/feedback';
import Btn from '../btn/btn';

function Product() {
    const { properties, properties: { description } } = product;
    let [selectedRamBtn, setSelectedRamBtn] = useState(0);
    let [selectedRamText, setSelectedRamText] = useState('128 Гб');
    let [selectedColorBtn, setSelectedColorBtn] = useState(3);
    let [selectedColorText, setSelectedColorText] = useState('синий')

    const handleColorBtnClick = (index, text) => {
        setSelectedColorBtn(index);
        setSelectedColorText(text);
    }

    const handleRamBtnClick = (index, text) => {
        setSelectedRamBtn(index);
        setSelectedRamText(text);
    }

    return (
        <main className="product container">
            {/* Product header */}
            <div className="product__header">
                {/* Product name */}
                <h2 className="product__name font__h2">{product.name}, {product.colorPicked}</h2>
                {/* Product gallery */}
                <div className="product__gallery">
                    {product.gallery.map(image => {
                        return (
                            <div className="product__img-wrapper" key={image.src}>
                                <img className="product__img" src={image.src} alt={image.alt} />
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Product body */}
            <div className="product__body">
                {/* Product main */}
                <div className="product__main">
                    {/* Product info */}
                    <div className="product__info">
                        {/* Properties */}
                        <div className="product__properties">
                            {/* Color */}
                            <Property
                                className="product__property"
                                title={properties.color.title}
                                picked={selectedColorText}
                            >
                                {properties.color.items.map((item, index) => {
                                    return (
                                        <Btn
                                            config={{
                                                border: true,
                                                hasImage: true,
                                                selected: index === selectedColorBtn
                                            }}
                                            onClick={() => handleColorBtnClick(index, item.text)}
                                            key={item.src}
                                        >
                                            <img src={item.src} alt={item.alt} />
                                        </Btn>
                                    );
                                })}
                            </Property>
                            {/* RAM */}
                            <Property
                                className="product__property"
                                title={properties.ram.title}
                                picked={selectedRamText}
                            >
                                {properties.ram.items.map((item, index) => {
                                    return (
                                        <Btn
                                            config={{
                                                border: true,
                                                selected: index === selectedRamBtn
                                            }}
                                            onClick={() => handleRamBtnClick(index, item)}
                                            key={item}
                                        >
                                            {item}
                                        </Btn>
                                    );
                                })}
                            </Property>
                            {/* Characteristics */}
                            <Property
                                className="product__property"
                                title={properties.charcs.title}
                            >
                                <List items={properties.charcs.items}/>
                            </Property>
                            {/* Description */}
                            <Property
                                className="product__property"
                                title={description.title}
                            >
                                <div className="paragraphs">
                                    <div>
                                        {description.features.map((feature, i) => {
                                            return (i !== description.features.length - 1 ?
                                                <div key={`${feature}`}>{feature}</div> :
                                                <i key={`${feature}`}>{feature}</i>
                                            );
                                        })}
                                    </div>
                                    {properties.description.paragraphs.map(para => {
                                        return <p key={para}>{para}</p>
                                    })}
                                </div>
                            </Property>
                            {/* Model comparison chart */}
                            <Property
                                className="product__property"
                                title={properties.comparison.title}
                            >
                                <ComparisonChart table={properties.comparison.table} />
                            </Property>
                        </div>
                    </div>

                    <Reviews
                        title={reviews.title}
                        count={reviews.count}
                        items={reviews.items}
                    />

                    <Feedback />                    
                </div>

                <Sidebar />
            </div>
        </main>
    );
}

export default Product;
