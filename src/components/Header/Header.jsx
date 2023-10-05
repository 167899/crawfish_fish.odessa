import { NavItems } from 'components/NavItems/NavItems';
import { Button } from 'components/Button/Button';
import css from './Header.module.css';
import { SvgSelector } from 'components/Icons/Icons';
import { Link } from 'react-router-dom';
import React, { useState, 
  // useEffect 
} from 'react';

export const Header = () => {
  const [elementClass, setElementClass] = useState('');
  const [buttonSvgId, setbuttonSvgId] = useState('boorger');

  const toggleClass = () => {
    if (elementClass === '') {
      setElementClass('navShow');
      setbuttonSvgId('close');
    } else {
      setElementClass('');
      setbuttonSvgId('boorger');
    }
  };
//   useEffect((e) => {
//     function callback(e) {
//       // console.log(e.target)
//       if(e.target === 'a'){
//       // if (elementClass === 'navShow') {
//       //   // setElementClass('');
//       //   setbuttonSvgId('boorger');
//       // } else {
//         // setElementClass('');
//         // setbuttonSvgId('boorger');
//       // }
//     }
//   }
  
//   	document.addEventListener('click', callback)
  
//   	return () => document.current?.removeEventListener('click', callback)
// }, [elementClass])



  // useEffect(() => {
  //   if (elementClass === '') {
  //     setElementClass('navShow');
  //     setbuttonSvgId('close');
  //   } else {
  //     setElementClass('');
  //     setbuttonSvgId('boorger');
  //   }
  // }, [elementClass]);
  return (
    <header className={css.header}>
      <div className={`container containerFlex ${css.containerHeaderFlex}`}>
        <div className={css.iconContainer}>
          <Link to={''}>
            <SvgSelector
              className={'logoMinHeader'}
              id={'logo-min'}
            ></SvgSelector>
          </Link>
          <Button 
          onClick={toggleClass} 
          name={<SvgSelector id={buttonSvgId}></SvgSelector>}
          className={css.boorgerButton}>
          </Button>
          
        </div>
        <div className={css.textBlock}>
          <div className={css.phoneNumber}>
            <a className={css.phoneNumberLink} href="tel:+380660245006">
              <span>тел. </span>
              +38 066 024 50 06
            </a>
          </div>{' '}
          <NavItems onClick={toggleClass} addClassName={elementClass}/>
        </div>
      </div>
    </header>
  );
};
