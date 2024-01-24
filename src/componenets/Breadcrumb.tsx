

import React from 'react';
import { TfiAngleRight } from "react-icons/tfi";
interface BreadcrumbProps {
    items: Array<string>; 
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
            <div className='flex gap-2 text-sm text-tertiary-text'>
                {items.map((item, index) => (
                    <div key={index} className='flex gap-2 items-center'>
                        <p className={index === 0 ? 'font-semibold' : ''}>{item}</p>
                        {index !== items.length - 1 && (
                            <p className='text-primary-text font-semibold'>
                                <TfiAngleRight className='w-4 h-4' />
                            </p>
                        )}
                    </div>
                ))}
            </div>
        );
};

export default Breadcrumb;
