import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNextStep } from '../../app/components/slice';
import { tr } from '../../app/components/common/lang';

import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';

import './productInformation.scss';

export default function Step1() {
    const { disabledNext } = useSelector(store => store.nextStep);
    const { lang } = useSelector(store => store.lang);
    
    const dispatch = useDispatch();

    const onChangeCheck = () => {
        dispatch(setNextStep(!disabledNext));
    }

    return (
        <React.Fragment>
            <div id="card-product-information">
            <div id="title-step1">
                {tr("Crea tu Password Manager", lang)}
                <div id="blue-line"></div>
            </div>
            <div className="info-text-step1">
                <div className="info-text-step1-50">
                    <img src={image1} alt="Imagen 1 información"/>
                    <div className="info-text-imag">{tr("info-text-imag1-step1", lang)}</div>
                </div>
                <div className="info-text-step1-50">
                    <img src={image2} alt="Imagen 2 información"/>
                    <div className="info-text-imag">{tr("info-text-imag2-step1", lang)}</div>
                </div>
            </div>
            <div className="info-text-step1">
                <div className="subtitle-info-text">{tr("Cómo funciona", lang)}</div>
                <span>{tr("info-text1-step1", lang)}</span>
            </div>
            <div className="info-text-step1">
                <div className="subtitle-info-text">{tr("Que datos puedes guardar", lang)}</div>
               <span>{tr("info-text2-step1", lang)}</span>
            </div>
            <div className="info-text-step1">
            <input 
                type="checkbox" 
                defaultChecked={disabledNext} 
                onChange={onChangeCheck}
            />
            <span className="info-checkbox">{tr("info-checkbox", lang)}</span>
            </div>
            </div>
        </React.Fragment>
    );
}
