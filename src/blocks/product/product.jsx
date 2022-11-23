import { useState } from 'react';
import { product, reviews } from '../../data/data';
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
    let [selectedColorBtn, setSelectedColorBtn] = useState(2);

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
                                picked={product.colorPicked}
                            >
                                {properties.color.items.map((item, index) => {
                                    return (
                                        <Btn
                                            config={{
                                                border: true,
                                                hasImage: true,
                                                selected: index === selectedColorBtn
                                            }}
                                            onClick={() => setSelectedColorBtn(index)}
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
                                picked={product.ramPicked}
                            >
                                {properties.ram.items.map((item, index) => {
                                    return (
                                        <Btn
                                            config={{
                                                border: true,
                                                selected: index === selectedRamBtn
                                            }}
                                            onClick={() => setSelectedRamBtn(index)}
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
